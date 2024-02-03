import { FaEye, FaHeart } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { products } from "../../data/data";
import { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const getProducts = async () => {
    await fetch("http://localhost:3004/details")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    let promise = getProducts();
  }, []);
  return (
    <div className="mt-[40px] h-full w-full">
      <div>
        <h1 className="mb-[20px] font-poppins text-[28px] font-medium not-italic leading-normal tracking-[-0.66px] text-[#130F1E]">
          top mahsulotlar
        </h1>
      </div>
      <div className="response_product_category grid grid-cols-4 gap-[29px]  ">
        {data.map((item, index) => (
          <div
            className="h-[400px] w-[270px] flex-shrink-0 overflow-hidden  rounded-md shadow-md"
            key={index}
          >
            <div className="relative h-[194px] w-[100%] overflow-hidden">
              <Carousel
                autoFocus
                transitionTime={300}
                infiniteLoop
                swipeable
                showThumbs={false}
                showIndicators={true}
                showStatus={false}
                className="h-[194px] w-full  select-none"
              >
                {item.productImg.map((image, index) => (
                  <div
                    className="cart-slider flex h-full w-full items-center justify-center border"
                    key={index}
                  >
                    <Link to={`/details/${item.id}`} key={index}>
                      <div className="h-full w-full">
                        <LazyLoadImage
                          alt={"avatar"}
                          src={image}
                          effect="opacity"
                          width={"100%"}
                          delayTime={1500}
                          loading="lazy"
                          className="h-[194px]"
                        />
                      </div>
                    </Link>
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="mt-4 px-[18px]">
              <span className="text line-clamp-1 font-poppins text-[16px] font-medium not-italic leading-[120%] tracking-[-0.32px] text-[#130F1E]">
                {item.productTitle}
              </span>
              <p className="text line-clamp-1 text-[16px] font-normal not-italic leading-[120%] tracking-[-0.32px] text-[#130F1E]">
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
                <div className="text mt-[20px] flex items-center justify-between font-poppins text-[11px] font-normal leading-[100%] tracking-[-0.22px] text-[#959EA7]">
                  <span className="flex items-center justify-center">
                    <FaEye className="mr-3 text-[16px]" />
                    {item.productView}
                  </span>
                  <span>
                    <FaHeart className="cursor-pointer text-[18px] hover:text-red-500" />
                  </span>
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
