import { useInfiniteQuery } from "react-query";
import api from "../../config/api/api";

const useInfiniteScrollQuery = ({
  key = "infinite-query",
  url = "/",
  params = {},
  initialPageParam = 0,
  showSuccessMsg = false,
  hideErrorMsg = false,
  enabled = true,
  options = {
    onSuccess: (data) => {
      if (showSuccessMsg) {
        return data;
      }
    },
    onError: (error) => {
      if (!hideErrorMsg) {
        return error;
      }
    },
  },
}) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    refetch,
    isLoading,
    isFetching,
    isError,
    error,
  } = useInfiniteQuery(
    key,
    ({ pageParam = initialPageParam }) =>
      api
        .get(url, {
          params: { ...params, page: pageParam },
        })
        .then((response) => response?.data?.content)
        .catch((error) => {
          console.error("Error fetching data:", error);
          throw error;
        }),

    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length ? allPages.length : undefined;
      },
      enabled,
      ...options,
    },
  );

  return {
    data,
    fetchNextPage,
    hasNextPage,
    refetch,
    isLoading,
    isFetching,
    isError,
    error,
  };
};

export default useInfiniteScrollQuery;
