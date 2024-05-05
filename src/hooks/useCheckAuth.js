import { useEffect, useState } from "react";
import api from "../config/api/api";

const useCheckAuth = () => {
  const [authCheck, setAuthCheck] = useState([]);
  const checkAuth = async () => {
    try {
      const res = await api.get("/user/10");
      setAuthCheck(res.data.data);
    } catch (error) {
      throw new Error("error new Error");
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return {
    authCheck,
  };
};

export default useCheckAuth;
