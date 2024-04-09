import { useState } from "react";
import { registerLoginAndPassword } from "../exports/API";

const useAuth = () => {
  const [auth, setAuth] = useState({
    login: "",
    password: "",
    rePassword: "",
  });

  return { registerLoginAndPassword, setAuth, auth };
};

export default useAuth;
