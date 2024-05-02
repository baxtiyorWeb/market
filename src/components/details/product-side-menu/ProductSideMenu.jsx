import React from "react";
import ProductTabs from "../product-tab/ProductTabs";

const ProductSideMenu = ({ productDetail }) => {
  return (
    <div className="mb-10">
      <ProductTabs productDetail={productDetail} />
    </div>
  );
};

export default ProductSideMenu;
