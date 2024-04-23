import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductAbout from "../components/details/ProductAbout";
import ProductSideMenu from "../components/details/product-side-menu/ProductSideMenu";
import Container from "../shared/Container";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  if (id === null) {
    navigate("/");
  }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Container>
      <div className={"flex justify-between"}>
        <div className="mb-[150px] mt-[56px] h-auto w-[790px] flex-shrink-0 border bg-[#fff] p-[30px]">
          <div className="mb-10"></div>
          <hr className="mb-6" />
          <ProductAbout />
        </div>
        <ProductSideMenu />
      </div>
    </Container>
  );
}
