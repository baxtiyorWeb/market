import { Button } from "antd";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import Container from "../../shared/Container";
import UserBalance from "./user/userBalance";
import UserTabs from "./user/userTabs";

export default function ProfileComponent() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    // Local storage yoki cookie-dan JWT tokenni oling
    const token = localStorage.getItem("accessToken"); // Yoki cookie'dan oling

    if (token) {
      try {
        // Tokenni dekodlash
        const decoded = jwtDecode(token);
        console.log(decoded);
        // Foydalanuvchi ma'lumotlarini state'ga saqlash
        setUserData(decoded);
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }
  return (
    <Container>
      <h1 className="flex h-10 items-center justify-center bg-green-300 font-medium">
        Xush kelibsiz {userData?.firstName}
      </h1>
      <Button
        // onClick={backToLastPage}/
        to={"/"}
        className="relative top-5 h-10 w-[140px] rounded-md border p-2"
      >
        bosh sahifaga
      </Button>
      <div className="mt-11 h-full  w-full rounded-t-2xl  border bg-[#F5F5F5]">
        <div className="mb-[20px] ">
          <UserBalance userData={userData} />
        </div>
        <UserTabs />
      </div>
    </Container>
  );
}
