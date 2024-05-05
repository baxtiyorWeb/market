import { Button } from "antd";
import { useAuth } from "../../context/AuthContext";
import Container from "../../shared/Container";
import UserBalance from "./user/userBalance";
import UserTabs from "./user/userTabs";

export default function ProfileComponent() {
  const { user } = useAuth();
  console.log(user);
  const backToLastPage = () => {
    window.location = "/";
  };
  return (
    <Container>
      <Button
        onClick={backToLastPage}
        to={"/"}
        className="relative top-5 h-10 w-[140px] rounded-md border p-2"
      >
        {user?.username}
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
