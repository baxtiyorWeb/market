import { Button } from "antd";
import { useEffect, useState } from "react";
import api from "../../config/api/api";
import Container from "../../shared/Container";
import UserBalance from "./user/userBalance";
import UserTabs from "./user/userTabs";

export default function ProfileComponent() {
  const [user, setUser] = useState();
  const backToLastPage = () => {
    window.location = "/";
  };

  const checkAuth = async () => {
    try {
      const res = await api.get("/user/1");
      const userData = res.data?.data;

      // User data ni o'rnatish
      if (userData) {
        setUser(userData);
      }

      // API javobi status kodini tekshirish
      if (res.status === 403) {
        window.location = "/auth/login";
      }
    } catch (error) {
      // Xatolik status kodi 403 bo'lsa, login sahifasiga yo'naltirish
      if (error.response?.status === 403) {
        window.location = "/auth/login";
      } else {
        const errorMessage =
          error?.response?.message || "An unexpected error occurred";
        throw new Error(errorMessage);
      }
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Container>
      <h1 className="flex h-10 items-center justify-center bg-green-300 font-medium">
        Xush kelibsiz {user?.fullName}
      </h1>
      <Button
        onClick={backToLastPage}
        to={"/"}
        className="relative top-5 h-10 w-[140px] rounded-md border p-2"
      >
        bosh sahifaga
      </Button>
      <div className="mt-11 h-full  w-full rounded-t-2xl  border bg-[#F5F5F5]">
        <div className="mb-[20px] ">
          <UserBalance />
        </div>
        <UserTabs />
      </div>
    </Container>
  );
}
