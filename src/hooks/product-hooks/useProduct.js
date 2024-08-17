import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import api from "../../config/api/api";
import useFilter from "../product/useFilter";

const useProduct = () => {
  const { manufacture } = useFilter();
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
      price: null,
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
      queryKey: ["product/list"],
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
  return { data, isLoading, isFetchingNextPage };
};

export default useProduct;
