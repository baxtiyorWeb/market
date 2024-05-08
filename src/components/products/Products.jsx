import { Image, message } from "antd";
import { useState } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import api from "../../config/api/api";
import useProducts from "../../hooks/useProducts";
import useToggle from "../../hooks/useToggle";
import Loading from "../../ui/loading/Loading";
import Overlay from "./../../ui/Overlay";
import FastDetailView from "./FastDetailView";
import "./Product.css";

const Products = () => {
  const { data, error, isLoading, setPage, page, size } = useProducts();
  const { handleToggle, isOpen } = useToggle();
  const [fastId, setFastId] = useState("");

  const addLikeFavoriteProduct = async (id) => {
    const data = await api.post(`/favorite-product/add?productId=${id}`);
    if (data.status === 200) {
      message.success("sevimlilarga qo'shildi");
    }
  };

  const setQueryParams = (id) => {
    addLikeFavoriteProduct(id);
  };

  const getFastid = (id) => {
    if (id !== undefined) {
      handleToggle();
      setFastId(id);
    }
  };

  if (isLoading) return <Loading />;
  if (error) return "An error has occurred: " + error.message;
  return (
    <div className="mt-5 h-full w-full">
      <div>
        {isOpen && <Overlay closed={handleToggle} />}
        {isOpen && <FastDetailView id={fastId} />}
        <h1 className="mb-5 font-poppins text-[28px] font-medium not-italic leading-normal tracking-[-0.66px] "></h1>
      </div>
      <div className="response_product_category grid grid-cols-5 gap-2 2xs:grid 2xs:grid-cols-2">
        {isLoading ? (
          <Loading />
        ) : (
          data?.data?.data?.content?.map((item, index) => (
            <div
              className="relative h-[460px] w-[288px] flex-shrink-0 overflow-hidden rounded-md  bg-white/100   px-[10px] pt-2 transition-all   hover:shadow-lg  "
              key={index}
            >
              <span className="absolute left-3 top-5 z-50 bg-red-500 px-1 text-sm  text-white">
                TOP
              </span>
              <div className="relative h-[230px] overflow-hidden ">
                <div className="cart-slider group flex h-full  items-center justify-center">
                  <button
                    className="absolute right-[30%] top-[40%] z-50 hidden rounded-3xl bg-bgColor px-3 py-2 text-whiteTextColor hover:border hover:border-bgColor hover:bg-whiteTextColor hover:text-textColor group-hover:block"
                    onClick={() => getFastid(item.id)}
                  >
                    Tezkor ko&apos;rish
                  </button>
                  <Link
                    to={`/details/${item.id}?infoTab=1`}
                    className="w-[300px]"
                  >
                    <div className="h-[230px]">
                      <Image
                        alt={"avatar"}
                        src={`data:image/png;base64,${item.file?.fileBase64}`}
                        title={`${item?.name}`}
                        loading="eager"
                        width={290}
                        height={230}
                        className=" w-full rounded-xl  bg-center object-cover align-middle"
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="mb-3 mt-4 h-[100px]  ">
                <div className="h-10">
                  <span className="text wrap line-clamp-2  font-poppins text-[20px] font-light not-italic leading-[120%] tracking-[-0.32px]">
                    {item?.name}
                  </span>
                </div>

                <div className="mt-3 rounded-xl  ">
                  <div className="text-xs">
                    <div className="text mt-3 flex flex-col  items-start justify-start font-poppins text-[14px] font-normal leading-[100%] tracking-[-0.22px] text-spanColor">
                      <div className="flex w-full  items-center justify-start ">
                        <span className="flex items-center justify-start ">
                          <IoLocationOutline className="mr-3" />
                          {item?.regionName} / {item?.districtName}
                        </span>
                      </div>
                      <span className="text mt-3 flex items-center justify-between font-poppins text-[13px] font-normal leading-[100%] tracking-[-0.22px] text-spanColor">
                        <div className="flex items-center justify-center">
                          <BsCalendarDate className="mr-3" />
                          <span>2024-04-28</span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-20 flex-col justify-between    ">
                <span className="text inline-flex items-center rounded-md  py-2 font-poppins text-[18px] font-medium   not-italic leading-[100%] text-textColor ">
                  {item?.price}
                  <p className="ml-1">so{"'"}m</p>
                </span>{" "}
                <div className="text flex items-center justify-between font-poppins  font-normal leading-[100%] tracking-[-0.22px] text-spanColor">
                  <span className="flex items-center justify-center">
                    <FaEye className="mr-3 text-[16px]" />
                    {item?.viewCount}
                  </span>
                  <span
                    onClick={() => setQueryParams(item?.id)}
                    className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-md border border-bgColor bg-bgColor text-whiteTextColor hover:bg-whiteTextColor hover:text-textColor"
                  >
                    <CiHeart className="cursor-pointer text-[28px]" />
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="mb-[50px] mt-[50px] flex items-center justify-center">
        <button className="flex h-[50px] w-[328px] flex-shrink-0 items-center justify-center rounded-[5px] bg-[#1D828E] text-[#fff] ">
          <span className="font-medium not-italic leading-[100%] tracking-[-0.30px] ">
            Ko’proq ko’rsatish
          </span>
        </button>
      </div>
    </div>
  );
};

export default Products;
