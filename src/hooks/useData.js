import { useState } from "react";
import api from "../config/api/api";
export default function useData() {
  const [getCategory, setGetCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getCategoryData = async () => {
    try {
      setIsLoading(true);
      const data = await api
        .get("/category/all")
        .then((data) => setGetCategory(data.data));

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return { getCategoryData, getCategory };
}
