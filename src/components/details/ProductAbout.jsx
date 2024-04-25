/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api from "../../config/api/api";
import ProductDetailBreadCrumbs from "../../ui/breadcrumbs/ProductDetailBreadCrumbs";
import Loading from "./../../ui/loading/Loading";
import ProductImage from "./ProductImage";
import ProductTabs from "./product-tab/ProductTabs";
export default function ProductAbout() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["product", id],
    queryFn: () => api.get(`/product/${id}`),
  });

  if (error) return "error: " + error;
  if (isLoading) return <Loading />;
  return (
    <>
      <ProductDetailBreadCrumbs data={data.data?.data} />
      <div className="w-full">
        <div className="m"></div>
        <ProductImage data={data?.data?.data} />
        <div className="my-10">
          <ProductTabs data={data} />
        </div>
      </div>
    </>
  );
}
