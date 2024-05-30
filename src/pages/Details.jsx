import { useEffect, useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import ProductAbout from "../components/details/ProductAbout";
import ProductSideMenu from "../components/details/product-side-menu/ProductSideMenu";
import useProductDetail from "../hooks/useProductDetail";
import Container from "../shared/Container";
import Loading from "../ui/loading/Loading";
import ProductDetailBreadCrumbs from "./../ui/breadcrumbs/ProductDetailBreadCrumbs";

export default function Details() {
  const { isLoading, productDetail } = useProductDetail();
  const ref = useRef();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  function scrollRefCurrent() {
    if (!ref.current) return;
    if (window.scrollY >= window.innerHeight) {
      ref.current.style.display = "none";
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", (e) => scrollRefCurrent(e));
  }, []);

  const scrollToBottom = () => {
    window.scroll({ top: window.innerHeight, left: 0, behavior: "smooth" });
    ref.current.style.display = "none";
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Container>
      <ProductDetailBreadCrumbs data={productDetail} />
      <div className={"mb-10 flex items-start justify-between"}>
        <div className="mt-5 h-auto w-[680px] flex-shrink-0 bg-white px-[30px] py-5 pb-[30px]">
          <ProductAbout productDetail={productDetail} />
          <h1 className="my-10 text-2xl font-medium">Xusuiyatlari</h1>
          <div className="mb-10 mt-3 flex w-full flex-col justify-center  gap-y-3 rounded-xl bg-whiteTextColor p-2">
            {productDetail?.propertyValues?.map((item, index) => (
              <div
                className=" inline-flex w-full items-center justify-between rounded-md bg-slate-500/10 px-5 py-3"
                key={index}
              >
                <span className=" text-sm">{item?.propertyDto?.name}</span>
                <span className=" text-sm font-medium text-black">
                  {item?.stringValue || item?.intValue || item?.doubleValue}
                </span>
              </div>
            ))}
          </div>
        </div>
        <ProductSideMenu productDetail={productDetail} />
        <div
          className="fixed bottom-0 left-[50%] flex  h-[50px] w-[50px] animate-bounce cursor-pointer items-center justify-center rounded-full border bg-gray-500/40 text-whiteTextColor "
          ref={ref}
          onClick={scrollToBottom}
        >
          <FaArrowDown />
        </div>
      </div>
    </Container>
  );
}
