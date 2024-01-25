import { useState } from "react";
import { productOptions } from "../data/data";

export default function useSelectAddCategory() {
  const [value, setValue] = useState([]);
  const selectedCategory = (e) => {
    for (let i = 0; i < productOptions.length; i++) {
      const products = productOptions[i];
      products.children.find((item) => {
        if (e === products.title || e === item.title) {
          setValue(e);
        }
      });
    }
  };

  return { selectedCategory, value };
}
