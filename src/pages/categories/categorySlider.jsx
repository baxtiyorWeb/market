import { Carousel } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const CategorySlider = ({ data }) => {
  return (
    <Carousel
      draggable
      className="flex select-none items-center justify-center"
      arrows={true}
      dots={false}
      infinite={false}
      slidesToShow={5}
      slidesToScroll={3}
      speed={1500}
    >
      {data?.map((item, index) => (
        <div
          className={`mt-3 flex items-center justify-center  transition-none duration-150 `}
          key={index}
        >
          <Link
            to={`/category/${item?.id}`}
            className={`group/item flex items-center justify-center rounded-md bg-[#f3f6f7] px-3 py-1 text-sm transition-all duration-200 hover:bg-[#E5E8EC]  hover:text-slate-900`}
          >
            {item?.name}
          </Link>
          <span className="mx-1 text-spanColor"></span>
        </div>
      ))}
    </Carousel>
  );
};

export default CategorySlider;
