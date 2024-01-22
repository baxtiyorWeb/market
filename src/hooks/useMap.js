import useSelectAddCategory from "./useSelectAddCategory";

export default function useMap() {
  const { selectedCategory } = useSelectAddCategory();
  const onChange = (e) => {
    selectedCategory(e);
  };
  return {
    onChange,
  };
}
