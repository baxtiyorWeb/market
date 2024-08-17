import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import api from "../../config/api/api";
import useFilter from "../product/useFilter";

const useProductFilter = () => {
  const { manufacture } = useFilter();
  const [searchParams] = useSearchParams();
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
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["product/list", id, searchParams.toString()],
      queryFn: fetchProducts,
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.hasNextPage ? lastPage.nextPage : undefined;
      },
      onError: () => {
        message.error("Mahsulot ro'yxatini  olishda xato");
      },
    });
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 2000 &&
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
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, data]);
  console.log(data);
  return { data, isLoading, isFetchingNextPage };
};

export default useProductFilter;
