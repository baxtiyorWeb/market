/* eslint-disable no-unused-vars */
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import api from "../../config/api/api";
import { getProductStringValues } from "../../exports/api.js";
// import useParamsFilter from "../useParamsFilter.js";
// 
const useProductFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const [manufacture, setManufacture] = useState([]);
  // const { setSearchParams: applySearchParams } = useParamsFilter();

  const searchValue = searchParams.get("search") || "";
  const regionId = searchParams.get("regionId") || "";
  const districtId = searchParams.get("districtId") || "";
  const price_min = searchParams.get("price_min") || "";
  const price_max = searchParams.get("price_max") || "";
  const paymentTypeId = searchParams.get("paymentType") || "";
  const sellTypeId = searchParams.get("sellType") || "";

  const price = price_min || price_max ? { min: +price_min || 0, max: +price_max || 0 } : null;

  // Fetch category filters
  const getProductFilters = async () => {
    const res = await api.get(`/category/get-filters/${id}`);
    return res.data?.data;
  };

  const { data: getFilters, isLoading: load } = useQuery({
    queryKey: ["category/get-filters", id],
    queryFn: getProductFilters,
  });

  // Fetch product string values for filtering
  const { data: productLiveFilter } = useQuery({
    queryKey: ["product/string-values", id, 13],
    queryFn: () => getProductStringValues(id, 13),
  });

  const updateSearchParams = useCallback(
    (name, value, type, propertyId, valueTypeId, values, types) => {
      const updatedParams = new URLSearchParams(searchParams);

      // If value is empty, delete it from searchParams; otherwise, set it
      if (value === "") {
        updatedParams.delete(type ? `${propertyId}_${valueTypeId}_${types}` : name);
      } else {
        // Set the actual input value in searchParams, not the ID
        updatedParams.set(
          type ? `${propertyId}_${valueTypeId}_${types}` : propertyId,
          value
        );
      }

      // Update the searchParams to reflect the new changes
      setSearchParams(updatedParams);
    },
    [searchParams.toString(), id, setSearchParams]
  );

  // Add filter and sync state
  const addPropertyAndFilter = useCallback(
    (propertyId, valueTypeId, filter, typeName) => {
      setManufacture((prevManufacture) => {
        const existingIndex = prevManufacture.findIndex(
          (item) => item.propertyId === propertyId && item.valueTypeId === valueTypeId
        );

        const newFilter = { propertyId, valueTypeId };

        switch (typeName) {
          case "INTEGER":
          case "DOUBLE":
            newFilter.filter = { min: Number(filter.min) || undefined, max: Number(filter.max) || undefined };
            break;
          case "BOOLEAN":
            newFilter.filter = filter === true || filter === false ? filter : undefined;
            break;
          case "STRING":
            newFilter.filter = filter;
            break;
          default:
            console.warn(`Unknown typeName: ${typeName}`);
        }

        const isEmptyFilter = !newFilter.filter || (typeof newFilter.filter === "object" && Object.keys(newFilter.filter).length === 0);

        if (isEmptyFilter) {
          return prevManufacture.filter((_, index) => index !== existingIndex);
        } else if (existingIndex >= 0) {
          return prevManufacture.map((item, index) => index === existingIndex ? { ...item, filter: newFilter.filter } : item);
        } else {
          return [...prevManufacture, newFilter];
        }
      });

      updateSearchParams(propertyId, valueTypeId, true, propertyId, valueTypeId, filter, typeName);
    },
    [updateSearchParams]
  );

  // Fetch products
  const fetchProducts = async ({ pageParam = 0 }) => {
    const response = await api.post("/product/list", {
      search: searchValue || "",
      page: pageParam,
      size: 10,
      categoryId: id,
      districtId: districtId || 0,
      regionId: regionId || 0,
      paymentTypeId: paymentTypeId || 0,
      sellTypeId: sellTypeId || 0,
      ownProducts: false,
      userId: 0,
      price,
      valueFilter: manufacture,
    });

    return {
      data: response.data?.data,
      nextPage: pageParam + 1,
      hasNextPage: response.data?.data.length === 5,
    };
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["product/list", id, searchParams.toString(), manufacture],
    queryFn: fetchProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.hasNextPage ? lastPage.nextPage : undefined,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 2000 && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return {
    data,
    isLoading,
    isFetchingNextPage,
    getFilters,
    manufacture,
    handleUpdate: updateSearchParams,
    setManufacture,
    addPropertyAndFilter,
  };
};

export default useProductFilter;
