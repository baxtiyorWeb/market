import { Breadcrumb } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ categoryId, categories }) => {
  const categ = categories;
  const breadcrumbsArr = [];
  let currentData = categ;
  console.log(currentData);
  while (currentData) {
    breadcrumbsArr.unshift(
      <Breadcrumb
        fontWeight="medium"
        fontSize="sm"
        key={currentData.id}
        prefixCls="/"
        params={categoryId}
      >
        <Breadcrumb.Item isCurrent={currentData.id == categoryId}>
          <Link
            className=""
            to={
              currentData.parent != null
                ? `/category/${currentData.id}?category-name=${currentData?.name
                    .split(", ")
                    .join("-")}`
                : `/`
            }
          >
            <div className="mr-3 flex  items-center justify-center ">
              {currentData?.name} <span className="mx-1">/</span>
            </div>
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>,
    );

    currentData = currentData.parent;
  }

  return (
    <div className="my-5 flex h-auto w-full items-center justify-start">
      {breadcrumbsArr}
    </div>
  );
};

export default Breadcrumbs;
