import { UserOutlined } from "@ant-design/icons";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAddFavourite from "../../hooks/useAddFavourite";
const HeadUserLinks = () => {
  const { savedLocal } = useAddFavourite();
  const token = localStorage.getItem("accessToken");
  return (
    <div className={'flex items-center justify-center w-[330px]'}>
      <div >
        <Link
          to={`${token ? `/product-form/add-product` : "/auth/login"}`}
          className="flex  items-center justify-center bg-bgColor h-[35px]  py-2 px-3 rounded-md "
        >
          <span className="text text-[16px] text-center text-whiteTextColor">E&apos;lon qo&apos;shish</span>
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
      <div className="">
        <Link
          to={`/profile/dashboard/products`}
          className="flex flex-col items-center justify-center"
        >
          <UserOutlined className="text text-base  text-textColor " />
          <span className="text text-[16px] text-spanColor">kabinet</span>
        </Link>
      </div>
    </div>
  );
};

export default HeadUserLinks;
