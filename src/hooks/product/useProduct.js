//  product main page for react query api get

import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDebouncedCallback } from "use-debounce";
import api from "../../config/api/api";

const useProduct = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView();
  const getProducts = async ({ page }) => {
    page;
    const res = await api.get(`/product/list?page=${page}&size=10`);
    return res.data?.data?.content;
  };

  const handleDebounced = useDebouncedCallback(() => {
    if (
      !isLoading &&
      hasMore &&
      window.innerHeight + document.documentElement.scrollTop - 350 <
        window.innerHeight + document.documentElement.offsetHeight
    ) {
    }
  });

  const {
    data: product,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["product"],
    queryFn: getProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  product;

  return { product, hasMore, isFetchingNextPage };
};

export default useProduct;
