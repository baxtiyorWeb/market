import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";

const HeadUserLinks = () => {
  const user = true;
  return (
    <>
      <div>
        <Link
          to={"/profile/dashboard?tab=2"}
          className="hover/heart flex flex-col items-center justify-center"
        >
          <FaRegHeart className="text text-2xl text-textColor hover/heart:text-bgColor" />
          <span className="text text-spanColor">Sevimlilar</span>
        </Link>
      </div>
      <div>
        <Link to={"/"} className="flex flex-col items-center justify-center">
          <SlBasket className="text text-2xl text-textColor " />
          <span className="text text-spanColor">savatcha</span>
        </Link>
      </div>
      <div>
        <Link
          to={user ? `/profile/dashboard?tab=1` : "/auth/login"}
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
