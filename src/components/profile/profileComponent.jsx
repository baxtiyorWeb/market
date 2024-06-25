import { Link, Outlet } from "react-router-dom";
import useUser from "../../hooks/useUser";
import Container from "../../shared/Container";
import UserBalance from "./user/userBalance";
import UserTabs from "./user/userTabs";
export default function ProfileComponent() {
  const { user } = useUser();
  return (
    <Container>
      <h1 className="flex h-10 items-center justify-center bg-green-300 font-medium">
        Xush kelibsiz {user?.firstName}
      </h1>
      <Link
        // onClick={backToLastPage}/
        to={"/"}
        className="relative top-5 h-10 w-[140px] rounded-md border p-2"
      >
        bosh sahifaga
      </Link>
      <div className="mt-11 h-full  w-full rounded-t-2xl  border bg-[#F5F5F5]">
        <div className="mb-[20px] ">
          <UserBalance />
          <UserTabs />
        </div>
        <Outlet />
      </div>
    </Container>
  );
}
