import { useEffect, useState } from "react";
import api from "../../config/api/api";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setisLoading] = useState();
  const getCategories = async () => {
    try {
      setisLoading(true);
      const res = await api.get("/category/all");
      console.log(res.data?.data);
      setCategories(res.data?.data);
    } catch (error) {
      throw new Error(`Error: ${error}`);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return { categories, isLoading };
};

export default useCategories;
