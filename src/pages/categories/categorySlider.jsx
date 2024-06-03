import { Carousel, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../config/api/api";

const CategorySlider = () => {
  const { id } = useParams();
  const [categoryChild, setCategoryChild] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getCategoryChildWithId = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `/category/list?page=0&size=50&parentId=${id}`,
      );
      if (response?.status === 200) {
        if (response?.data?.data?.content?.length === 0) {
          return false;
        } else {
          setCategoryChild(response.data?.data);
        }
      }
    } catch (error) {
      error?.message;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCategoryChildWithId();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Spin style={{ color: "#FFBE1E" }} />
      ) : (
        <Carousel
          draggable
          className="flex select-none items-center justify-center"
          arrows={true}
          dots={false}
          infinite={false}
          slidesToShow={5}
          slidesToScroll={3}
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
      )}
    </>
  );
};

export default CategorySlider;
