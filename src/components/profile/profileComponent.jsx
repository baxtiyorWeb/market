import { Button } from "antd";
import { useEffect, useState } from "react";
import api from "../../config/api/api";
import Container from "../../shared/Container";
import UserBalance from "./user/userBalance";
import UserTabs from "./user/userTabs";

export default function ProfileComponent() {
  const [user, setUser] = useState();
  const [cookieValue, setCookieValue] = useState("");
  const checkAuth = async () => {
    try {
      api
        .get("user/1", {
          headers: {
            "Set-Cookie": "user_info",
          },
        })

        .then((response) => {
          //
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      // User data ni o'rnatish

      // API javobi status kodini tekshirish
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
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    console.log(value);
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Container>
      <h1 className="flex h-10 items-center justify-center bg-green-300 font-medium">
        Xush kelibsiz {user?.fullName}
      </h1>
      <Button
        // onClick={backToLastPage}/
        to={"/"}
        className="relative top-5 h-10 w-[140px] rounded-md border p-2"
      >
        bosh sahifaga
        {cookieValue}
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
