import { useState } from "react";

const useAddFavourite = () => {
  const [saveProduct, setSaveProduct] = useState([]);

  const [update, setUpdate] = useState([]);

  const saveLocalProductFavourite = (
    id,
    img,
    name,
    price,
    sellType,
    paymentType,
    viewCount,
    regionName,
    canAgree,
  ) => {
    // Create a product item object with the provided parameters
    const productItem = {
      id,
      img,
      name,
      price,
      sellType,
      paymentType,
      viewCount,
      regionName,
      canAgree,
    };

    // Retrieve the existing products from local storage or initialize an empty array if none exist
    if (localStorage.getItem("product") == null) {
      let existingProducts = JSON.parse(localStorage.getItem("product")) || [];

      // Check if the product already exists in the local storage
      const productExists = existingProducts.some((product) => product === id);

      if (productExists) {
        // Local storage dan barcha mahsulotlarni olish
        let products = JSON.parse(localStorage.getItem("product")) || [];

        // Berilgan id ga ega mahsulotni topish va o'chirish
        const updatedProducts = products.filter((product) => product !== id);

        // Yangilangan mahsulotlar ro'yxatini local storage ga qaytadan saqlash
        localStorage.setItem("product", JSON.stringify(updatedProducts));
        setUpdate(updatedProducts);
      } else {
        // Add the new product to the existing products array
        existingProducts.push(productItem.id);

        // Update the local storage with the new list of products
        localStorage.setItem("product", JSON.stringify(existingProducts));

        // Update the saveProduct state if required
        setSaveProduct([...saveProduct, existingProducts]);
      }
      savedLocal();
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
    saveProduct,
    savedLocal,
  };
};

export default useAddFavourite;
