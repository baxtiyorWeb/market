import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerLoginAndPassword } from "../exports/api";

const useAuth = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    login: "",
    password: "",
    rePassword: "",
  });
  const [isLoading, setisLoading] = useState(false);
  const createUser = () => {
    try {
      setisLoading(true);
      registerLoginAndPassword(auth);
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };
  console.log(isLoading);
  return { registerLoginAndPassword, createUser, setAuth, auth, isLoading };
};

export default useAuth;
