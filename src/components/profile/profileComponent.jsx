import Container from "../../shared/Container";
import UserBalance from "./user/userBalance";
import UserTabs from "./user/userTabs";

export default function ProfileComponent() {
  return (
    <Container>
      <div className="mt-11 h-[230px] w-full rounded-2xl bg-[#F5F5F5] p-5 px-[66px]">
        <div className="mb-[32px] ">
          <UserBalance />
        </div>
        <div className="border">
          <UserTabs />
        </div>
      </div>
    </Container>
  );
}
