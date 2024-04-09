import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../exports/API";

const useCategories = () => {
  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: getCategories,
  });
  const categories = data?.data;
  return { categories };
};

export default useCategories;
