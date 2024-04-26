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
        fontWeight="medium"
        fontSize="sm"
        key={currentData.id}
        prefixCls="/"
        params={categoryId}
      >
        <Breadcrumb.Item separator={">"}>
          <Link
            className={`${currentData.id == categoryId ? "text-blue-500" : ""}`}
            to={
              currentData.parent != null
                ? `/category/${currentData.id}?category-name=${currentData?.name
                    .split(", ")
                    .join("-")}`
                : `/`
            }
          >
            <div className="mr-3 flex  items-center justify-center ">
              <span className="-skew-x-12 transform rounded-md hover:text-slate-500">
                {currentData?.name} {">"}
              </span>
            </div>
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>,
    );

    currentData = currentData.parent;
  }

  return (
    <div className="my-5 flex h-auto w-[max-content] items-center justify-start rounded-md bg-slate-200 p-1">
      {breadcrumbsArr}
    </div>
  );
};

export default Breadcrumbs;
