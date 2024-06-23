import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../config/api/api";
import useUser from "../hooks/useUser";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [error, setError] = useState("");
  const { user, navigate } = useUser();
  const loginAction = async (data) => {
    try {
      const response = await api.post("/authority/sign-in", {
        ...data,
      });
      const res = await response.data;
      if (res.data) {
        const token = res.data.accessToken;

        localStorage.setItem("accessToken", token);

        window.location.href = "/profile/dashboard?tab=1";
      } else {
        setError(res?.errorResponse);

        throw new Error(res.message);
      }
    } catch (err) {
      toast.error(err?.response?.data?.errorResponse?.message);
    }
  };

  useEffect(() => {
    if (!!user) {
      return false;
    } else {
      navigate("/profile/dashboard?tab=1");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ error, loginAction }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
