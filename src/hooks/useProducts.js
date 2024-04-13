import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import api from "../config/api/api";

const useProducts = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(30);
  const { isLoading, error, data } = useQuery({
    queryKey: ["product", page],
    queryFn: () => api.get(`/product/list?page=${page}&size=${size}`),
    keepPreviousData: true,
  });
  return { data, isLoading, error, setPage, page, setSize, size };
};

export default useProducts;
