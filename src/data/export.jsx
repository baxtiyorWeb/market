import { LoadingOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { List, Spin } from "antd";
import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import api from "../config/api/api";
import useFilter from "../hooks/product/useFilter";
import useLiveSeach from "../hooks/useLiveSeach";
import CategorySlider from "../pages/categories/categorySlider";
import "./style.css";

// eslint-disable-next-line react/prop-types
const Exports = ({ filter, setFilter }) => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [fullValue, setFullValue] = useState("");
  const { setManufacture } = useFilter();
  const { liveSearch, open, setOpen, search, propetyId, value } =
    useLiveSeach();
  const [types, setTypes] = useState({
    name: "",
    value: "",
    type: "",
    e: "",
    num: "",
    item: "",
  });

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

  const updateSearchParams = (name, value, type) => {
    const updatedParams = new URLSearchParams(searchParams);
    if (value === "") {
      updatedParams.delete(type ? `${name}_${type}` : name);
    } else {
      updatedParams.set(type ? `${name}_${type}` : name, value);
    }
    setSearchParams(updatedParams);
  };

  const onChangeNumberEvent = () => {
    const { e, item, type } = types;
    const propertyId = item?.property?.id;
    const valueTypeId = item?.property?.valueTypeDto?.id;

    setManufacture((prevManufacture) => {
      const existingItemIndex = prevManufacture.findIndex(
        (manufactureItem) =>
          manufactureItem.propertyId === propertyId &&
          manufactureItem.valueTypeId === valueTypeId,
      );

      if (e === "") {
        return prevManufacture.filter(
          (manufactureItem) => manufactureItem.propertyId !== propertyId,
        );
      }

      if (existingItemIndex !== -1) {
        const updatedManufacture = [...prevManufacture];
        const currentFilter =
          updatedManufacture[existingItemIndex].filter || {};
        // Update the filter with the new min/max value
        if (e === "") {
          // If input is empty, remove the corresponding value from the filter
          delete currentFilter[type];
        } else {
          // Otherwise, update the filter with the new value
          currentFilter[type] = Number(e);
        }

        // If both min and max are 0, remove the filter
        if (currentFilter.min === 0 && currentFilter.max === 0) {
          updatedManufacture.splice(existingItemIndex, 1);
        } else {
          updatedManufacture[existingItemIndex].filter = currentFilter;
        }

        return updatedManufacture;
      }

      // If the item doesn't exist in the manufacture array, add it
      if (e !== "") {
        return [
          ...prevManufacture,
          {
            propertyId,
            valueTypeId,
            filter: {
              [type]: Number(e),
            },
          },
        ];
      }

      return prevManufacture;
    });

    // Update searchParams with the new values
    updateSearchParams(item?.property?.name, e, type);
  };

  const addPropertyForFilter = (prevent) => {
    const { e, item, type } = types;

    if (type === "min" || type === "max") {
      onChangeNumberEvent();
    } else {
      const onChangeEvent = () => {
        const propertyId = item?.property?.id;
        const valueTypeId = item?.property?.valueTypeDto?.id;

        setManufacture((prevManufacture) => {
          // Check if the property with the same ID exists in the manufacture
          const existingItemIndex = prevManufacture.findIndex(
            (manufactureItem) => manufactureItem.propertyId === propertyId,
          );

          if (e === "") {
            return prevManufacture.filter(
              (manufactureItem) => manufactureItem.propertyId !== propertyId,
            );
          }

          // Create the new filter object
          const newFilter = {
            propertyId,
            valueTypeId,
            filter: e,
          };

          // If the property with the same ID exists, replace it; otherwise, add the new filter
          if (existingItemIndex !== -1) {
            const updatedManufacture = [...prevManufacture];
            updatedManufacture[existingItemIndex] = newFilter;
            return updatedManufacture;
          } else {
            return [...prevManufacture, newFilter];
          }
        });

        // Update searchParams with the new values
        updateSearchParams(item?.property?.name, e, type);
      };
      onChangeEvent();
    }
  };
  // const handleClickPriceValue = (event, type) => {
  //   if (type === "min") {
  //     setFilter({ ...filter, price_min: event });
  //   } else {
  //     setFilter({ ...filter, price_max: event });
  //   }
  // };
  const highlightText = (text, highlight) => {
    console.log(text);
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="text-red-500">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  const setPropertyFilterValue = (propertyId, valueTypeId, item, type) => {
    setManufacture((prevManufacture) => {
      // Check if the property with the same ID exists in the manufacture
      const existingItemIndex = prevManufacture.findIndex(
        (manufactureItem) => manufactureItem.propertyId === propertyId,
        updateSearchParams(types?.item?.property?.name, item, type),
      );
      setFullValue(item);
      setTypes({ ...types, e: item });

      if (value === "") {
        return prevManufacture.filter(
          (manufactureItem) => manufactureItem.propertyId !== propertyId,
        );
      }

      // Create the new filter object
      const newFilter = {
        propertyId,
        valueTypeId,
        filter: value || item,
      };

      // If the property with the same ID exists, replace it; otherwise, add the new filter
      if (existingItemIndex !== -1) {
        const updatedManufacture = [...prevManufacture];
        updatedManufacture[existingItemIndex] = newFilter;
        return updatedManufacture;
      } else {
        return [...prevManufacture, newFilter];
      }
    });

    setOpen(!open);
  };

  const renderFilterItem = (item) => {
    const isNumberType = ["INTEGER", "DOUBLE"].includes(
      item?.property?.valueTypeDto?.typeName,
    );

    return (
      <div className="my-3 flex w-[300px] items-center " key={item.property.id}>
        <div className="my-3 h-[1.2em]  w-[50%] overflow-hidden text-ellipsis  whitespace-nowrap text-left text-sm font-light">
          {item?.property?.name}
        </div>

        {isNumberType ? (
          <div className="flex flex-col items-center justify-center">
            <div className="inline-flex w-full items-center justify-between">
              <span className="text-xs text-gray-400">dan</span>
              <span className="text-xs text-gray-400">gacha</span>
            </div>
            <div className="flex w-full items-center justify-center ">
              <input
                type="number"
                className="mx-1  h-10 w-[98px] rounded-sm border py-2 indent-2 outline-none"
                placeholder={item?.filter?.min}
                onChange={(e) =>
                  setTypes({
                    ...types,
                    e: e.target.value,
                    item: item,
                    type: "min",
                  })
                }
                onKeyDown={(e) => {
                  if (e.keyCode === 13) {
                    addPropertyForFilter(e);
                  }
                }}
              />
              <input
                type="number"
                className=" h-10  w-[98px] rounded-sm border py-2 indent-2 outline-none"
                placeholder={item?.filter?.max}
                onChange={(e) =>
                  setTypes({
                    ...types,
                    e: e.target.value,
                    item: item,
                    type: "max",
                  })
                }
                onKeyDown={(e) => {
                  if (e.keyCode === 13) {
                    addPropertyForFilter(e);
                  }
                }}
              />
            </div>
          </div>
        ) : (
          <div className="relative  flex  w-full items-center justify-start">
            <input
              type="text"
              className=" h-10 w-full rounded-sm border py-2 indent-2 text-[13px] outline-none"
              placeholder={`${item?.property?.name} ni kiriting`}
              defaultValue={fullValue || ""}
              onChange={(e) => {
                setTypes({
                  ...types,
                  e: e.target.value,
                  item: item,
                  type: "text",
                });

                liveSearch(e.target.value, item?.property?.id);
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  addPropertyForFilter(e);
                }
              }}
            />

            {item?.property?.id === propetyId && value && open ? (
              <div className="absolute left-0 top-full z-10 flex w-full flex-col rounded-md border border-gray-300 bg-white shadow-md">
                {search?.map((item, index) => (
                  <p
                    key={index}
                    className="cursor-pointer p-1 text-base"
                    onClick={() =>
                      setPropertyFilterValue(
                        propetyId,
                        types?.item?.property?.valueTypeDto?.id,
                        item,
                        "text",
                      )
                    }
                  >
                    {highlightText(item, value)}
                  </p>
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className=" flex  flex-col items-start justify-start rounded-md border">
      <div>
        <CategorySlider />
        <List orientation="left" className="w-[100%_important] px-1 py-3">
          <div className="flex flex-col items-end justify-center">
            <div className="inline-flex w-[67%] items-center justify-between">
              <span className="text-xs text-gray-400">dan</span>
              <span className="text-xs text-gray-400">gacha</span>
            </div>
            <div className="flex w-full items-center justify-center ">
              <div className="my-3 h-[1.2em]  w-[50%] overflow-hidden text-ellipsis  whitespace-nowrap text-left text-sm font-light">
                narxini kiriting
              </div>
              <input
                type="number"
                className="mx-1  h-10 w-[98px] rounded-sm border py-2 indent-2 outline-none"
                placeholder={"min"}
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    price_min: e.target.value,
                  })
                }
              />
              <input
                type="number"
                className=" h-10  w-[98px] rounded-sm border py-2 indent-2 outline-none"
                placeholder={"max"}
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    price_max: e.target.value,
                  })
                }
              />
            </div>
          </div>

          {isLoading ? (
            <Spin indicator={<LoadingOutlined style={{ fontSize: 50 }} />} />
          ) : (
            getFilters?.map(renderFilterItem)
          )}
        </List>
      </div>
    </div>
  );
};

export default Exports;
