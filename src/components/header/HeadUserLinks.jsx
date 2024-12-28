import { Link, useNavigate } from "react-router-dom";
import useAddFavourite from "../../hooks/useAddFavourite";
import api, { getRefreshToken } from "../../config/api/api";
import { useState } from "react";
import { Heart, User } from "lucide-react";
import Loading from "../../ui/loading/Loading";
const HeadUserLinks = () => {
  const { savedLocal } = useAddFavourite();
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  const [isLoading, setisLoading] = useState(false);
  const handleProfileClick = async (e) => {
    e.preventDefault(); // Linkni default o’tishini to’xtatamiz

    const refreshToken = getRefreshToken();

    if (!refreshToken) {
      navigate("/auth/login", { relative: "route" });
      return;
    }

    try {
      // Refresh token amal qilishi tekshiriladi
      setisLoading(true);
      const response = await api.post(
        `/authority/refresh-token`,
        {
          refreshToken: refreshToken,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.status === 200) {
        // Agar token yangilanishi muvaffaqiyatli bo'lsa, profilga o'tamiz
        navigate("/profile/dashboard/products");
      }
    } catch (error) {
      // Refresh token amal qilmasa, login sahifasiga o'tamiz
      console.error("Refresh token muddati tugagan s:", error);
      navigate("/auth/login");
    } finally {
      setisLoading(false);
    }
  };

  return (
    <div className={"flex w-[330px] items-center justify-center"}>
      <div>
        <Link
          to={`${token ? `/product-form/add-product` : "/auth/login"}`}
          className="flex  h-[35px] items-center justify-center rounded-md  bg-bgColor px-3 py-2 "
        >
          <span className="text text-center text-[16px] text-whiteTextColor">
            E&apos;lon qo&apos;shish
          </span>
        </Link>
      </div>
      <div className="mx-3 ">
        <Link
          to={"/profile/dashboard/favourites"}
          className="hover/heart relative flex flex-col items-center justify-center"
        >
          <Heart className="text text-base text-textColor hover/heart:text-bgColor" />
          <span className="text text-[16px] text-spanColor">Sevimlilar</span>
          <span className="absolute -top-5 right-0 flex h-5 w-5 items-center justify-center rounded-md bg-bgColor p-3">
            {savedLocal()}
          </span>
        </Link>
      </div>
      <div className="">
        {isLoading ? (
          <Loading size={50} />
        ) : (
          <Link
            to={`#`}
            onClick={handleProfileClick}
            className="flex flex-col items-center justify-center"
          >
            <User className="text text-base  text-textColor " />
            <span className="text text-[16px] text-spanColor">kabinet</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeadUserLinks;
