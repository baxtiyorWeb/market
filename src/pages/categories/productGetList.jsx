import { useQuery } from "@tanstack/react-query";
import { Empty, Image } from "antd";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaArrowRight, FaEye } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link, useParams, useSearchParams } from "react-router-dom";
import FastDetailView from "../../components/products/FastDetailView";
import { productWithCategoryFilter } from "../../exports/api";
import useToggle from "../../hooks/useToggle";
import Overlay from "../../ui/Overlay";
import Loading from "../../ui/loading/Loading";
import "./categories.css";

const ProductGetList = () => {
  const searchable = useSearchParams();
  const { id } = useParams();
  const [fastId, setFastId] = useState("");
  const { handleToggle, isOpen } = useToggle();
  const search = searchable[0].get("search");
  const { data: productFilters, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => productWithCategoryFilter(search, id),
  });
  console.log(productFilters);

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
        <h1 className=" mb-5 font-poppins text-[28px] font-medium not-italic leading-normal tracking-[-0.66px] ">
          <div className="flex items-center justify-between ">
            <h1 className="text-2xl">top maxsulotlar</h1>
          </div>
        </h1>
      </div>
      <div className="response_product_category grid grid-cols-3 gap-3  2xs:grid 2xs:grid-cols-2">
        {isLoading ? (
          <Loading />
        ) : productFilters?.data?.content?.length === 0 ? (
          <div className="flex h-[60vh] w-[880px] items-center justify-center">
            <Empty description={"elon mavjud emas"} />
          </div>
        ) : (
          productFilters?.data?.content?.map((item, index) => (
            <div
              className="relative mb-10 mt-5 h-auto w-[280px] flex-shrink-0  overflow-hidden   rounded-2xl bg-white bg-white/100 p-3 shadow-md drop-shadow  transition-all  "
              key={index}
            >
              <div className="relative h-[194px]  overflow-hidden">
                <div className="cart-slider group flex h-full  items-center justify-center">
                  <button
                    className="absolute right-[30%] top-[40%] z-50 hidden rounded-3xl bg-bgColor px-3 py-2 text-whiteTextColor hover:border hover:border-bgColor hover:bg-whiteTextColor hover:text-textColor group-hover:block"
                    onClick={() => getFastid(item.id)}
                  >
                    Tezkor ko&apos;rish
                  </button>
                  <Link
                    to={`/details/${item.id}?infoTab=1`}
                    className="w-[315px]"
                  >
                    <div className="h-[224px] border">
                      <Image
                        alt={"avatar"}
                        src={`data:image/png;base64,${item.file?.fileBase64}`}
                        title={`${item?.name}`}
                        loading="eager"
                        height={"224px"}
                        width={315}
                        className="rounded-xl border object-contain"
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="mt-4 px-[18px]">
                <span className="text line-clamp-1 font-poppins text-[18px] font-medium not-italic leading-[120%] tracking-[-0.32px] text-textColor">
                  {item?.name}
                </span>
                <div className="mt-[12px] flex items-center  justify-start">
                  <span className="text inline-flex items-center font-poppins text-[16px] font-semibold not-italic leading-[100%] ">
                    {item?.price}
                    <p className="ml-1">so{"'"}m</p>
                  </span>{" "}
                </div>
                <div className="mt-3 rounded-xl  ">
                  <div className="text-xs">
                    <span>to&apos;lov turi</span> -{" "}
                    <span>{item?.sellTypeName}</span>
                  </div>
                  <div className="text-xs">
                    <span>sotuv turi</span> -{" "}
                    <span>{item?.paymentTypeName}</span>
                    <div className="text mt-3 flex items-center justify-start font-poppins text-[14px] font-normal leading-[100%] tracking-[-0.22px] text-spanColor">
                      <div className="flex w-full items-center justify-start ">
                        <span className="flex items-center justify-start ">
                          <IoLocationOutline />
                          {item?.regionName} / {item?.districtName}
                        </span>
                      </div>
                    </div>
                    <span className="text mt-3 flex items-center justify-between font-poppins text-[13px] font-normal leading-[100%] tracking-[-0.22px] text-spanColor">
                      <span>2024-04-28</span>
                    </span>
                  </div>
                </div>
                <div className="mt-5 flex w-full items-center justify-between text-sm text-spanColor">
                  <span className="flex items-center justify-center">
                    <FaEye className="mr-3 text-[16px]" />
                    {item?.viewCount}
                  </span>
                  <span className="group/edit flex cursor-pointer items-center hover:underline">
                    {item?.categoryName}{" "}
                    <FaArrowRight className="ml-3 group-hover/edit:translate-x-0.5" />
                  </span>
                </div>
                <div className="text mt-[20px] flex items-center justify-between font-poppins  font-normal leading-[100%] tracking-[-0.22px] text-spanColor">
                  <button className="rounded-md bg-btnColor px-1 py-3 text-whiteTextColor">
                    Savatchaga qo&apos;shish
                  </button>
                  <span
                    onClick={() => setQueryParams(item?.id)}
                    className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border bg-[#aeaead4b] text-white hover:bg-[#AEAEAD]"
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
    </>
  );

  return (
    <>
      <div>{content}</div>
      <div className="my-3 flex items-center justify-center">
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
