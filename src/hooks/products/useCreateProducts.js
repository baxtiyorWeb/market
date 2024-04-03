import { useState } from "react";
import api from "../../config/api/api";

const useCreateProducts = () => {
  const [createProduct, setCreateProduct] = useState();
  const createProductData = async (data) => {
    const res = api.post("/products", data);
  };
  return {};
};

export default useCreateProducts;
