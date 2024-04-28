import { useQuery } from "@tanstack/react-query";
import { Input, Radio, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import api from "../../config/api/api";
import { getCategoriesRootLisId } from "../../exports/api";
import Loading from "../../ui/loading/Loading";
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
    enabled: !id,
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

  if (isLoading) return <Loading />;

  if (error) return `Error: ${error}`;
  return (
    <div className="h-full flex-col items-start justify-center ">
      <BreadCrumbs categories={getCategId} categoryId={id} />
      <div className="flex items-center justify-center"></div>
      <div className="grid h-full grid-flow-col grid-rows-3 gap-4">
        <div className="flex flex-col">
          <div className="row-span-3  flex h-auto w-[330px] flex-col rounded-2xl bg-white p-5  shadow-lg  ">
            <div className="my-5 border-b border-b-gray-500 text-left text-[15px] font-bold">
              Bo&apos;limlar
            </div>
            <div className="flex  flex-col items-start justify-center">
              <Radio.Group>
                <Space direction="vertical">
                  {categories?.data?.content?.map((item, index) => (
                    <Link
                      to={`/category/${item?.id}?category-name=${item?.name
                        ?.split(", ")
                        ?.join("-")}`}
                    >
                      {" "}
                      <Radio value={item?.id} key={index}>
                        {item?.name}
                      </Radio>
                    </Link>
                  ))}
                </Space>
              </Radio.Group>
            </div>
          </div>
          <div className="row-span-3 my-2 flex h-[600px] w-[330px] flex-col rounded-2xl bg-white p-5  shadow-lg">
            <div className="my-5 border-b border-b-gray-500 text-left text-[15px] font-bold">
              Saralash
            </div>
            <ProductFilter />
          </div>
        </div>
        <div className="product-section col-span-12 row-span-3 h-full w-full    p-3">
          <div className="my-5 flex items-center justify-between  rounded-md bg-white p-2 text-left text-[15px]  shadow-md">
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
