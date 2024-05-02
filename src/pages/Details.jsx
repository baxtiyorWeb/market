import { useEffect } from "react";
import ProductAbout from "../components/details/ProductAbout";
import ProductSideMenu from "../components/details/product-side-menu/ProductSideMenu";
import useProductDetail from "../hooks/useProductDetail";
import Container from "../shared/Container";
import Loading from "../ui/loading/Loading";
import ProductDetailBreadCrumbs from "./../ui/breadcrumbs/ProductDetailBreadCrumbs";

export default function Details() {
  const { isLoading, productDetail } = useProductDetail();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Container>
      <ProductDetailBreadCrumbs data={productDetail} />
      <div className={"flex items-start justify-between"}>
        <div className="mb-32 mt-[40px] h-auto w-[680px] flex-shrink-0 border bg-white px-[30px] pb-[30px]">
          <ProductAbout />
        </div>
        <ProductSideMenu />
      </div>
    </Container>
  );
}
