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
      if (res.data) {
        setUser(res.data);
        setToken(res.data);

        // or undefined if not found
        console.log(res.data);
        // 'user_info' cookie ni olish

        localStorage.setItem("accessToken", res.data.accessToken);
        // navigate("/profile/dashboard?tab=1");
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
