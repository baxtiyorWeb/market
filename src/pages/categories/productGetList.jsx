import { Calendar, Spin } from "antd";
import { Link } from "react-router-dom";
import { ChildSkeletonLoading } from "../../ui/loading/ChildSkeletonLoading";
import "./categories.css";
import { useFilterProduct } from "../../context/filterProvider";
import { Eye, Heart, Locate } from "lucide-react";
const ProductGetList = () => {
  const existing = JSON.parse(localStorage.getItem("products")) || [];
  const { data, isFetchingNextPage, isLoading } = useFilterProduct();
  if (isLoading) {
    return (
      <div className="text-center">
        <ChildSkeletonLoading />
      </div>
    );
  }

  return (
    <>
      <div
        className="
       grid grid-cols-4 gap-1 
       sm:grid  sm:grid-cols-2
       md:grid  md:grid-cols-3
       lg:gap-5 lg_min_c:grid lg_min_c:grid-cols-4 xs:grid 
       xs:grid-cols-2 xs:gap-1
       2xs:grid 2xs:grid-cols-2
       3xs:grid
       3xs:grid-cols-1
       "
      >
        {/* {isOpen && <Overlay closed={handleToggle} />}
          {isOpen && <FastDetailView id={fastId} />} */}
        {/* <button>get product</button> */}

        {isLoading ? (
          <ChildSkeletonLoading />
        ) : (
          data?.pages?.map((page, i) =>
            page.data?.map((item, index) => (
              <div
                className={` ${
                  i ? "animation" : "animation"
                } relative h-[460px]  flex-shrink-0 rounded-md px-[10px] pt-2 transition-all hover:shadow-lg xs:h-[368px] `}
                key={index}
              >
                <span className="absolute left-3 top-5 z-50 bg-red-500 px-1 text-sm text-white">
                  TOP
                </span>
                <div className="relative h-[230px] w-full xs:h-[150px] xs:w-[100%]">
                  <div className="cart-slider group flex h-full items-center justify-center">
                    <button
                      className="absolute right-[30%] top-[40%] z-50 hidden rounded-3xl bg-bgColor px-3 py-2 text-white hover:border-bgColor hover:bg-bgColor/90 group-hover:block xs:right-[13%] xs:h-10 xs:w-32 xs:rounded-md xs:px-1 xs:py-1 xs:text-sm"
                      // onClick={() => getFastid(item.id)}
                    >
                      Tezkor ko&apos;rish
                    </button>
                    <Link
                      to={`/details/${item.id}?infoTab=1`}
                      className="w-full xs:flex xs:h-[100%_!important] xs:w-[163px_!important] xs:items-center xs:justify-center"
                    >
                      <div className="h-[200px]  xs:h-[150px_!important] xs:w-[150px_!important]">
                        <img
                          src={`data:image/png;base64,${item.file?.fileBase64}`}
                          alt=""
                          width={"100%"}
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
                            <Locate className="mr-3" />
                            {item?.regionName} / {item?.districtName}
                          </span>
                        </div>
                        <span className="text mt-3 flex items-center justify-between font-poppins text-[13px] font-normal leading-[100%] tracking-[-0.22px] text-spanColor xs:text-sm">
                          <div className="flex items-center justify-center">
                            <Calendar className="mr-3" />
                            <span className="xs:text-sm">
                              {item?.dateValue}
                            </span>
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
                      <Eye className="mr-3 text-[16px]" />
                      {item?.viewCount}
                    </span>
                    <div className="flex items-center justify-center">
                      <span
                        // onClick={() => saveLocalProductFavourite(item?.id)}
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
            )),
          )
        )}
      </div>
      <div className="mb-[50px] mt-[50px] flex flex-col items-center justify-center">
        {isFetchingNextPage ? <ChildSkeletonLoading /> : "mahsulot tugadi"}
        {isFetchingNextPage ? <Spin /> : "mahsulot tugadi"}
      </div>
    </>
  );
};

export default ProductGetList;
