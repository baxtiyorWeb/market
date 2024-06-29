import { PlusCircleOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAddFavourite from "../../hooks/useAddFavourite";
import useUser from "./../../hooks/useUser";
const HeadUserLinks = () => {
  const { savedLocal } = useAddFavourite();
  const { user, token } = useUser();
  return (
    <>
      <div className="mx-3">
        <Link
          to={`${user && token ? `/product-form/add-product` : "/auth/login"}`}
          className="flex flex-col items-center justify-center"
        >
          <PlusCircleOutlined className="text text-base  text-textColor " />
          <span className="text text-[16px] text-spanColor">kabinet</span>
        </Link>
      </div>
      <div className="mx-3 ">
        <Link
          to={"/profile/dashboard/favourites"}
          className="hover/heart relative flex flex-col items-center justify-center"
        >
          <FaRegHeart className="text text-base text-textColor hover/heart:text-bgColor" />
          <span className="text text-[16px] text-spanColor">Sevimlilar</span>
          <span className="absolute -top-5 right-0 flex h-5 w-5 items-center justify-center rounded-md bg-bgColor p-3">
            {savedLocal()}
          </span>
        </Link>
      </div>
      <div className="mx-3">
        <Link
          to={`/profile/dashboard/products`}
          className="flex flex-col items-center justify-center"
        >
          <UserOutlined className="text text-base  text-textColor " />
          <span className="text text-[16px] text-spanColor">kabinet</span>
        </Link>
      </div>
    </>
  );
};

export default HeadUserLinks;
