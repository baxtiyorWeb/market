import { useQuery } from "@tanstack/react-query";
import { Input, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import api from "../../config/api/api";
import {
  getCategoriesRootLisId,
  getCategoriesRootListSticky,
} from "../../exports/api";
import SegmentedUi from "../../ui/segmented/Segmented";
import BreadCrumbs from "./../../ui/breadcrumbs/BreadCrumbs";
import Loading from "./../../ui/loading/Loading";
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

  if (isLoading) return <Loading />;
  if (error) return `Error: ${error}`;
  console.log(categories);
  return (
    <div className="h-full flex-col items-start justify-center ">
      <BreadCrumbs categories={getCategId} categoryId={id} />

      <div className="flex  w-full items-start justify-start rounded-md">
        <Space direction="horizontal">
          {rootCategories?.data?.content?.map((item, index) => (
            <div className="flex items-center justify-center" key={index}>
              <Link
                to={`/category/${item?.id}?category-name=${item?.name
                  ?.split(", ")
                  ?.join("-")}`}
                className={
                  paramName == item?.name
                    ? "rounded-md bg-slate-500/10 p-2  text-textColor hover:text-textColor"
                    : `rounded-md p-2 hover:bg-slate-500/10  hover:text-slate-900`
                }
              >
                {" "}
                {item?.name}
              </Link>
              <span className="mx-3 text-spanColor">|</span>
            </div>
          ))}
        </Space>
      </div>
      <div className="grid h-full grid-flow-col grid-rows-3 gap-4">
        <div className="flex flex-col">
          <div className="row-span-3 my-2 flex h-[max-content] w-[330px] flex-col rounded-2xl bg-white p-5  ">
            <div className="my-5 border-b border-b-gray-500 text-left text-[15px] font-bold">
              Bo&apos;limlar
            </div>

            <div className="flex  flex-col items-start justify-center">
              <Space direction="vertical" className="w-full ">
                {categories?.data?.content?.map((item, index) => (
                  <Link
                    key={index}
                    to={`/category/${item?.id}?category-name=${item?.name
                      ?.split(", ")
                      ?.join("-")}`}
                    className={
                      paramName === item?.name
                        ? "flex w-full items-center justify-start rounded-xl bg-[#EFF1F3] p-3 transition-all"
                        : `flex w-full items-center justify-start rounded-xl p-3 transition-all hover:bg-[#EFF1F3]
                    hover:text-[#5c5c5c]`
                    }
                  >
                    {" "}
                    <span htmlFor={`${item?.id}`}>
                      {item?.name} <span>{}</span>
                    </span>
                  </Link>
                ))}
              </Space>
            </div>
            <div className="my-5 border-b border-b-gray-500 text-left text-[15px] font-bold">
              Saralash
            </div>
            <ProductFilter />
          </div>
        </div>
        <div className="product-section col-span-12 row-span-3 h-full w-full    p-3">
          <div className="my-5 flex items-center justify-between  rounded-md bg-white p-2 text-left text-[15px]  ">
            <div className="flex items-center justify-center">
              {formatParamName}
            </div>
            <div className="">
              <Select
                className="w-[60px]"
                defaultValue={5 || ""}
                options={[
                  {
                    label: 5,
                    value: 5,
                  },
                  {
                    label: 10,
                    value: 10,
                  },
                  {
                    label: 15,
                    value: 15,
                  },
                ]}
              />

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

              <Input.Search
                loading={false}
                enterButton
                enterKeyHint="send"
                placeholder="categoriya boyicha qidiring"
                className="w-56 "
              />
            </div>
            <SegmentedUi />
          </div>
          <ProductGetList />
        </div>
      </div>
    </div>
  );
};

export default ChildCategories;
