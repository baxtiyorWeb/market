import { Link } from "react-router-dom";
import "./Product.css";

import { ArrowRight } from "lucide-react";

const Products = () => {
  return (
    <div className="h-full w-full">
      <div className="mb-5  flex items-center justify-between">
        <h1 className="font-poppins text-[28px] font-medium not-italic leading-normal tracking-[-0.66px] xs:text-lg">
          Top Mahsulotlar
        </h1>
        <div className="flex w-max items-center justify-center">
          <div className="some-categories flex items-center justify-center">
            <Link className="mr-3 border-b-2 border-bgColor p-2 text-lg font-normal sm:text-sm md:text-sm lg:text-lg xs:text-sm">
              Barcha Mahsulotlar{" "}
            </Link>
            <div className="sm:hidden md:hidden lg:hidden xs:hidden">
              <Link className="mr-3 border-b-2 border-transparent p-2 text-base font-normal">
                Smartfonlar
              </Link>
              <Link className="b-2 mr-3 border-b-2 border-transparent text-base font-normal">
                Noutbuklar
              </Link>
              <Link className="mr-3 border-b-2 border-transparent p-2 text-base font-normal">
                Stol kompyuterlar
              </Link>
            </div>
          </div>
          <Link className="flex items-center justify-center text-lg font-light text-bgColor sm:hidden md:hidden xs:hidden">
            Barcha categoriyani ko&apos;rish
            <span>
              <ArrowRight className="mx-3" />
            </span>
          </Link>
        </div>
      </div>
      <div
        className={`response_product_category grid grid-cols-5 gap-1 sm:grid sm:w-full sm:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-4  xl:grid-cols-4  xmd:grid xmd:grid-cols-3 xs:grid xs:grid-cols-2 xs:gap-1 xs_2:grid-cols-2 2xs:grid 2xs:grid-cols-2 `}
      >
        {/* {isLoading ? (
          <SkeletonLoading />
        ) : (
          data?.pages?.map((page, i) =>
            page.data?.map((item, index) => (
              <ItemCard
                index={index}
                item={item}
                key={index}
                i={i}
                handleClick={(e) => handleClick(e, item)}
              />
            )),
          )
        )} */}
      </div>
      <div className="mb-[50px] mt-[50px] flex flex-col items-center justify-center"></div>
    </div>
  );
};

export default Products;
