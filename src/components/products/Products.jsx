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
  const { saveLocalProductFavourite, update, savedLocal, savedProductLength } =
    useAddFavourite();
  const [id, setId] = useState();
  const existing = JSON.parse(localStorage.getItem("product")) || [];

  const fetchProducts = async ({ pageParam = 0 }) => {
    const response = await api.post("/product/list", {
      search: "",
      page: pageParam,
      size: 5,
      categoryId: 0,
      districtId: 0,
      regionId: 0,
      paymentTypeId: 0,
      sellTypeId: 0,
      ownProducts: false,
      userId: 0,
      valueFilter: [],
    });

    return {
      data: response.data?.data,
      nextPage: pageParam + 1,
      hasNextPage: response.data?.data?.length === 5,
    };
  };

  const { handleToggle, isOpen } = useToggle();
  const [fastId, setFastId] = useState("");
  const addLikeFavoriteProduct = async (id) => {
    const data = await api.post(`/favorite-product/add?productId=${id}`);
    if (data.status === 200) {
      message.success("sevimlilarga qo'shildi");
    }
  };

  const getFastid = (id) => {
    if (id !== undefined) {
      handleToggle();
      // fast id
      setFastId(id);
    }
  };

  const {
    data: product,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["product/list"],
    queryFn: fetchProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasNextPage ? lastPage.nextPage : undefined;
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 300 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div className="mt-5 h-full w-full">
      <div className="mb-10 mt-10 flex items-center justify-between">
        {isOpen && <Overlay closed={handleToggle} />}
        {isOpen && <FastDetailView id={fastId} />}
        <h1 className="font-poppins text-[28px] font-medium not-italic leading-normal tracking-[-0.66px] xs:text-lg">
          Top Mahsulotlar
        </h1>
        <div className="flex w-max items-center justify-center">
          <div className="some-categories flex items-center justify-center">
            <Link className="mr-3 border-b-2 border-bgColor p-2 text-lg font-normal xs:text-sm">
              Barcha Mahsulotlar{" "}
            </Link>
            <div className="xs:hidden">
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
          </div>
          <Link className="flex items-center justify-center text-lg font-light text-bgColor xs:hidden">
            Barcha categoriyani ko&apos;rish
            <span>
              <FaArrowRight className="mx-3" />
            </span>
          </Link>
        </div>
      </div>
      <div className="response_product_category grid grid-cols-5 gap-2 xs:grid xs:grid-cols-2 xs:gap-1 2xs:grid 2xs:grid-cols-2">
        {product?.pages?.map((page) =>
          page.data?.map((item, index) => (
            <div
              className="relative h-[480px] w-productWidth flex-shrink-0 rounded-md px-[10px] pt-2 transition-all hover:shadow-lg xs:h-[368px] xs:w-[180px]"
              key={index}
            >
              <span className="absolute left-3 top-5 z-50 bg-red-500 px-1 text-sm text-white">
                TOP
              </span>
              <div className="relative h-[230px] w-full xs:h-[150px] xs:w-[100%]">
                <div className="cart-slider group flex h-full items-center justify-center">
                  <button
                    className="absolute right-[30%] top-[40%] z-50 hidden rounded-3xl bg-bgColor px-3 py-2 text-white hover:border-bgColor hover:bg-bgColor/90 group-hover:block xs:right-[13%] xs:h-10 xs:w-32 xs:rounded-md xs:px-1 xs:py-1 xs:text-sm"
                    onClick={() => getFastid(item.id)}
                  >
                    Tezkor ko&apos;rish
                  </button>
                  <Link
                    to={`/details/${item.id}?infoTab=1`}
                    className="w-full xs:flex xs:h-[100%_!important] xs:w-[163px_!important] xs:items-center xs:justify-center"
                  >
                    <div className="h-[230px] xs:h-[150px_!important] xs:w-[150px_!important]">
                      <LazyLoad height={230}>
                        <Image
                          alt={"avatar"}
                          src={`data:image/png;base64,${item.file?.fileBase64}`}
                          title={`${item?.name}`}
                          loading="lazy"
                          height={"230px"}
                          className="h-[100%_!important] w-[268px_!important] rounded-xl bg-center object-cover align-middle xs:h-[150px_!important] xs:w-[145px_!important]"
                        />
                      </LazyLoad>
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
                          <IoLocationOutline className="mr-3" />
                          {item?.regionName} / {item?.districtName}
                        </span>
                      </div>
                      <span className="text mt-3 flex items-center justify-between font-poppins text-[13px] font-normal leading-[100%] tracking-[-0.22px] text-spanColor xs:text-sm">
                        <div className="flex items-center justify-center">
                          <BsCalendarDate className="mr-3" />
                          <span className="xs:text-sm">{item?.dateValue}</span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-20 flex-col justify-between">
                <span className="text inline-flex w-max items-center rounded-md bg-bgColor px-2 py-2 font-poppins text-[18px] font-medium not-italic leading-[100%] text-textColor xs:py-1 xs:text-sm">
                  {item?.price}
                  <p className="ml-1">so{"'"}m</p>
                </span>
                <div className="text flex items-center justify-between font-poppins font-normal leading-[100%] tracking-[-0.22px] text-spanColor">
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
                      className={`h-[40px] w-[40px] ${existing?.map(
                        (items) =>
                          items === item?.id &&
                          "r mx-1 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-md bg-bgColor text-whiteTextColor hover:text-whiteTextColor",
                      )}`}
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
        {isFetchingNextPage ? (
          <Spin indicator={<LoadingOutlined style={{ fontSize: 50 }} />} />
        ) : (
          "mahsulot tugadi"
        )}
      </div>
    </div>
  );
};

export default Products;
