import { useMutation } from "@tanstack/react-query";
import { createCategories } from "../exports/API";
const useProducts = () => {
  const { mutate } = useMutation({
    mutationKey: ["products"],
    mutationFn: (product) => {
      return createCategories(product);
    },
  });
  return { mutate };
};

export default useProducts;
