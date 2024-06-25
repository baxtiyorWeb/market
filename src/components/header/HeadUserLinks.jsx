import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAddFavourite from "../../hooks/useAddFavourite";

const HeadUserLinks = () => {
  const { savedLocal } = useAddFavourite();
  return (
    <>
      <div className="mx-3 ">
        <Link
          to={"/profile/dashboard/favourites"}
          className="hover/heart relative flex flex-col items-center justify-center"
        >
          <FaRegHeart className="text text-2xl text-textColor hover/heart:text-bgColor" />
          <span className="text text-spanColor">Sevimlilar</span>
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
          <UserOutlined className="text text-2xl text-textColor " />
          <span className="text text-spanColor">kabinet</span>
        </Link>
      </div>
    </>
  );
};

export default HeadUserLinks;
