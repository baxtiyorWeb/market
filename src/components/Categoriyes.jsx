import { useQuery } from "@tanstack/react-query";

import { Menu } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { getCategoriesRootLisId, getCategoriesRootList } from "../exports/api";
import Loading from "./../ui/loading/Loading";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { useState } from "react";
import {
  FreeMode,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";

const SubmenuComponent = ({ childCategories, chilId }) => {
  console.log(chilId);
  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategoriesRootLisId(chilId),
  });
  return (
    <>
      {data?.childCategories?.length &&
        childCategories?.childCategories?.map((item) => (
          <Menu mode="horizontal" key={index}>
            <Menu.Item title={item?.name}>
              <SubmenuComponent data={item} />
            </Menu.Item>
          </Menu>
        ))}
    </>
  );
};

export default function Categoriyes() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategoriesRootList(),
  });
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (error) return `Error: ${error}`;

  if (isLoading) return <Loading />;
  const dataImages = data?.data?.content?.map((item) => item?.file);

  console.log(dataImages);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper my-2 h-[200px] "
      >
        {data?.data?.content?.map((item, index) => (
          <SwiperSlide key={index} className=" px-16">
            <div className="h-[150px] w-[100px] rounded-3xl   ">
              <div className="flex flex-col items-center justify-center">
                <div className="flex h-[70px]  w-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFF] shadow-sm">
                  <img
                    className="h-[30px] w-[30px]"
                    src={`data:image/png;base64,${item?.file?.fileBase64}`}
                    alt=""
                  />
                </div>
                <Link
                  to={`/category/${item?.id}?category-name=${item?.name
                    .split(", ")
                    .join("-")}`}
                  className="text-center "
                >
                  <span className="mt-3 text-center  font-poppins text-[19px] font-normal not-italic leading-[100%] text-[#130F1E] hover:text-[#218490]">
                    {item?.name}
                  </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {dataImages?.fileBase64 ? (
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={10}
          freeMode={true}
          watchSlidesProgress={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, FreeMode, Mousewheel, Keyboard]}
          className="mySwiper my-2 h-[200px] "
        >
          {data?.data?.content?.map((item, index) => (
            <SwiperSlide key={index} className=" px-16">
              <div className="h-[150px] w-[100px] rounded-3xl   ">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex h-[70px]  w-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFF] shadow-sm">
                    <img
                      className="h-[30px] w-[30px]"
                      src={`data:image/png;base64,${item?.file?.fileBase64}`}
                      alt=""
                    />
                  </div>
                  <Link
                    to={`/category/${item?.id}?category-name=${item?.name
                      .split(", ")
                      .join("-")}`}
                    className="text-center "
                  >
                    <span className="mt-3 text-center  font-poppins text-[19px] font-normal not-italic leading-[100%] text-[#130F1E] hover:text-[#218490]">
                      {item?.name}
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        ""
      )}
    </div>
  );
}
