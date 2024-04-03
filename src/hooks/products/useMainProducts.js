import { message } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "./../../config/api/api";
const useMainProducts = () => {
  const { id } = useParams();
  const [mainProductsgetList, setMainProductsgetList] = useState([]);
  const [productgetWithId, setproductgetWithId] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getProductgetList = async () => {
    try {
      setIsLoading(true);
      const res = await api.get("/product/list?page=0&size=10");
      setMainProductsgetList(res.data.data.content);
    } catch (error) {
      throw new Error(`Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };
  const productgetId = async () => {
    try {
      setIsLoading(true);
      const res = await api.get(`/product/${id}`);
      setproductgetWithId(res.data.data);
    } catch (error) {
      throw new Error(`Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const createProduct = async (product) => {
    try {
      setIsLoading(true);
      const res = await api.post("/products", { product });

      if (res.status === 200) {
        message.success("created form");
      } else {
        message.error("eror");
      }
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductgetList();
    productgetId();
  }, []);

  return { mainProductsgetList, isLoading, productgetWithId, createProduct };
};

export default useMainProducts;
