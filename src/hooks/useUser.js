import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      try {
        const decodedUser = jwtDecode(token);
        setUser(decodedUser);

        // Agar foydalanuvchi login bo'lsa, profile qismiga o'tish
        navigate("/profile/dashboard?tab=1");
      } catch (error) {
        console.error("Failed to decode token", error);

        // Agar token xato bo'lsa, login sahifasiga o'tish
        navigate("/auth/login");
      }
    }
  }, [navigate, token]);

  return { user, token, navigate };
};

export default useUser;
