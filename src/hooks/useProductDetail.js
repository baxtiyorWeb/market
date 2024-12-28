import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import api from "../config/api/api";

const useProductDetail = () => {
  const { id } = useParams();

  const getProductWithById = async () => {
    const res = await api.get(`/product/${id}`);
    return res.data.data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["product", id],
    queryFn: getProductWithById,
  });

  if (error) return "error: " + error;
  const productDetail = data;

  return { productDetail, isLoading };
};

export default useProductDetail;
