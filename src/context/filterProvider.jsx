/* eslint-disable react/prop-types */
import { message } from "antd";
import { createContext, useContext } from "react";
import { useInfiniteQuery } from "react-query";
import api from "../config/api/api";
export const FilterContext = createContext([]);

const FilterProvider = ({ children }) => {
  const fetchProducts = async ({ pageParam = 0 }) => {
    const response = await api.post("/product/list", {
      search: "",
      page: pageParam,
      size: 5,
      categoryId: 0,
      districtId: 0,
      regionId: 0,
      paymentTypeId: 0,
      sellTypeId: 0,
      ownProducts: false,
      userId: 0,
      price: 0,
      valueFilter: 0,
    });
    return {
      data: response.data?.data,
      nextPage: pageParam + 1,
      hasNextPage: response.data?.data.length === 5,
    };
  };

  const { data } = useInfiniteQuery({
    queryKey: ["product/list"],
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

  return <FilterContext.Provider>{children}</FilterContext.Provider>;
};

export const useFilterProduct = () => {
  return useContext(FilterContext);
};

export default FilterProvider;
