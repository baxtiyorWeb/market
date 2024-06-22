import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../config/api/api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [token, setToken] = useState(localStorage.getItem("accessToken") || "");
  const navigate = useNavigate();
  const loginAction = async (data) => {
    try {
      const response = await api.post("/authority/sign-in", {
        ...data,
      });
      const res = await response.data;
      const cookies = response.headers["set-cookie"];
      console.log(cookies);
      if (res.data) {
        setUser(res.data);
        setToken(res.data.accessToken);
        const cookies = document.cookie;
        console.log("Barcha cookie-lar:", cookies);
        console.log(response.data.Cookies);
        // 'user_info' cookie ni olish
        const userInfo = getCookie("authority");
        console.log("user_info cookie:", userInfo);

        localStorage.setItem("accessToken", res.data.accessToken);
        navigate("/profile/dashboard?tab=1");
        return;
      } else {
        setError(res?.errorResponse);
      }
      throw new Error(res.message);
    } catch (err) {
      toast.error(err?.response?.data?.errorResponse?.message);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, error, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
