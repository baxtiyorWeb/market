import { LoadingOutlined } from "@ant-design/icons";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Image, Spin, message } from "antd";
import { useEffect, useState } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaArrowRight, FaEye } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import api from "../../config/api/api";
import useAddFavourite from "../../hooks/useAddFavourite";
import useToggle from "../../hooks/useToggle";
import Overlay from "./../../ui/Overlay";
import FastDetailView from "./FastDetailView";
import "./Product.css";

const Products = () => {
  const fetchProducts = async ({ pageParam = 0 }) => {
    const res = await api.get(`/product/list?page=${pageParam}&size=30`);
    return res.data.data.content;
  };
  const { saveLocalProductFavourite, update, savedLocal, savedProductLength } =
    useAddFavourite();
  const [id, setId] = useState();
  const existing = JSON.parse(localStorage.getItem("product")) || [];
  const likedProduct = async () => {
    const liked = await api.get("/favorite-product/list");
    const likeData = liked.data?.data?.content?.map((item) => item?.id);
    setId(likeData);
  };

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
      // fast id
      setFastId(id);
    }
  };

  useEffect(() => {
    likedProduct();
  }, []);

  const {
    data: product,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["product"],
    queryFn: fetchProducts,

    getNextPageParam: (lastPage, pages) =>
      lastPage.length ? pages.length : false,
  });

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 550 &&
      !isFetchingNextPage &&
      hasNextPage
    ) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, fetchNextPage, hasNextPage, isFetchingNextPage]);

  // Example usage (uncomment and modify as needed)
  // saveLocalProductFavourite(1, 'img/path', 'Product Name', 100, 'Sell Type', 'Payment Type', 10, 'Region', true);

  // if (error) return "An error has occurred: " + error.message;

  return (
    <div className="mt-5 h-full w-full">
      <div className="mb-10 mt-10 flex items-center justify-between">
        {isOpen && <Overlay closed={handleToggle} />}
        {isOpen && <FastDetailView id={fastId} />}
        <h1 className=" font-poppins text-[28px] font-medium not-italic leading-normal tracking-[-0.66px] ">
          Top Mahsulotlar
        </h1>
        <div className="flex w-max items-center justify-center">
          <div className="some-categories">
            <Link className="mr-3 border-b-2 border-bgColor p-2 text-lg font-normal">
              Barcha Mahsulotlar{" "}
            </Link>
            <Link className="mr-3 border-b-2 border-transparent p-2 text-base font-normal">
              Smartfonlar
            </Link>
            <Link className="b-2 mr-3 border-b-2 border-transparent text-base font-normal">
              Noutbuklar
            </Link>
            <Link className="mr-3 border-b-2 border-transparent p-2 text-base font-normal">
              Stol kompyuterlar
            </Link>
          </div>
          <Link className="flex items-center justify-center text-lg font-light text-bgColor">
            Barcha categoriyani ko&apos;rish
            <span>
              <FaArrowRight className="mx-3" />
            </span>
          </Link>
        </div>
      </div>
      <div className="response_product_category grid grid-cols-5 gap-2 2xs:grid 2xs:grid-cols-2">
        {product?.pages?.map((page) =>
          page?.map((item, index) => (
            <div
              className="re lative relative h-[480px] w-productWidth flex-shrink-0 overflow-hidden rounded-md px-[10px]  pt-2  transition-all hover:shadow-lg "
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
                          <span>{item?.dateValue}</span>
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
                      onClick={() =>
                        saveLocalProductFavourite(
                          item?.id,
                          `data:image/png;base64,${item.file?.fileBase64}`,
                          item?.name,
                          item?.price,
                          item?.sellTypeName,
                          item?.paymentTypeName,
                          item?.viewCount,
                          item?.regionName,
                          item?.canAgree,
                        )
                      }
                      className={`h-[40px] w-[40px]
                        ${existing?.map(
                          (items) =>
                            items?.id === item?.id &&
                            "r mx-1 flex  h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-md  bg-bgColor text-whiteTextColor   hover:text-whiteTextColor",
                        )}
                    `}
                    >
                      <CiHeart className="cursor-pointer text-[28px]" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )),
        )}
      </div>
      <div className="mb-[50px] mt-[50px] flex items-center justify-center">
        {isFetchingNextPage ||
          (isLoading && (
            <Spin indicator={<LoadingOutlined style={{ fontSize: 50 }} />} />
          ))}
      </div>
    </div>
  );
};

export default Products;
