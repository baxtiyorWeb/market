/* eslint-disable react/no-unescaped-entities */
import useProductDetail from "../../hooks/useProductDetail";
import Loading from "../../ui/loading/Loading";
import ProductImage from "./ProductImage";
export default function ProductAbout() {
  const { productDetail, isLoading } = useProductDetail();
  if (isLoading) return <Loading />;
  return (
    <>
      <div className=" w-full ">
        <ProductImage data={productDetail} />
        <div className=""></div>
      </div>
    </>
  );
}
