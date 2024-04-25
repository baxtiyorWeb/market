import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import {
  FaEye,
  FaQuestionCircle,
  FaRegComments,
  FaRegHeart,
  FaShare,
} from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import api from "../../config/api/api";
import Loading from "../../ui/loading/Loading";
import "./categories.css";

const ProductGetList = () => {
  const searchable = useSearchParams();
  const search = searchable[0].get("search");
  const getproductgetFileterSearch = async (value) => {
    const res = await api.get(
      `/product/list?page=${0}&size=${10}&search=${value}`,
    );
    return res.data?.data?.content;
  };
  const {
    data: productFilter,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", search],
    queryFn: () => getproductgetFileterSearch(search),
  }); // fetchData funksiyasiga tanlangan qidiruvni yuborish

  useEffect(() => {
    // SearchQuery o'zgarishi bilan tarmoq so'rovi ni qayta ishga tushirish
    refetch(); // refetch funksiyasini React-Query obyektiga ma'lumotlarni yangilash uchun yuborish
  }, [search]);
  if (isLoading) return <Loading />;
  const content = (
    <>
      {productFilter?.map((item, index) => (
        <div
          className="mb-10 mt-5 h-auto w-[280px] rounded-xl bg-white  shadow-md"
          key={index}
        >
          <div className="flex w-full flex-col justify-center p-1">
            <div>
              <img
                className="h-[180px] w-full rounded-md  object-cover"
                src={`data:image/png;base64,${item?.file?.fileBase64}`}
                alt=""
              />
            </div>
            <div className="relative  mt-10 h-auto w-full">
              <div>
                <div className="flex items-center justify-between p-1">
                  <h1 className="text-lg font-medium ">{item?.name}</h1>
                  <Link
                    to={`/details/${item?.id}?infoTab=1`}
                    className="absolute -top-10 right-3 rounded-md p-2 hover:underline"
                  >
                    Ko&apos;proq ma&apos;lumot olish
                  </Link>
                </div>
                <div className="inline-block items-center justify-center">
                  <span className="mr-1 text-base font-medium">
                    ${item?.price}
                  </span>
                  <span className="text-sm text-[#A7A7A7]">
                    <strike>$130.00</strike>
                  </span>
                  <div className="mt-2 flex items-center justify-start border-t pt-3">
                    <div className="mx-1 flex h-14 w-14 flex-col items-center justify-center rounded-md border px-1">
                      <FaRegComments className="mr-1" />
                      <span className="mr-1">10</span>
                    </div>
                    <div className="mx-1 flex h-14 w-14 flex-col items-center justify-center rounded-md border px-1">
                      <FaEye className="mr-1" />
                      <span className="mr-1">{item?.viewCount}</span>
                    </div>
                    <div className="mx-1 flex h-14 w-14 flex-col items-center justify-center rounded-md border px-1">
                      <FaQuestionCircle className="mr-1" />
                      <span className="mr-1">10</span>
                    </div>
                  </div>
                  <div className="mx-1 my-3">
                    {item?.canAgree ? "kelishiladi" : "kelishilmaydi"}
                  </div>
                </div>

                <div className="my-3 flex items-center justify-start">
                  <span className="mx-1 flex cursor-pointer items-center justify-center rounded-md border p-[2px]">
                    <FaRegHeart className="mr-1" /> <span>saqlash</span>
                  </span>
                  <span className="mx-1 flex cursor-pointer items-center justify-center rounded-md border p-[2px]">
                    <FaQuestionCircle className="mr-1" /> <span>savol</span>
                  </span>
                  <span className="mx-1 flex cursor-pointer items-center justify-center rounded-md border p-[2px]">
                    <FaShare className="mr-1" /> <span>ulashish</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  if (status === "error") return <p>Error</p>;

  return (
    <>
      <div className=" grid w-full grid-cols-3 gap-1">{content}</div>
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
