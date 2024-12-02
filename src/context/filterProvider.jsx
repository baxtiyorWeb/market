/* eslint-disable react/prop-types */
import { message } from "antd";
import { createContext, useContext, useEffect, useState } from "react";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import api from "../config/api/api";
import { useSearchParams } from "react-router-dom";
import { Cookies } from "react-cookie";
import { useDebounce } from "use-debounce";
import { throttle } from "lodash";

export const FilterContext = createContext([]);

const FilterProvider = ({ children }) => {
  const [manufacture, setManufacture] = useState([]);
  const searchParams = useSearchParams();
  const [debouncedManufacture] = useDebounce(manufacture, 500);
  const queryClient = useQueryClient();
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
      categoryId: categoryId || 0,
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

  const getQueryDependencies = () => [
    searchValue,
    regionId,
    districtId,
    price_min,
    price_max,
    paymentTypeId,
    sellTypeId,
    categoryId,
    manufacture,
  ];

  const queryDependencies = getQueryDependencies();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["product/list", ...queryDependencies],
    queryFn: fetchProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.hasNextPage ? lastPage.nextPage : undefined;
    },
    onError: (error) => {
      message.error(`Mahsulot ro'yxatini olishda xato: ${error.message}`);
    },
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  useEffect(() => {
    if (hasNextPage && data?.pages?.length > 0) {
      const nextPage = data.pages[data.pages.length - 1]?.nextPage;
      if (nextPage) {
        queryClient.prefetchQuery(["product/list", nextPage], () =>
          fetchProducts({ pageParam: nextPage }),
        );
      }
    }
  }, [hasNextPage, queryClient, data]);

  useEffect(() => {
    const handleScroll = throttle(
      () => {
        if (
          window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 500 &&
          hasNextPage &&
          !isFetchingNextPage
        ) {
          fetchNextPage();
        }
      },
      300,
      { leading: false, trailing: true },
    );

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  useEffect(() => {
    if (debouncedManufacture.length > 0) {
      refetch();
    }
  }, [debouncedManufacture, refetch]);

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

export const useFilterProduct = () => {
  return useContext(FilterContext);
};

export default FilterProvider;
