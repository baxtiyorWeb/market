import React from "react";
import { Outlet } from "react-router-dom";
import useUser from "./hooks/useUser";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useUser();
  return user ? <Outlet /> : (window.location.href = "/auth/login");
};

export default PrivateRoute;
