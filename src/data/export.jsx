import { LoadingOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { List, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import api from "../config/api/api";
import useFilter from "../hooks/product/useFilter";
import "./style.css";

const Exports = ({ filter, setFilter }) => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    setSaveFilter,
    setSaveLocal,
    saveLocal,
    setRefetch,
    manufacture,
    setManufacture,
  } = useFilter();

  const [numberFilter, setNumberFilter] = useState({
    min: 0,
    max: 0,
  });

  useEffect(() => {
    if (filter?.propertyName) {
      const propertyValue = manufacture.propertyValue;
      const propertyIds = Array.isArray(filter?.propertyName)
        ? filter?.propertyName
        : [filter?.propertyName];
      setFilter({ ...filter, propertyName: propertyValue });
    }
  }, [searchParams]);

  useEffect(() => {
    const propertyValue = manufacture.propertyValue;
    setFilter({ ...filter, propertyName: propertyValue });
  }, []);

  const getCategoryPropertyFilters = async () => {
    const params = new URLSearchParams();
    const res = await api.get(
      `/category/get-filters/${id}?${params.toString()}`,
    );
    return res.data?.data;
  };

  const { data: getFilters, isLoading } = useQuery({
    queryKey: ["category/get-filters", id],
    queryFn: getCategoryPropertyFilters,
  });

  const onChangeEvent = (e, item) => {
    const { value } = e.target;

    const propertyId = item?.property?.id;
    const valueTypeId = item?.property?.valueTypeDto?.id;

    setManufacture((prevManufacture) => {
      if (value === "") {
        console.log(propertyId);
        // Obyektni olib tashlash
        prevManufacture.filter(
          (manufactureItem) => manufactureItem.propertyId !== propertyId,
        );
      }

      const existingItemIndex = prevManufacture.findIndex(
        (manufactureItem) => manufactureItem.propertyId === propertyId,
      );

      if (existingItemIndex !== -1) {
        // Update the existing item's filter value
        const updatedManufacture = [...prevManufacture];
        updatedManufacture[existingItemIndex].filter = value;
        return updatedManufacture;
      } else {
        // Add a new item to the manufacture array
        return [
          ...prevManufacture,
          {
            propertyId,
            valueTypeId,
            filter: value,
          },
        ];
      }
    });

    const updatedParams = new URLSearchParams(searchParams);
    if (value === "") {
      updatedParams.delete(item?.property?.name);
    } else {
      updatedParams.set(item?.property?.name, value);
    }
    setSearchParams(updatedParams);
  };

  const onChangeNumberEvent = (e, item, type) => {
    const { value } = e.target;

    const propertyId = item?.property?.id;
    const valueTypeId = item?.property?.valueTypeDto?.id;

    setManufacture((prevManufacture) => {
      if (value === "") {
        // Obyektni olib tashlash
        return prevManufacture.filter(
          (manufactureItem) => manufactureItem.propertyId !== propertyId,
        );
      }

      const existingItemIndex = prevManufacture.findIndex(
        (manufactureItem) => manufactureItem.propertyId === propertyId,
      );

      if (existingItemIndex !== -1) {
        // Mavjud elementning filter qiymatini yangilash
        const updatedManufacture = [...prevManufacture];
        updatedManufacture[existingItemIndex].filter[type] = Number(value);
        return updatedManufacture;
      } else {
        // Yangi elementni manufacture massiviga qo'shish
        return [
          ...prevManufacture,
          {
            propertyId,
            valueTypeId,
            filter: {
              [type]: Number(value),
            },
          },
        ];
      }
    });

    const updatedParams = new URLSearchParams(searchParams);
    if (value === "") {
      updatedParams.delete(item?.property?.name);
    } else {
      updatedParams.set(`${item?.property?.name}_${type}`, value);
    }
    setSearchParams(updatedParams);
  };

  return (
    <div className="flex items-center justify-start">
      <List orientation="left" className="w-[100%_important]">
        {isLoading ? (
          <Spin indicator={<LoadingOutlined style={{ fontSize: 50 }} />} />
        ) : (
          getFilters?.map((item, index) => (
            <div className="my-3 flex w-full items-center " key={index}>
              {item?.property?.valueTypeDto?.typeName === "INTEGER" ||
              item?.property?.valueTypeDto?.typeName === "DOUBLE" ? (
                <div className="flex flex-col items-center justify-center ">
                  <div className="my-3 w-full text-left text-base font-medium">
                    {item?.property?.name}
                  </div>
                  <div className="inline-flex w-full items-center justify-between">
                    <span className={"text text-gray-400"}>dan</span>
                    <span className={"text text-gray-400"}>gacha</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <input
                      type="number"
                      className="m-1 h-10 w-full rounded-sm border py-2 indent-2 outline-none"
                      placeholder={item?.filter?.max}
                      onChange={(e) => onChangeNumberEvent(e, item, "min")}
                    />
                    <input
                      type="number"
                      className="m-1 h-10 w-full rounded-sm border py-2 indent-2 outline-none"
                      pattern="-"
                      placeholder={item?.filter?.min}
                      onChange={(e) => onChangeNumberEvent(e, item, "max")}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={"flex w-full flex-col items-center justify-start"}
                >
                  <div className="my-3 w-full text-left text-base font-medium">
                    {item?.property?.name}
                  </div>

                  <input
                    type="text"
                    className="m-1 h-10 w-full  rounded-sm border py-2 indent-2 text-[13px] outline-none"
                    placeholder={`${item?.property?.name} ni kiriting`}
                    onChange={(e) => onChangeEvent(e, item)}
                  />
                </div>
              )}
            </div>
          ))
        )}
      </List>
    </div>
  );
};

export default Exports;
