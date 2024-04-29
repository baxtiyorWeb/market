import React from "react";
import { FaCog, FaRegHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineDashboard, MdOutlineMail } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import Products from "/src/components/profile/profile-details/Products";
import MyFavourites from "/src/components/profile/profile-detailsMyFavourites";
import Pricing from "/src/components/profile/profile-detailsPricing";
import "/src/components/profile/profile-detailsproduct-details.css";
export default function UserTabs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  const tabs = (n) => {
    setSearchParams({ tab: n });
  };
  return (
    <div>
      <div className="flex w-full items-center justify-evenly  p-1">
        <div
          className={tab == 1 ? "tab-el-active" : "tab-el"}
          onClick={() => tabs(1)}
        >
          <i className="tab-icon">
            <MdOutlineDashboard />
          </i>
          <span>Productlarim</span>
        </div>

        <div
          className={tab == 2 ? "tab-el-active" : "tab-el"}
          onClick={() => tabs(2)}
        >
          <i className="tab-icon">
            <FaRegHeart />{" "}
          </i>
          <span>yoqtirganlarim</span>
        </div>
        <div
          className={tab == 3 ? "tab-el-active" : "tab-el"}
          onClick={() => tabs(3)}
        >
          <i className="tab-icon">
            <IoSearchOutline />
          </i>
          <span>Qidiruvlarim</span>
        </div>
        <div
          className={tab == 4 ? "tab-el-active" : "tab-el"}
          onClick={() => tabs(4)}
        >
          <i className="tab-icon">
            {" "}
            <MdOutlineMail />
          </i>
          <span>xabarlarim</span>
        </div>
        <div
          className={tab == 5 ? "tab-el-active" : "tab-el"}
          onClick={() => tabs(5)}
        >
          <i className="tab-icon">
            {" "}
            <MdOutlineMail />
          </i>
          <span>Narxlar</span>
        </div>
        <div
          className={tab == 6 ? "tab-el-active" : "tab-el"}
          onClick={() => tabs(6)}
        >
          <i className="tab-icon">
            <FaCog />
          </i>
          <span>sozlamalar</span>
        </div>
      </div>

      <div>
        <div className={tab == 1 ? `tabs-active` : `tabs-none`}>
          <Products />
        </div>

        <div className={tab == 2 ? `tabs-active` : `tabs-none`}>
          <h1>
            <MyFavourites />
          </h1>
        </div>
        <div className={tab == 3 ? `tabs-active` : `tabs-none`}>
          <h1>My Searches</h1>
        </div>
        <div className={tab == 4 ? `tabs-active` : `tabs-none`}>
          <h1>Xabarlar</h1>
        </div>
        <div className={tab == 5 ? `tabs-active` : `tabs-none`}>
          <Pricing />
        </div>
        <div className={tab == 6 ? `tabs-active` : `tabs-none`}>
          <h1>Settings</h1>
        </div>
      </div>
    </div>
  );
}
