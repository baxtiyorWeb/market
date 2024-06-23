import React from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import useUser from "./hooks/useUser";

const PrivateRouter = () => {
  const { user, token } = useUser();
  const location = useLocation();
  const navigate = useNavigate();

  if (!user) {
    return (
      <Navigate
        to={{
          pathname: "/auth/login",
          state: { from: location.pathname },
        }}
      />
    );
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
