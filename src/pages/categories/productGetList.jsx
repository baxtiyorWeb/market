import { LoadingOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Empty, Image, Spin } from "antd";
import React, { useState } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import LazyLoad from "react-lazy-load";
import { Link, useParams, useSearchParams } from "react-router-dom";
import FastDetailView from "../../components/products/FastDetailView";
import { productWithCategoryFilter } from "../../exports/api";
import useToggle from "../../hooks/useToggle";
import Overlay from "../../ui/Overlay";
import "./categories.css";

const ProductGetList = ({ productFilterProps, isLoading }) => {
  const searchable = useSearchParams();
  const { id } = useParams();
  const [fastId, setFastId] = useState("");
  const { handleToggle, isOpen } = useToggle();
  const search = searchable[0].get("search");
  const { data: productFilters } = useQuery({
    queryKey: ["product", id],
    queryFn: () => productWithCategoryFilter(search, id),
  });

  const getFastid = (id) => {
    if (id !== undefined) {
      handleToggle();
      setFastId(id);
    }
  };
  const content = (
    <>
      <div>
        {isOpen && <Overlay closed={handleToggle} />}
        {isOpen && <FastDetailView id={fastId} />}
      </div>
      <div className="response_product_category grid grid-cols-4 gap-3  2xs:grid 2xs:grid-cols-2">
        {productFilterProps?.length === 0 ? (
          <div className="flex h-max w-[880px] items-center justify-center">
            <Empty description={"elon mavjud emas"} />
          </div>
        ) : (
          productFilterProps?.data?.content?.map((item, index) => (
            <div
              className=" w-productWidth/2 relative h-[460px] flex-shrink-0 overflow-hidden rounded-md px-[10px]  pt-2  transition-all hover:shadow-lg "
              key={index}
            >
              <span className="absolute left-3 top-5 z-50 bg-red-500 px-1 text-sm  text-white">
                TOP
              </span>
              <div className="relative h-[230px] overflow-hidden ">
                <div className="cart-slider group flex h-full  items-center justify-center">
                  <button
                    className="absolute right-[30%] top-[40%] z-50 hidden rounded-3xl bg-bgColor px-3 py-2 text-white hover:border-bgColor hover:bg-bgColor/90  group-hover:block"
                    onClick={() => getFastid(item.id)}
                  >
                    Tezkor ko&apos;rish
                  </button>
                  <Link to={`/details/${item.id}?infoTab=1`} className="w-full">
                    <div className="h-[230px]">
                      <LazyLoad height={230}>
                        <Image
                          alt={"avatar"}
                          src={`data:image/png;base64,${item.file?.fileBase64}`}
                          title={`${item?.name}`}
                          loading="lazy"
                          height={"230px"}
                          width={"250px"}
                          className=" w-[250px_!important] rounded-xl  bg-center object-cover align-middle"
                        />
                      </LazyLoad>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="mb-3 mt-4 h-[100px]  ">
                <div className="h-10">
                  <span className="text wrap line-clamp-2  font-poppins text-[20px] font-light not-italic leading-[120%] tracking-[-0.32px] text-textColor">
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
                <span className="text inline-flex w-max items-center  rounded-md bg-bgColor px-2 py-2  font-poppins text-[18px] font-medium  not-italic leading-[100%] text-textColor ">
                  {item?.price}
                  <p className="ml-1">so{"'"}m</p>
                </span>{" "}
                <div className="text flex items-center justify-between font-poppins  font-normal leading-[100%] tracking-[-0.22px] text-spanColor">
                  <span className="flex items-center justify-center">
                    <FaEye className="mr-3 text-[16px]" />
                    {item?.viewCount}
                  </span>
                  <div className="flex items-center justify-center">
                    <span
                      onClick={() => setQueryParams(item?.id)}
                      className={
                        item?.id === id
                          ? "r mx-1 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-md  bg-bgColor text-whiteTextColor hover:bg-whiteTextColor hover:text-whiteTextColor"
                          : "r mx-1 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-md  bg-whiteTextColor text-bgColor hover:bg-bgColor hover:text-whiteTextColor"
                      }
                    >
                      <CiHeart className="cursor-pointer text-[28px]" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="mb-[50px] mt-[50px] flex items-center justify-center">
        {isLoading && (
          <Spin indicator={<LoadingOutlined style={{ fontSize: 50 }} />} />
        )}
      </div>
    </>
  );

  return (
    <>
      <div>{content}</div>
      <div className="my-1 flex items-center justify-center">
        {/* <Button
          disabled={!hasNextPage || isFetchingNextPage}
          onClick={() => fetchNextPage()}
          className="bg-[#1D828E] text-white"
        >
          {isFetchingNextPage ? (
            <SpinLoading />
          ) : hasNextPage ? (
            "yana yuklash"
          ) : (
            "mahsulot tugadi"
          )}
        </Button> */}
      </div>
    </>
  );
};

export default ProductGetList;
