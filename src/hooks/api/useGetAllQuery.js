import { useQuery } from "react-query";
import api from "../../config/api/api";

const useGetAllQuery = ({
  key = "get-all",
  url = "/",
  params = {},
  showSuccessMsg = false,
  hideErrorMsg = false,
  enabled = true,
  options = {
    onSuccess: () => {
      if (showSuccessMsg) {
      }
    },
    onError: (data) => {
      if (!hideErrorMsg) {
      }
    },
  },
}) => {
  const { isLoading, isError, data, error, isFetching, refetch } = useQuery(
    key,
    () => api.get(url, params),
    {
      ...options,
      enabled,
    },
  );

  return {
    isLoading,
    isError,
    data,
    error,
    isFetching,
    refetch,
  };
};

export default useGetAllQuery;
