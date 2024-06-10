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
  const price_min = searchParams.get("price_min") || "";
  const price_max = searchParams.get("price_max") || "";
  const filters = JSON.parse(localStorage.getItem("filters"));
  const fetchProducts = async ({ pageParam = 0 }) => {
    let price;
    let min = Number(price_min);
    let max = Number(price_max);

    if (min || max) {
      if (min) {
        price = { min };
      }
      if (max) {
        price = { max };
      }
      if (min && max) {
        price = { min, max };
      } else {
        if (min || max) {
          price = { min } || { max } || { min, max };
        }
      }
    } else {
      if (price == {}) {
        price = null;
      }
    }

    if (min === 0) {
      searchParams.delete("price_min");
    } else {
      searchParams.delete("price_max");
    }

    console.log(price);
    const response = await api.post("/product/list", {
      search: searchValue || "",
      page: pageParam || 0,
      size: 10,
      categoryId: id || 0,
      districtId: 0,
      regionId: 0,
      paymentTypeId: 0,
      sellTypeId: 0,
      ownProducts: false,
      userId: 0,
      price,
      canAgree: false,
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
