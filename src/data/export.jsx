import { LoadingOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { List, Spin } from "antd";
import { useCallback, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import api from "../config/api/api";
import { getProductStringValues } from "../exports/api";
import CategorySlider from "../pages/categories/categorySlider";
import "./style.css";
import { useFilterProduct } from "../context/filterProvider";

// eslint-disable-next-line react/prop-types
const Exports = ({ filter, setFilter }) => {
  const textRef = useRef(null);
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [fullValue, setFullValue] = useState("");
  const { setManufacture } = useFilterProduct();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(false);
  const [propertyId, setPropertyId] = useState(0);
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

  const updateSearchParams = useCallback(
    (name, value, type) => {
      const updatedParams = new URLSearchParams(searchParams);
      if (value === "") {
        updatedParams.delete(type ? `${name}_${type}` : name);
      } else {
        updatedParams.set(type ? `${name}_${type}` : name, value || fullValue);
      }
      setSearchParams(updatedParams);
    },
    [searchParams, setSearchParams, fullValue],
  );

  const onChangeNumberEvent = useCallback(() => {
    const { e, item, type } = types;
    const propertyId = item?.property?.id;
    const valueTypeId = item?.property?.valueTypeDto?.id;

    setManufacture((prevManufacture) => {
      const existingIndex = prevManufacture.findIndex(
        (manufactureItem) =>
          manufactureItem.propertyId === propertyId &&
          manufactureItem.valueTypeId === valueTypeId,
      );

      const newFilter = {
        propertyId,
        valueTypeId,
        filter: { [type]: Number(e) },
      };

      if (e === "") {
        return prevManufacture.filter((item) => item.propertyId !== propertyId);
      }

      if (existingIndex !== -1) {
        const updated = [...prevManufacture];
        updated[existingIndex] = newFilter;
        return updated;
      } else {
        return [...prevManufacture, newFilter];
      }
    });

    updateSearchParams(item?.property?.name, e, type);
  }, [types, setManufacture, updateSearchParams]);

  const addPropertyForFilter = useCallback(() => {
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
  }, [onChangeNumberEvent, setManufacture, updateSearchParams, types]);

  // const handleClickPriceValue = (event, type) => {
  //   if (type === "min") {
  //     setFilter({ ...filter, price_min: event });
  //   } else {
  //     setFilter({ ...filter, price_max: event });
  //   }
  // };

  const { data: productLiveFilter } = useQuery({
    queryKey: ["product/string-values", id, propertyId],
    queryFn: () => getProductStringValues(id, propertyId),
  });

  const highlightText = useCallback((text, highlight) => {
    if (!highlight) return text;
    const parts = text?.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="text-red-500 hover:bg-blue-500">
          {part}
        </span>
      ) : (
        part
      ),
    );
  }, []);

  const handleTextFilterChange = useCallback(
    (e, item) => {
      setTypes({ ...types, e: e.target.value, item, type: "text" });
      if (item?.property?.id) {
        setPropertyId(item.property.id);
      }
      setOpen(true);
    },
    [types],
  );

  // const stringValues = useCallback(
  //   (typeId, e) => {
  //     setValue(e.target.value);
  //     if (typeId) {
  //       setPropertyId(typeId);
  //       getProductStringValues(id, typeId);
  //     }
  //     setOpen(true);
  //   },
  //   [id, setTypes, setPropertyId, propertyId],
  // );

  const setPropertyFilterValue = useCallback(
    (propertyId, valueTypeId) => {
      const { e, type, item } = types;
      console.log(propertyId, valueTypeId);
      setManufacture((prevManufacture) => {
        // Check if the property with the same ID exists in the manufacture
        const existingItemIndex = prevManufacture.findIndex(
          (manufactureItem) => manufactureItem.propertyId === propertyId,
          updateSearchParams(item?.property?.name, e, type),
        );

        if (value === "") {
          return prevManufacture.filter(
            (manufactureItem) => manufactureItem.propertyId !== propertyId,
          );
        }

        // Create the new filter object
        const newFilter = {
          propertyId,
          valueTypeId,
          filter: fullValue,
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
    },
    [types, setTypes, updateSearchParams],
  );

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

                handleTextFilterChange(e, item);
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  addPropertyForFilter(e);
                }
              }}
              onClick={() =>
                setOpen(item?.property?.id === propertyId && !open)
              }
            />

            {item?.property?.id === propertyId && open ? (
              <div
                className={`${
                  item?.property?.id === propertyId && open
                    ? "animation"
                    : "animation"
                } absolute left-0 top-full  z-10 flex w-full flex-col rounded-md border border-gray-300 bg-white shadow-md`}
              >
                {productLiveFilter?.data?.map((item, index) => (
                  <p
                    ref={textRef}
                    key={index}
                    className="cursor-pointer p-1 text-base hover:bg-red-300"
                    onClick={() => {
                      setPropertyFilterValue(
                        propertyId,
                        types?.item?.property?.valueTypeDto?.id,
                        item,
                        types,
                      );
                      setFullValue(item);
                    }}
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
    <div className="flex flex-col  items-start justify-start rounded-md border md:mt-36">
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
