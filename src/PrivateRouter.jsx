import React from "react";
import { Outlet } from "react-router-dom";
import useUser from "./hooks/useUser";
const PrivateRouter = () => {
  const { user, navigate } = useUser();

  return user ? <Outlet /> : navigate("/auth/login");
};

export default PrivateRouter;
