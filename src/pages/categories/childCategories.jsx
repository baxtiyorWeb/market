import { useQuery } from "@tanstack/react-query";
import { Pagination, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useParams, useSearchParams } from "react-router-dom";
import api from "../../config/api/api";
import {
  getCategoriesRootLisId,
  getCategoriesRootListSticky,
} from "../../exports/api";
import SegmentedUi from "../../ui/segmented/Segmented";
import BreadCrumbs from "./../../ui/breadcrumbs/BreadCrumbs";
import "./categories.css";
import ProductFilter from "./productFilter/ProductFilter";
import ProductGetList from "./productGetList";
const ChildCategories = () => {
  const { id } = useParams();
  const [getCategId, setCateggetId] = useState([]);

  const searchParam = useSearchParams();
  const paramName = searchParam[0].get("category-name");
  const formatParamName = paramName?.split("-").join(" ");

  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["category", id],
    queryFn: () => getCategoriesRootLisId(id),
  });
  const { data: rootCategories } = useQuery({
    queryKey: ["category"],
    queryFn: getCategoriesRootListSticky,
  });

  const getCategoryId = async () => {
    const getid = await api.get(`/category/${id}`);
    const res = getid.data;
    const data = await res?.data;
    setCateggetId(data);
  };
  useEffect(() => {
    getCategoryId();
  }, [id]);

  const categId = getCategId.id;

  // if (isLoading) return <Loading />;
  // if (error) return `Error: ${error}`;
  // console.log(categories);
  return (
    <div className="h-full flex-col items-start justify-center ">
      <BreadCrumbs categories={getCategId} categoryId={id} />
      <hr className=" mb-3" />
      <div className="flex  w-full items-center justify-start rounded-md">
        <h1 className="text-1xl mr-5 flex items-center justify-center">
          bosh categoriyalar{" "}
          <FaArrowRight className="text ml-3 mr-1 text-lg font-light" />
        </h1>
        <Space direction="horizontal">
          {rootCategories?.data?.content?.map((item, index) => (
            <div className="flex items-center justify-center" key={index}>
              <Link
                to={`/category/${item?.id}?category-name=${item?.name
                  ?.split(", ")
                  ?.join("-")}`}
                className={`flex items-center justify-center rounded-md ${
                  paramName == item?.name
                    ? "flex h-10  bg-[#FEECC1] p-2 text-sm hover:bg-[#FEECC1] hover:bg-slate-500/10  hover:text-slate-900 "
                    : `h-10 rounded-md bg-[#F7F7F7] p-2 text-sm  hover:bg-slate-500/10  hover:text-slate-900`
                }`}
              >
                {" "}
                {item?.name}
              </Link>
              <span className="mx-1 text-spanColor"></span>
            </div>
          ))}
        </Space>
      </div>

      <div className="text mb-3 mt-5 flex items-center justify-start text-[36px] font-medium leading-[49px] text-[#111]">
        <h1>{formatParamName}</h1>
        <span className="text mx-3 mt-3 text-sm text-gray-500">
          500 ta mahsulot
        </span>
      </div>
      <div className="flex w-full items-start  justify-start rounded-md border-b pb-5">
        <Space direction="horizontal">
          {categories?.data?.content?.map((item, index) => (
            <div className="flex items-center justify-center" key={index}>
              <Link
                to={`/category/${item?.id}?category-name=${item?.name
                  ?.split(", ")
                  ?.join("-")}`}
                className={`flex items-center justify-center rounded-md ${
                  paramName == item?.name
                    ? "flex h-10  bg-[#FEECC1] p-2 text-sm hover:bg-[#FEECC1] hover:bg-slate-500/10  hover:text-slate-900 "
                    : `h-10 rounded-md bg-[#F7F7F7] p-2 text-sm  hover:bg-slate-500/10  hover:text-slate-900`
                }`}
              >
                {" "}
                {item?.name}
              </Link>
              <span className="mx-1 text-spanColor"></span>
            </div>
          ))}
        </Space>
      </div>
      <div className="grid h-full grid-flow-col grid-rows-3 gap-4">
        <div className="flex flex-col">
          <div className="row-span-3 my-2 flex h-[max-content] w-[330px] flex-col rounded-2xl bg-white p-5  ">
            <div className="my-5 border-b border-b-gray-500 text-left text-[15px] font-bold">
              Saralash
            </div>
            <ProductFilter />
          </div>
        </div>
        <div className="product-section col-span-12 row-span-3 h-full w-full    p-3">
          <div className="my-5 flex items-center justify-between  rounded-md bg-white p-2 text-left text-[15px]  ">
            <div className="">
              <Select
                className="mx-5 w-[230px]"
                options={[
                  {
                    label: "Yangi kelganlar",
                    value: "Yangi kelganlar",
                  },
                  {
                    label: "eskilar",
                    value: "eskilar ",
                  },
                  {
                    label: "arzonlar ",
                    value: "arzonlar ",
                  },
                ]}
              />
            </div>
            <Pagination defaultCurrent={1} total={100} />

            <SegmentedUi />
          </div>
          <ProductGetList />
        </div>
      </div>
    </div>
  );
};

export default ChildCategories;
