import { createContext, useContext, useEffect, useState } from "react";
import api from "./../config/api/api";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/user/1");
        setUser(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setisLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = async (username, password) => {
    try {
      const res = await api.post("/authority/sign-in", { username, password });
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = {
    user,
    login,
    isLoading,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
