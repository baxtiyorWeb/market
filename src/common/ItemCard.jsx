/* eslint-disable react/prop-types */
import { Calendar, Eye, Heart, LocateIcon } from "lucide-react";
import { Link } from "react-router-dom";

const ItemCard = ({ handleClick, item, i }) => {
  return (
    <>
      <div
        className={` ${
          i ? "animation" : ""
        } relative h-[460px]  flex-shrink-0 rounded-md px-[10px] pt-2 transition-all hover:shadow-lg xs:h-[368px] `}
      >
        <span className="absolute left-3 top-5 z-50 bg-red-500 px-1 text-sm text-white">
          TOP
        </span>
        <div className="relative h-[230px] w-full xs:h-[150px] xs:w-[100%]">
          <div className="cart-slider group flex h-full items-center justify-center">
            <Link
              to={`/details/${item.id}?infoTab=1`}
              className="w-full xs:flex xs:h-[100%_!important] xs:w-[163px_!important] xs:items-center xs:justify-center"
              onClick={handleClick}
            >
              <div className="h-[200px]  xs:h-[100%_!important] xs:w-[100%_!important]">
                <img
                  src={`data:image/png;base64,${item?.file?.fileBase64}`}
                  alt="img"
                  width={"100%"}
                  height={"200px"}
                  className="h-[100%_!important] w-[100%_!important] rounded-xl bg-center object-cover align-middle xs:h-[150px_!important] xs:w-[145px_!important]"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="mb-3 mt-4 h-[100px] xs:h-[80px]">
          <div className="h-10 xs:h-8">
            <span className="text wrap line-clamp-2 font-poppins text-[20px] font-light not-italic leading-[120%] tracking-[-0.32px] text-textColor xs:text-[13px]">
              {item?.name}
            </span>
          </div>
          <div className="mt-3 rounded-xl">
            <div className="text-xs xs:my-3">
              <div className="text mt-3 flex flex-col items-start justify-start font-poppins text-[14px] font-normal leading-[100%] tracking-[-0.22px] text-spanColor xs:mt-3 xs:text-[10px]">
                <div className="flex w-full items-center justify-start">
                  <span className="flex items-center justify-start">
                    <LocateIcon className="mr-3" />
                    {item?.regionName} / {item?.districtName}
                  </span>
                </div>
                <span className="text mt-3 flex items-center justify-between font-poppins text-[13px] font-normal leading-[100%] tracking-[-0.22px] text-spanColor xs:text-sm">
                  <div className="flex items-center justify-center">
                    <Calendar className="mr-3" />
                    <span className="xs:text-sm">{item?.dateValue}</span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-20 flex-col justify-between">
          <span className="text inline-flex w-max items-center rounded-md px-2 py-2 font-poppins text-[18px] font-medium not-italic leading-[100%]  text-textColor xs:py-1 xs:text-sm">
            {item?.price}
            <p className="ml-1">so{"'"}m</p>
          </span>
          <div className="text flex items-center justify-between font-poppins font-normal leading-[100%] tracking-[-0.22px] text-spanColor">
            <span className="flex items-center justify-center">
              <Eye className="mr-3 text-[16px]" />
              {item?.viewCount}
            </span>
            <div className="flex items-center justify-center">
              <span
                onClick={() => saveLocalProductFavourite(item?.id)}
                className={`h-[40px] w-[40px] ${existing?.map(
                  (items) =>
                    items === item?.id &&
                    "r mx-1 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-md bg-bgColor text-whiteTextColor hover:text-whiteTextColor",
                )}`}
              >
                <Heart className="cursor-pointer text-[28px]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
