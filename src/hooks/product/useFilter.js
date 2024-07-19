import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { message } from "antd";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import api from "../../config/api/api";
import {
  getDistrictById,
  getPaymentTypes,
  getSellTypes,
} from "../../exports/api";

const useFilter = () => {
  const [searchParams] = useSearchParams();
  const [manufacture, setManufacture] = useState([]);
  const [filterValue, setFilterValue] = useState([]);

  const [saveFilter, setSaveFilter] = useState([]);
  const [reFetch, setRefetch] = useState();
  const [saveLocal, setSaveLocal] = useState([]);

  const { id } = useParams();

  const searchValue = searchParams.get("search") || "";
  const regionId = searchParams.get("regionId") || "";
  const districtId = searchParams.get("districtId") || "";
  const price_min = searchParams.get("price_min") || "";
  const price_max = searchParams.get("price_max") || "";
  const paymentTypeId = searchParams.get("paymentType") || "";
  const sellTypeId = searchParams.get("sellType") || "";
  let price;
  let min = Number(price_min);
  let max = Number(price_max);

  const { data: district } = useQuery({
    queryKey: ["district/all", regionId],
    queryFn: async () => await getDistrictById(regionId),
    enabled: !!regionId,
  });
  const { data: paymentType } = useQuery({
    queryKey: ["payment-type"],
    queryFn: getPaymentTypes,
  });
  const { data: sellType } = useQuery({
    queryKey: ["sell-type"],
    queryFn: getSellTypes,
  });

  const fetchProducts = async ({ pageParam = 0 }) => {
    if (min && max) {
      price = { min, max };
    } else if (min) {
      price = { min };
    } else if (max) {
      price = { max };
    } else {
      price = null;
    }

    if (min === 0) {
      searchParams.delete("price_min");
    } else {
      searchParams.delete("price_max");
    }

    const response = await api.post("/product/list", {
      search: searchValue || "",
      page: pageParam,
      size: 5,
      categoryId: Number(id) || 0,
      districtId: districtId || 0,
      regionId: regionId || 0,
      paymentTypeId: Number(paymentTypeId) || 0,
      sellTypeId: Number(sellTypeId) || 0,
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

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: [
      "product/list",
      id,
      searchParams.toString(""),
      districtId,
      regionId,
      saveFilter,
      sellTypeId,
      filterValue,

      paymentTypeId,
    ],
    queryFn: fetchProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasNextPage ? lastPage.nextPage : undefined;
    },
    onError: () => {
      message.error("Mahsulot ro'yxatini  olishda xato");
    },
  });

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
    setSaveFilter,
    saveFilter,
    setRefetch,
    setManufacture,
    manufacture,
    setSaveLocal,
    saveLocal,
    district,
    paymentType,
    sellType,
    setFilterValue,
  };
};

export default useFilter;
