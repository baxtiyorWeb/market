import React from "react";
import { FaCog, FaRegHeart } from "react-icons/fa";
import { MdOutlineDashboard, MdOutlineMail } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import MyFavourites from "../MyFavourites";
import Pricing from "../Pricing";
import Products from "../Products";
import Settings from "../Settings";
import "../product-details.css";
export default function UserTabs({ userData }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  const tabs = (n) => {
    setSearchParams({ tab: n });
  };
  return (
    <div>
      <div className="flex w-full items-center justify-between  p-1">
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
          <Products userData={userData} />
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
          <Settings userData={userData} />
        </div>
      </div>
    </div>
  );
}
