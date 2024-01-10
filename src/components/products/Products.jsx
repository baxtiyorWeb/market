import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { products } from "../../data/data";
const Products = () => {
  return (
    <div className="mt-[100px] h-full w-full ">
      <div>
        <h1 className="mb-[20px] font-poppins text-[33px] font-medium not-italic leading-normal tracking-[-0.66px] text-[#130F1E]">
          top mahsulotlar
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-[29px] sm:grid-cols-2 md:grid md:grid-cols-4">
        {products.map((item) => (
          <div
            className="h-[336px] w-[270px] flex-shrink-0 overflow-hidden  rounded-md shadow-md"
            key={item.productId}
          >
            <div className="h-[194px] w-[100%] overflow-hidden">
              <Link to={`/detail/${item.productId}`}>
                {/* <img
                  src={item.productImg}
                  
                  alt=""
                /> */}
                <LazyLoadImage
                  className="h-full w-full cursor-pointer border"
                  alt={item.productImg}
                  src={item.productImg} // use normal <img> attributes as props
                />
              </Link>
            </div>
            <div className="mt-4 px-[18px]">
              <span className="text font-poppins text-[16px] font-medium not-italic leading-[120%] tracking-[-0.32px] text-[#130F1E]">
                {item.productTitle}
              </span>
              <p className="text text-[16px] font-normal not-italic leading-[120%] tracking-[-0.32px] text-[#130F1E]">
                {item.productDescription}
              </p>
              <div className="mt-[12px] flex items-center  justify-start">
                <span className="text font-poppins text-[19px] font-semibold not-italic leading-[100%] text-[#130F1E]">
                  {item.productPrice}
                </span>{" "}
                <p className="ml-1">so{"'"}m</p>
              </div>

              <div className="mt-3">
                <hr className="border border-slate-400" />
                <div className="text mt-[13px] flex items-center justify-between font-poppins text-[11px] font-normal leading-[100%] tracking-[-0.22px] text-[#959EA7]">
                  <span>{item.productLocation}</span>
                  <span>{item.productTimeStamps}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-[100px] mt-[50px] flex items-center justify-center">
        <button className="flex h-[50px] w-[328px] flex-shrink-0 items-center justify-center rounded-[5px] bg-[#1D828E] text-[#fff] ">
          <span className="font-medium not-italic leading-[100%] tracking-[-0.30px] ">
            Ko’proq ko’rsatish
          </span>
        </button>
      </div>
    </div>
  );
};

export default Products;
