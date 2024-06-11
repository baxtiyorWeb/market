import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { message } from "antd";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import api from "../../config/api/api";
import { getDistrict, getPaymentType, getSellType } from "../../exports/api";

const useFilter = () => {
  const [searchParams] = useSearchParams();
  const [manufacture, setManufacture] = useState([]);

  const [saveFilter, setSaveFilter] = useState([]);
  const [reFetch, setRefetch] = useState();
  const [saveLocal, setSaveLocal] = useState([]);

  const [search, setSearch] = useState("");

  const { id } = useParams();

  const searchValue = searchParams.get("search") || "";
  const regionId = searchParams.get("regionId") || "";
  const districtId = searchParams.get("districtId") || "";
  const canAgree = searchParams.get("canAgree") || false;
  const price_min = searchParams.get("price_min") || "";
  const price_max = searchParams.get("price_max") || "";
  const paymentTypeId = searchParams.get("paymentType") || "";
  const sellTypeId = searchParams.get("sellType") || "";
  const filters = JSON.parse(localStorage.getItem("filters"));
  let price;
  let min = Number(price_min);
  let max = Number(price_max);

  const { data: district } = useQuery({
    queryKey: ["district/all", regionId],
    queryFn: async () => await getDistrict(regionId),
    enabled: !!regionId,
  });
  const { data: paymentType } = useQuery({
    queryKey: ["payment-type"],
    queryFn: getPaymentType,
  });
  const { data: sellType } = useQuery({
    queryKey: ["sell-type"],
    queryFn: getSellType,
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
      page: pageParam || 0,
      size: 10,
      categoryId: Number(id) || 0,
      districtId: districtId || 0,
      regionId: regionId || 0,
      paymentTypeId: Number(paymentTypeId) || 0,
      sellTypeId: Number(sellTypeId) || 0,
      ownProducts: false,
      userId: 0,
      price,
      canAgree: Boolean(canAgree),
      valueFilter: manufacture,
    });

    return {
      data: response.data?.data,
      nextPage: pageParam + 1,
      hasNextPage: response.data?.data.length === 10,
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
      paymentTypeId,
    ],
    queryFn: fetchProducts,
    getNextPageParam: (lastPage) => (lastPage.length ? pages.length : false),
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
  };
};

export default useFilter;
