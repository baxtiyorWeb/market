import { LoadingOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Carousel, Image, Spin } from "antd";
import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import api from "./../../config/api/api";
const FastDetailView = ({ id }) => {
  const getFastViewProduct = async () => {
    const res = await api.get(`/product/${id}`);
    return res.data.data;
  };

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: getFastViewProduct,
  });
  console.log(product);

  return (
    <div className="fixed  left-[10%] top-[10%] z-[310] h-[800px] w-[1300px] overflow-y-scroll rounded-2xl bg-whiteTextColor p-3 shadow-2xl">
      {isLoading ? (
        <div className="flex h-full w-full items-center justify-center text-5xl">
          <Spin
            className="text-5xl "
            indicator={<LoadingOutlined style={{ fontSize: 50 }} />}
          />
        </div>
      ) : (
        <div>
          <div className="my-3 flex items-center justify-end">
            <Link
              to={`/details/${product.id}?infoTab=1`}
              className="text text-textColor underline underline-offset-8"
            >
              ko&apos;roq ko&apos;rish
            </Link>
          </div>
          <div className="flex h-full w-full items-start justify-between rounded-2xl">
            <div className="fast-detail relative left-10 w-[80%] ">
              <Carousel draggable effect="fade" waitForAnimate arrows>
                {product?.files?.map((item, index) => (
                  <Image
                    key={index}
                    src={`data:image/png;base64,${item.file?.fileBase64}`}
                    loading="lazy"
                    width={600}
                    height={500}
                    className="scale-10 select-none overflow-clip rounded-2xl  border bg-gray-500/20 bg-center object-contain"
                  />
                ))}
              </Carousel>
            </div>
            <div className="h-[60vh] w-[60%] ">
              <div className="mb-6 h-[max-content] w-full p-1">
                <div className="mb-8 mt-3 flex border-b ">
                  <div className="mb-6 flex w-full flex-col gap-y-5">
                    <h1 className="text-3xl font-normal text-black">
                      {product?.name}
                    </h1>
                    <h5 className="text-xl font-semibold text-black">
                      <span className=" text-3xl text-bgColor">
                        {product?.price}
                      </span>
                      <span className="mx-3 text-spanColor">/</span>
                      <span className="mr-5 text-sm font-normal text-[#959EA7]">
                        {product?.canAgree === true
                          ? "kelishiladi"
                          : "kelishilmaydi"}
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="my-6 flex  items-center justify-between">
                  <div className="flex items-center gap-x-4">
                    <span className="text-base font-normal text-[#959EA7]">
                      {product?.address}
                    </span>
                    <div className="h-1 w-1 rounded-full bg-[#959EA7]"></div>
                    <span className="text-base font-normal text-[#959EA7]">
                      {product?.district?.name}
                    </span>
                  </div>

                  <div className="relative flex items-center gap-x-4">
                    <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#fafafa] text-[20px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-share2"
                      >
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                      </svg>
                    </div>
                    <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#fafafa] text-[20px] text-black backdrop-blur-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-heart"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="mt-10 flex w-full flex-col gap-y-5">
                  <h3 className="text-[20px] font-semibold text-black">
                    Qisqacha ma’lumot
                  </h3>
                  <p className="text-foreground break-all font-poppins text-[16px] font-normal leading-[30px]">
                    {product?.description}
                  </p>
                </div>
                <div className="mb-5 mt-10 h-[1px] w-full bg-[#DFE2E5]"></div>
                <div className="text text-[#959EA7 ] text flex justify-between font-poppins text-[14px] font-normal leading-[100%] text-[#959EA7]">
                  <span>E'lon raqami: {product?.id}</span>
                  <span className="flex items-center justify-center">
                    Ko’rganlar: <FaEye className="ml-2 mr-2" />{" "}
                    {product?.viewCount}
                  </span>
                </div>
              </div>
              <hr />
              <div className="flex flex-col items-start justify-start">
                <div className="my-3 mr-3  flex w-max items-center justify-center text-center">
                  <span className="text mr-3 text-xs text-gray-500">
                    sotuv turi:
                  </span>
                  <h1 className="text-sm">{product.sellType?.name}</h1>
                </div>
                <div className="my-3  flex w-max items-center justify-center text-center ">
                  <span className="text mr-3 text-xs text-gray-500">
                    to&apos;lov turi:
                  </span>
                  <h1 className="text-sm">{product.paymentType?.name}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FastDetailView;
