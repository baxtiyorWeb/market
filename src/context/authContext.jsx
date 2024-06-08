import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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
        setToken(res.data.accessToken);
        localStorage.setItem("accessToken", res.data.accessToken);
        window.location = "/profile/dashboard?tab=1";
        return;
      } else {
        setError(res?.errorResponse);
      }
      throw new Error(res.message);
    } catch (err) {
      setError(err?.response?.data?.errorResponse?.message);
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
