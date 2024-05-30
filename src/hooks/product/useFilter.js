import { useInfiniteQuery } from "@tanstack/react-query";
import { message } from "antd";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import api from "../../config/api/api";

const useFilter = () => {
  const [searchParams] = useSearchParams();
  const [manufacture, setManufacture] = useState([]);

  const [saveFilter, setSaveFilter] = useState([]);
  const [reFetch, setRefetch] = useState();
  const [saveLocal, setSaveLocal] = useState([]);

  const [search, setSearch] = useState("");

  const { id } = useParams();

  const searchValue = searchParams.get("search") || "";
  const regionId = searchParams.get("regionId");
  const filters = JSON.parse(localStorage.getItem("filters"));
  const fetchProducts = async ({ pageParam = 0 }) => {
    const response = await api.post("/product/list", {
      search: searchValue || "",
      page: pageParam,
      size: 10,
      categoryId: id || 0,
      districtId: 0,
      regionId: regionId || 0,
      paymentTypeId: 0,
      sellTypeId: 0,
      ownProducts: false,
      userId: 0,
      valueFilter: manufacture,
    });

    return {
      data: response.data?.data?.content,
      nextPage: pageParam + 1,
      hasNextPage: response.data?.data?.content.length === 10,
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
      searchParams.get("regionId"),
      searchParams.get("search"),
      searchParams.get("propertyId"),
      searchParams.toString(""),

      saveFilter,
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
  };
};

export default useFilter;
