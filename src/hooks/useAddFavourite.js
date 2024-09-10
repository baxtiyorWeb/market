import { useState } from "react";

const useAddFavourite = () => {
  const [saveProduct, setSaveProduct] = useState([]);
  const [update, setUpdate] = useState([]);

  const saveLocalProductFavourite = (id) => {
    const productItem = id;

    // Existing productsni olish yoki bo'sh array yaratish
    let existingProducts = JSON.parse(localStorage.getItem("product")) || [];

    // Product mavjudligini tekshirish
    const productExists = existingProducts.some((product) => product === id);

    if (productExists) {
      // Mahsulotni o'chirish
      const updatedProducts = existingProducts.filter(
        (product) => product !== id,
      );

      localStorage.setItem("product", JSON.stringify(updatedProducts));
      setUpdate(updatedProducts);
    } else {
      // Mahsulotni qo'shish

      existingProducts.push(productItem);

      localStorage.setItem("product", JSON.stringify(existingProducts));
      setSaveProduct([...saveProduct, productItem]);
    }
  };

  const savedLocal = () => {
    let existingProducts = JSON.parse(localStorage.getItem("product")) || [];
    return existingProducts.length;
  };

  return {
    saveLocalProductFavourite,
    update,
    saveProduct,
    savedLocal,
  };
};

export default useAddFavourite;
