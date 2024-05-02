/* eslint-disable react/no-unescaped-entities */
import ProductImage from "./ProductImage";
export default function ProductAbout({ productDetail }) {
  return (
    <>
      <div className=" w-full ">
        <ProductImage productDetail={productDetail} />
        <div className=""></div>
      </div>
    </>
  );
}
