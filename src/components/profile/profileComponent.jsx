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
      setUser(res.data?.data);
    } catch (error) {
      window.location = "/auth/login";
      throw new Error(error?.response?.message);
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
