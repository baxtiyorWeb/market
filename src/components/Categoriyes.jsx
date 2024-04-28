import { useQuery } from "@tanstack/react-query";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";

// import styles

// import plugins if you need
import { Carousel } from "antd";
import { useRef, useState } from "react";
import {
  getCategoriesRootLisId,
  getCategoriesRootListSticky,
} from "../exports/api";
import Loading from "./../ui/loading/Loading";
const SubmenuComponent = ({ childCategories, chilId }) => {
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
  const [swiper, setSwiper] = useState(null);

  const ref = useRef(null);
  const { data, isLoading, error } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategoriesRootListSticky(),
  });

  if (error) return `Error: ${error}`;

  if (isLoading) return <Loading />;
  const params = {
    // Provide Swiper class as props
    Swiper,
    // Add modules you need
    modules: [Navigation, Pagination],
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      clickable: true,
    },
    spaceBetween: 30,
  };

  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      console.log(swiper);
      swiper.slidePrev();
    }
  };
  return (
    <div className="slider-container relative mt-5 ">
      <Carousel
        dots
        slidesToShow={4}
        slidesToScroll={1}
        arrows
        waitForAnimate
        autoplay
        draggable
        infinite
        autoplaySpeed={2000}
      >
        {data?.data?.content?.map((item, index) => (
          <div
            className=" my-3  w-full  rounded-md  bg-white shadow-sm "
            key={index}
          >
            <div className="flex  flex-col items-center justify-evenly ">
              <div className="flex h-[70px]  w-[70px] cursor-pointer items-center justify-center rounded-full  ">
                <img
                  className="my-1 h-[40px] w-[40px]"
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
        ))}
      </Carousel>
      <button onClick={goPrev}>next</button>
    </div>
  );
}
