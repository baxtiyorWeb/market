import { useEffect } from "react";
import ProductAbout from "../components/details/ProductAbout";
import ProductSideMenu from "../components/details/product-side-menu/ProductSideMenu";
import Container from "../shared/Container";

export default function Details() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Container>
      <div className={"flex items-start justify-between"}>
        <div className="mb-32 mt-[40px] h-auto w-[750px] flex-shrink-0 border bg-white px-[30px] pb-[30px]">
          <ProductAbout />
        </div>
        <ProductSideMenu />
      </div>
    </Container>
  );
}
