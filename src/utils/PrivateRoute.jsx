import React from "react";
import { Navigate, Route } from "react-router-dom";

function PrivateRoute({ element, path }) {
  const authed = false; // isauth() returns true or false based on localStorage
  const ele = authed === true ? element : <Navigate to="/Home" />;
  return <Route path={path} element={ele} />;
}

export default PrivateRoute;
