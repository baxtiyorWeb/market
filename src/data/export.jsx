import { useQuery } from "@tanstack/react-query";
import { Checkbox, Collapse, Input } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import api from "../config/api/api";
import "./style.css";
const Exports = () => {
  const { id } = useParams();
  const getCategoryPropertyFilters = async () => {
    const res = await api.get(`/category/get-filters/${id}`);
    console.log(res.data?.data);
    return res.data?.data;
  };

  const { data: getFilters, isLoading } = useQuery({
    queryKey: ["category/get-filters", id],
    queryFn: getCategoryPropertyFilters,
  });

  const content = getFilters?.map((item, index) => ({
    key: index,
    label: item?.property?.name,
    children: (
      <>
        <Input placeholder="qidirish" className="mb-5 mt-1 h-10 border" />
        <div className="flex w-full items-center justify-start ">
          {item?.property?.valueTypeDto?.typeName === "INTEGER" ? (
            <div className="flex flex-col items-center justify-center">
              <div className="inline-flex w-full items-center justify-between">
                <span>dan</span>
                <span>gacha</span>
              </div>
              <div className="flex items-center justify-center">
                <input
                  type="number"
                  className="m-1 w-full rounded-sm border py-2 indent-2 outline-none"
                  pattern="-"
                  placeholder={item?.filter?.min}
                />
                <input
                  type="number"
                  className="m-1 w-full rounded-sm border py-2 indent-2 outline-none"
                  placeholder={item?.filter?.max}
                />
              </div>
            </div>
          ) : (
            <>
              <Checkbox className="mr-3 " id={item?.property?.name} />
              <label
                htmlFor={item?.property?.name}
                className="text cursor-pointer select-none text-pretty text-base"
              >
                {item?.property?.name}
              </label>
            </>
          )}
        </div>
      </>
    ),
  }));

  return (
    <div className="flex items-center justify-start">
      <Collapse
        expandIconPosition="end"
        className="w-full"
        accordion
        ghost
        collapsible="header"
        defaultActiveKey={1}
        items={content}
      />
    </div>
  );
};

export default Exports;
