import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../exports/API";

const useCategories = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: getCategories,
  });
  const categories = data?.data;
  console.log(categories);
  return { categories, isLoading };
};

export default useCategories;
