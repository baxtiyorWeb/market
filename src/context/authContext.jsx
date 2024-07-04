import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../config/api/api";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [error, setError] = useState("");
  const loginAction = async (data) => {
    try {
      const response = await api.post("/authority/sign-in", data);
      const res = response.data;

      if (res.data) {
        const token = res.data.accessToken;
        const refreshToken = res.data.refreshToken;
        localStorage.setItem("accessToken", token);
        localStorage.setItem("refreshToken", refreshToken);
        window.location.href = "/profile/dashboard?tab=1";
      } else {
        setError(res.errorResponse);
        console.log(res.message);
      }
    } catch (err) {
      const errorMessage =
        err?.response?.data?.errorResponse?.message || err.message;
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <AuthContext.Provider value={{ error, loginAction }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
