// useUser.jsx

import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState();
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const tokens = localStorage.getItem("accessToken");

    if (tokens) {
      setToken(tokens);
      try {
        const decodedUser = jwtDecode(tokens);
        setUser(decodedUser);
        navigate("/profile/dashboard?tab=1");
      } catch (error) {
        console.error("Failed to decode token", error);
        navigate("/auth/login");
      }
    }
  }, [navigate, token, refetch]);

  return {
    user,
    token,
    navigate,
    setRefetch,
  };
};

export default useUser;
