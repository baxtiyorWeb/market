import { useInfiniteQuery } from "@tanstack/react-query";
import { Button } from "antd";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { getProducts } from "../../exports/api";
import Loading from "../../ui/loading/Loading";
import SpinLoading from "../../ui/loading/spinLoading";
import "./categories.css";

const ProductGetList = () => {
  const {
    data,
    status,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["product"],
    queryFn: getProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.data.content.length ? allPages.length + 1 : undefined;
    },
  });

  if (isLoading) return <Loading />;

  const content = data?.pages?.map((page) =>
    page.data.content.map((item, index) => (
      <div
        className="relative h-[400px] flex-shrink-0 overflow-hidden rounded-md bg-white shadow-md"
        key={index}
      >
        <div className="relative h-[194px] w-[100%] overflow-hidden">
          <div className="cart-slider flex h-full w-full items-center justify-center border">
            <Link to={`/details/${item.id}`} key={index}>
              <div className="h-full w-full">
                <LazyLoadImage
                  alt={"avatar"}
                  src={`data:image/png;base64,${item.file?.fileBase64}`}
                  effect="opacity"
                  width={"100%"}
                  delayTime={1500}
                  loading="lazy"
                  className="h-[194px]"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-4 px-[18px]">
          <span className="text line-clamp-1 font-poppins text-[16px] font-medium not-italic leading-[120%] tracking-[-0.32px] text-[#130F1E]">
            {item?.name}
          </span>
          <p className="text line-clamp-1 text-[16px] font-normal not-italic leading-[120%] tracking-[-0.32px] text-[#130F1E]">
            {item?.description}
          </p>
          <div className="mt-[12px] flex items-center  justify-start">
            <span className="text font-poppins text-[19px] font-semibold not-italic leading-[100%] text-[#130F1E]">
              {item?.price}
            </span>{" "}
            <p className="ml-1">so{"'"}m</p>
          </div>

          <div className="mt-14">
            <hr className="border border-slate-400" />
            <div className="text mt-[13px] flex items-center justify-between font-poppins text-[11px] font-normal leading-[100%] tracking-[-0.22px] text-[#959EA7]">
              <span>
                {item?.regionName} | {item?.districtName}
              </span>
              <span>{item?.address}</span>
            </div>
            <div className="text mt-[20px] flex items-center justify-between font-poppins text-[11px] font-normal leading-[100%] tracking-[-0.22px] text-[#959EA7]">
              <span className="flex items-center justify-center">
                <FaEye className="mr-3 text-[16px]" />
                {item?.viewCount}
              </span>
              <span className="absolute right-2 top-2 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border bg-[#aeaead4b] text-white hover:bg-[#AEAEAD]">
                <CiHeart className="cursor-pointer text-[28px]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    )),
  );

  if (status === "error") return <p>Error</p>;

  return (
    <>
      <div className="grid w-full grid-cols-3 gap-1">{content}</div>
      <div className="my-3 flex items-center justify-center">
        <Button
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
        </Button>
      </div>
    </>
  );
};

export default ProductGetList;
