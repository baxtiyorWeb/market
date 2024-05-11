import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeadUserLinks = () => {
  return (
    <>
      <div className="mx-3">
        <Link
          to={"/profile/dashboard?tab=2"}
          className="hover/heart flex flex-col items-center justify-center"
        >
          <FaRegHeart className="text text-2xl text-textColor hover/heart:text-bgColor" />
          <span className="text text-spanColor">Sevimlilar</span>
        </Link>
      </div>
      <div className="mx-3">
        <Link
          to={`/profile/dashboard?tab=1`}
          className="flex flex-col items-center justify-center"
        >
          <UserOutlined className="text text-2xl text-textColor " />
          <span className="text text-spanColor">kabinet</span>
        </Link>
      </div>
    </>
  );
};

export default HeadUserLinks;
