import { useQuery } from "react-query";
import { getCategories } from "../exports/api";

const useCategories = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: getCategories,
  });
  const categories = data?.data;
  return { categories, isLoading };
};

export default useCategories;
