import React from "react";
import { useAuth } from "../../context/AuthContext";

export default function Register() {
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  const logIn = (e) => {
    e.preventDefault();

    setIsLoggedIn(true);
    setAuthUser({
      Name: "Baxtiyor Qurbonnazarov",
    });
  };
  const logOut = (e) => {
    e.preventDefault();

    setIsLoggedIn(false);
    setAuthUser({
      Name: null,
    });
  };

  return (
    <div>
      <span>
        User is Currently: {isLoggedIn ? "login success" : "lgout success"}
      </span>
      <button onClick={logOut}>logOut</button>
      <button onClick={logIn}>logIn</button>
    </div>
  );
}
