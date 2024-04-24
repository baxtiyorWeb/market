import { Breadcrumb } from "antd";
import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetailBreadCrumbs = ({ data }) => {
  const { id } = useParams();
  const categ = data?.category;
  const breadcrumbsArr = [];
  let currentData = categ;
  while (currentData) {
    breadcrumbsArr.unshift(
      <Breadcrumb
        fontWeight="medium"
        fontSize="sm"
        key={currentData.id}
        prefixCls="/"
        params={id}
      >
        <Breadcrumb.Item separator={">"}>
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
              <span className="-skew-x-12 transform rounded-md  bg-slate-200 p-1 hover:text-slate-500">
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
    <div className="my-5 flex h-auto w-full items-center justify-start">
      {breadcrumbsArr}
    </div>
  );
};

export default ProductDetailBreadCrumbs;
