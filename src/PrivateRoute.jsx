import React from "react";
import { Outlet } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = false;
  return user ? <Outlet /> : (window.location.href = "/auth/login");
};

export default PrivateRoute;
