import { LoadingOutlined } from "@ant-design/icons";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { List, Spin } from "antd";
import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import api from "../config/api/api";
import useFilter from "../hooks/product/useFilter";
import "./style.css";

const Exports = ({ filter, setFilter }) => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { setManufacture, manufacture } = useFilter();
  const queryClient = useQueryClient();
  const [types, setTypes] = useState({
    name: "",
    value: "",
    type: "",
    e: "",
    num: "",
    item: "",
  });

  // Search function triggered by button click
  const performSearch = async () => {};

  // Event handler for text input change

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

  const updateManufacture = (propertyId, valueTypeId, value) => {
    setManufacture((prevManufacture) => {
      if (value === "") {
        return prevManufacture.filter((item) => item.propertyId !== propertyId);
      }

      const existingItemIndex = prevManufacture.findIndex(
        (item) => item.propertyId === propertyId,
      );
      if (existingItemIndex !== -1) {
        const updatedManufacture = [...prevManufacture];
        updatedManufacture[existingItemIndex].filter = value;
        return updatedManufacture;
      }

      return [...prevManufacture, { propertyId, valueTypeId, filter: value }];
    });
  };

  const updateSearchParams = (name, value, type) => {
    const updatedParams = new URLSearchParams(searchParams);
    if (value === "") {
      updatedParams.delete(type ? `${name}_${type}` : name);
    } else {
      updatedParams.set(type ? `${name}_${type}` : name, value);
    }
    setSearchParams(updatedParams);
  };

  const onChangeEvent = () => {};

  const onChangeNumberEvent = () => {
    const { value, e, num, item, name, type } = types;
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
    const { e, num, item, type } = types;
    // prevent.preventDefault();

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
  const renderFilterItem = (item) => {
    const isNumberType = ["INTEGER", "DOUBLE"].includes(
      item?.property?.valueTypeDto?.typeName,
    );

    return (
      <div
        // onSubmit={addPropertyForFilter}
        className="my-3 flex w-[300px] items-center "
        key={item.property.id}
      >
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
                className=" h-10 w-full rounded-sm border py-2 indent-2 outline-none"
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
                className=" mx-1 h-10 w-full rounded-sm border py-2 indent-2 outline-none"
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
          <div className="flex  w-full  items-center justify-start">
            <input
              type="text"
              className=" h-10 w-full rounded-sm border py-2 indent-2 text-[13px] outline-none"
              placeholder={`${item?.property?.name} ni kiriting`}
              onChange={(e) =>
                setTypes({
                  ...types,
                  e: e.target.value,
                  item: item,
                  type: "text",
                })
              }
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  addPropertyForFilter(e);
                }
              }}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex  flex-col items-center justify-start rounded-md border">
      <List orientation="left" className="w-[100%_important]">
        {isLoading ? (
          <Spin indicator={<LoadingOutlined style={{ fontSize: 50 }} />} />
        ) : (
          getFilters?.map(renderFilterItem)
        )}
      </List>
    </div>
  );
};

export default Exports;
