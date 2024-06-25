import React from "react";
import { Outlet } from "react-router-dom";

const UserTabLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default UserTabLayout;
