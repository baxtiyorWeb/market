/* eslint-disable react/prop-types */
import { message } from "antd";
import { createContext, useContext, useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import api from "../config/api/api";
import { useSearchParams } from "react-router-dom";
import { Cookies } from "react-cookie";

export const FilterContext = createContext([]);

const FilterProvider = ({ children }) => {
  const [manufacture, setManufacture] = useState([]);
  const searchParams = useSearchParams();

  const searchValue = searchParams[0].get("search") || "";
  const regionId = searchParams[0].get("regionId") || "";
  const districtId = searchParams[0].get("districtId") || "";
  const price_min = searchParams[0].get("price_min") || "";
  const price_max = searchParams[0].get("price_max") || "";
  const paymentTypeId = searchParams[0].get("paymentType") || "";
  const sellTypeId = searchParams[0].get("sellType") || "";

  const price =
    price_min || price_max
      ? { min: +price_min || 0, max: +price_max || 0 }
      : null;

      const setCookieId = new Cookies();
      const categoryId = setCookieId.get("cateoryId");
  const fetchProducts = async ({ pageParam = 0 }) => {
    const response = await api.post("/product/list", {
      search: searchValue,
      page: pageParam,
      size: 5,
      categoryId: categoryId,
      districtId: districtId,
      regionId: regionId,
      paymentTypeId: paymentTypeId,
      sellTypeId: sellTypeId,
      ownProducts: false,
      userId: 0,
      price: price,
      valueFilter: manufacture,
    });
    return {
      data: response.data?.data,
      nextPage: pageParam + 1,
      hasNextPage: response.data?.data.length === 5,
    };
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["product/list", manufacture, searchParams.toString(), categoryId], // Add manufacture as a dependency
    queryFn: fetchProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.hasNextPage ? lastPage.nextPage : undefined;
    },
    onError: () => {
      message.error("Mahsulot ro'yxatini olishda xato");
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 500 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  // Refetch whenever manufacture changes
  useEffect(() => {
    if (manufacture.length > 0) {
      refetch();
    }
  }, [manufacture, refetch]);

  useEffect(() => {
    console.log("API response:", data);
  }, [data]);
  return (
    <FilterContext.Provider
      value={{
        manufacture,
        setManufacture,
        data,
        isLoading,
        isFetchingNextPage,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFilterProduct = () => {
  return useContext(FilterContext);
};

export default FilterProvider;
