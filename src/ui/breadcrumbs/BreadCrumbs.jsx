import { Breadcrumb } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ categoryId, categories }) => {
  const categ = categories;
  const breadcrumbsArr = [];
  let currentData = categ;
  while (currentData) {
    breadcrumbsArr.unshift(
      <Breadcrumb
        fontWeight="light"
        fontSize="sm"
        key={currentData.id}
        prefixCls="/"
        params={categoryId}
      >
        <Breadcrumb.Item>
          <Link
            className={` hover:text-[#212121] ${
              currentData.id == categoryId
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
                <span className="mx-5">
                  {currentData.id == categoryId ? "" : "/"}
                </span>
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
        {breadcrumbsArr}
      </div>
      <hr className="my-3 w-full" />
    </div>
  );
};

export default Breadcrumbs;
