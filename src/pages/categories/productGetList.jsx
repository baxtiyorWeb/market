import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  FaEye,
  FaQuestionCircle,
  FaRegComments,
  FaRegHeart,
  FaShare,
} from "react-icons/fa";
import { Link, useParams, useSearchParams } from "react-router-dom";
import api from "../../config/api/api";
import Loading from "../../ui/loading/Loading";
import "./categories.css";

const ProductGetList = () => {
  const searchable = useSearchParams();
  const { id } = useParams();
  const search = searchable[0].get("search");
  const productFilterWithCategoryId = async () => {
    if (!search) return null;
    const res = await api.get(
      `/product/list?page=0&size=10&search=${search}&categoryId=${id}`,
    );
    console.log(res.data);
    return res.data;
  };
  const { data: productFilter, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: productFilterWithCategoryId,
  }); // fetchData funksiyasiga tanlangan qidiruvni yuborish
  if (isLoading) return <Loading />;
  const content = (
    <>
      {productFilter?.data?.content?.map((item, index) => (
        <div
          className="mb-10 mt-5 h-auto w-[280px] rounded-xl bg-white  p-3   shadow-md"
          key={index}
        >
          <div className="flex w-full flex-col justify-center ">
            <div>
              <Link to={`/details/${item?.id}?infoTab=1`} className="">
                <img
                  className="h-[180px] w-full rounded-md  object-cover"
                  src={`data:image/png;base64,${item?.file?.fileBase64}`}
                  alt=""
                />
              </Link>
            </div>
            <div className="relative  mt-3 h-auto w-full">
              <div>
                <div className="flex items-center justify-between p-1">
                  <h1 className="text-lg font-medium ">{item?.name}</h1>
                </div>
                <div className="inline-block items-center justify-center">
                  <span className="mr-1  text-xl font-medium text-teal-700">
                    ${item?.price}
                  </span>
                  <span className="text-sm text-[#A7A7A7]">
                    <strike>$130.00</strike>
                  </span>
                  <div className="mt-2 flex items-center justify-start border-t pt-3">
                    <div className="mx-1 flex h-14 w-14 flex-col items-center justify-center rounded-md border px-1">
                      <span className="mr-1">10</span>
                      <FaRegComments className="mr-1" />
                    </div>
                    <div className="mx-1 flex h-14 w-14 flex-col items-center justify-center rounded-md border px-1">
                      <span className="mr-1">{item?.viewCount}</span>
                      <FaEye className="mr-1" />
                    </div>
                    <div className="mx-1 flex h-14 w-14 flex-col items-center justify-center rounded-md border px-1">
                      <span className="mr-1">10</span>
                      <FaQuestionCircle className="mr-1" />
                    </div>
                  </div>
                  <div className="mx-1 my-3">
                    {item?.canAgree ? "kelishiladi" : "kelishilmaydi"}
                  </div>
                </div>

                <div className="my-3 flex items-center justify-start">
                  <span className="mx-1 flex cursor-pointer items-center justify-center rounded-md border-b p-[2px]">
                    <FaRegHeart className="" /> <span>saqlash</span>
                  </span>
                  <span className="mx-1 flex cursor-pointer items-center justify-center rounded-md border-b p-[2px]">
                    <FaQuestionCircle className="" /> <span>savol</span>
                  </span>
                  <span className="mx-1 flex cursor-pointer items-center justify-center rounded-md border-b p-[2px]">
                    <FaShare className="" /> <span>ulashish</span>
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
      <div className="grid grid-cols-3 gap-3">{content}</div>
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
