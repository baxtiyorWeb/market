import { productOptions } from "../data/data";
export default function useSelectAddCategory() {
  const selectedCategory = (e) => {
    for (let i = 0; i < productOptions.length; i++) {
      const products = productOptions[i];
      products.children.find((item) => {
        if (e === products.title || e === item.title) {
          console.log(`siz ${e} kategoryini tanladingiz`);
        }
      });
    }
  };

  return { selectedCategory };
}
