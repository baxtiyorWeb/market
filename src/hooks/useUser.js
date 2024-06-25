import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("accessToken"));
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const handleToken = () => {
      const storedToken = localStorage.getItem("accessToken");

      if (!storedToken) {
        navigate("/auth/login");
        return;
      }

      try {
        const decodedUser = jwtDecode(storedToken);
        setUser(decodedUser);
        setToken(storedToken);
      } catch (error) {
        console.error("Failed to decode token", error);
        window.location.href = "/auth/login";
      }
    };

    if (refetch || !user) {
      handleToken();
      setRefetch(false);
    }

    if (user && token) {
      // navigate("/profile/dashboard");
    }
  }, [navigate, user, token, refetch]);

  return {
    user,
    token,
    setRefetch,
  };
};

export default useUser;
