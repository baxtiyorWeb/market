import { Button } from "antd";
import { useEffect, useState } from "react";
import Container from "../../shared/Container";
import UserBalance from "./user/userBalance";
import UserTabs from "./user/userTabs";

export default function ProfileComponent() {
  const [user, setUser] = useState();
  const [cookieValue, setCookieValue] = useState("");
  const checkAuth = async () => {
    try {
      const response = await fetch("/user/1", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        credentials: "same-origin",
      });

      const cookie = response.headers.get("Set-Cookie");
      console.log(cookie);
      const values = (document.cookie = "ok=ok;");
      console.log(values);
      // Javobni tekshirish
      console.log("Javob:", response.data);

      // Barcha cookie-larni olish
      const cookies = document.cookie;
      console.log("Barcha cookie-lar:", cookies);

      // 'user_info' cookie ni olish
      const userInfo = getCookie("user_info");
      console.log("user_info cookie:", userInfo);

      // 'authority' cookie ni olish
      const authority = getCookie("authority");
      console.log("authority cookie:", authority);
    } catch (error) {
      console.error("Xatolik:", error);
      if (error.response?.status === 403) {
        // window.location = "/auth/login";
      }
    }
  };

  // Cookie olish uchun yordamchi funksiya
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
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
