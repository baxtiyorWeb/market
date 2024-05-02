import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api from "../config/api/api";

const useProductDetail = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["product", id],
    queryFn: () => api.get(`/product/${id}`),
  });

  if (error) return "error: " + error;
  const productDetail = data?.data?.data;

  return { productDetail, isLoading };
};

export default useProductDetail;
