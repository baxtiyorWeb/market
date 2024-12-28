import { NavLink, useSearchParams } from "react-router-dom";
import "../product-details.css";
import { Cog, Heart, LayoutDashboardIcon, Mail } from "lucide-react";
export default function UserTabs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab") || 1;
  const tabs = (n) => {
    setSearchParams({ tab: n });
  };
  return (
    <div className="border-b  pb-3  ">
      <div className="flex w-full items-center justify-between p-1  md:grid md:grid-cols-2 md:gap-2">
        <NavLink
          to={"/profile/dashboard/products"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "tab-el-active" : "tab-el"
          }
        >
          <i className="tab-icon">
            <LayoutDashboardIcon />
          </i>
          Elonlarim
        </NavLink>
        <NavLink
          to={"/profile/dashboard/favourites"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "tab-el-active" : "tab-el"
          }
        >
          <i className="tab-icon">
            <Heart />{" "}
          </i>
          yoqtirganlarim
        </NavLink>
        <div
          className={tab == 4 ? "tab-el-active" : "tab-el"}
          onClick={() => tabs(4)}
        >
          <i className="tab-icon">
            {" "}
            <Mail />
          </i>
          <span>xabarlarim</span>
        </div>
        <div
          className={tab == 5 ? "tab-el-active" : "tab-el"}
          onClick={() => tabs(5)}
        >
          <i className="tab-icon">
            {" "}
            <Mail />
          </i>
          <span>Narxlar</span>
        </div>
        <NavLink
          to={"/profile/dashboard/settings"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "tab-el-active" : "tab-el"
          }
        >
          <i className="tab-icon">
            <Cog />
          </i>
          <span>sozlamalar</span>
        </NavLink>
      </div>
    </div>
  );
}
