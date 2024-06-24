import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useUser from "./hooks/useUser";

const PrivateRouter = () => {
  const { user } = useUser();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to={{
          pathname: "/auth/login",
          state: { from: location.pathname },
        }}
      />
    );
  } else {
    window.location.pathname;
  }

  return (
    <div>
      {/* Privat routerlar uchun content */}
      {/* Masalan:  */}
      <Outlet />
    </div>
  );
};

export default PrivateRouter;
