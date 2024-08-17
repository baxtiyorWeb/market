import { useQuery } from "@tanstack/react-query";
import { getCategoriesRootListSticky } from "../../exports/api";

const useCategory = () => {
  // Ma'lumotni olish uchun useQuery
  const { data, isLoading } = useQuery({
    queryKey: ["category/list?page=0&size=15&parentId="],
    queryFn: getCategoriesRootListSticky,
  });

  return { data, isLoading };
};

export default useCategory;
