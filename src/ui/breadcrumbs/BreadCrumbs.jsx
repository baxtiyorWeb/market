import { useQuery } from "@tanstack/react-query";
import { Breadcrumb } from "antd";
import React from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../config/api/api";

const Breadcrumbs = () => {
  const { id } = useParams();
  const getCategoryWithId = async () => {
    const response = await api.get(`/category/${id}`);
    return response.data?.data;
  };

  const { data: category } = useQuery({
    queryKey: ["category", id],
    queryFn: getCategoryWithId,
  });
  const categ = category;
  const breadcrumbsArr = [];
  let currentData = categ;
  while (currentData) {
    breadcrumbsArr.unshift(
      <Breadcrumb
        fontWeight="light"
        fontSize="sm"
        key={currentData.id}
        prefixCls="/"
      >
        <Breadcrumb.Item key={id}>
          <Link
            className={` hover:text-[#212121] ${
              currentData.id == id
                ? "text-red-500 hover:text-[#212121]"
                : "hover:text-[#212121]"
            }`}
            to={
              currentData.parent != null
                ? `/category/${currentData.id}?category-name=${currentData?.name
                    .split(", ")
                    .join("-")}`
                : `/category/${currentData.id}?category-name=${currentData?.name
                    ?.split(", ")
                    .join("-")}`
            }
          >
            <div className="mr-3 flex -skew-x-6 items-center  justify-center rounded-sm">
              <span className=" transform rounded-md p-1 text-[13px]  hover:text-[#212121]">
                {currentData?.name}{" "}
                <span className="mx-5">{currentData.id == id ? "" : "/"}</span>
              </span>
            </div>
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>,
    );

    currentData = currentData.parent;
  }

  return (
    <div className="">
      <div className="mt-2 flex h-auto  items-center justify-start rounded-md    p-1">
        <Link to={"/"} className="-skew-x-6 text-sm hover:text-[#212121]">
          bosh sahifa
        </Link>
        <span className="mx-5 ">/</span>
        {breadcrumbsArr}
      </div>
      <hr className="my-3 w-full" />
    </div>
  );
};

export default Breadcrumbs;
