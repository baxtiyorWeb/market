import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { FaPlusCircle, FaRegHeart } from "react-icons/fa";
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
        <Link
          to={"/product-form/add-product"}
          className="flex flex-col items-center justify-center"
        >
          <FaPlusCircle className="text text-2xl text-textColor " />
          <span className="text text-spanColor">e&apos;lon qo&apos;shish</span>
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
