import { useQuery } from "@tanstack/react-query";
import { Carousel } from "antd";
import React from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../config/api/api";

const CategorySlider = () => {
  const { id } = useParams();
  const getCategoryChildWithId = async () => {
    const response = await api.get(
      `/category/list?page=0&size=50&parentId=${id}`,
    );

    return response.data?.data;
  };

  const { data: categoryChild } = useQuery({
    queryKey: ["category/list", id],
    queryFn: getCategoryChildWithId,
  });

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
      {categoryChild?.content?.map((item, index) => (
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
