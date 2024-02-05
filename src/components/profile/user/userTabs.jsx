import React from "react";
import { NavLink } from "react-router-dom";

export default function UserTabs() {
  return (
    <div>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      ></NavLink>
    </div>
  );
}
