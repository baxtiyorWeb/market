import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useUser from "./hooks/useUser";
import Loading from "./ui/loading/Loading";

const PrivateRouter = () => {
  const { user, token, refetch } = useUser();
  const location = useLocation();
  if (refetch) return <Loading />;
  if (!user && !token) {
    return (
      <Navigate
        to={{
          pathname: "/auth/login",
          state: { from: location.pathname },
        }}
      />
    );
  } else {
    <Outlet />;
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
