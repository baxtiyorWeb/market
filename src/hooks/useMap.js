import { useState } from "react";
import useSelectAddCategory from "./useSelectAddCategory";

export default function useMap() {
  const [value, setValue] = useState([]);
  const { selectedCategory } = useSelectAddCategory();
  const onChange = (e) => {
    console.log(e);
    setValue(e);
    selectedCategory(e);
  };
  return {
    value,
    onChange,
  };
}
