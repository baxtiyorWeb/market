// Import Swiper styles
import { Image } from "antd";
import { useState } from "react";
export default function ProductImage({ data }) {
  const [sliderIndex, setSliderIndex] = useState(1);

  const plusSlider = (n) => {
    const newIndex = sliderIndex + n;
    if (newIndex > data?.files?.length) {
      setSliderIndex(1);
    } else if (newIndex < 1) {
      setSliderIndex(data?.files?.length);
    } else {
      setSliderIndex(newIndex);
      // Animatsiya davomiyligi (0.5 s)
    }
    // Scroll to the active image
    const activeElement = document.querySelector(".active-img");
    if (activeElement) {
      activeElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  const SliderProduct = () => {
    return (
      <>
        <div className="product-page-img relative">
          <div className="relative">
            <div className="absolute top-[43%]  flex w-full justify-between">
              <button
                onClick={() => plusSlider(1)}
                className="absolute right-0 z-20 ml-3 h-[50px] w-[50px] rounded-full text-[35px] text-slate-200 transition-all duration-200 hover:bg-slate-500/50 hover:text-slate-100"
              >
                {">"}
              </button>

              <button
                onClick={() => plusSlider(-1)}
                className="right-0 z-20 mr-3 h-[50px] w-[50px] rounded-full text-[35px] text-slate-200 transition-all duration-200 hover:bg-slate-500/50 hover:text-slate-100"
              >
                {"<"}
              </button>
            </div>
            <div>
              {data?.files?.map((item, index) => (
                <div
                  key={index}
                  className={`slide-item h-[400px] w-[726px] ${
                    index + 1 === sliderIndex ? "animate-slide" : ""
                  }`}
                  style={{
                    display: index + 1 === sliderIndex ? "flex" : "none",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={`data:image/png;base64,${item.file?.fileBase64}`}
                    loading="lazy"
                    width="100%"
                    height="400px"
                    className="img-product border bg-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="products-slide product-details overflow-hidden rounded-[10px] border">
      <SliderProduct />

      <div className="col-span-1 mb-3 mt-3  grid grid-cols-10 gap-x-52 overflow-x-scroll">
        {data?.files?.map((item, index) => (
          <div
            key={index}
            className={`m-3 ml-10 flex h-[180px] w-[200px] items-center justify-center rounded-[10px] border border-[#C7C7C7] p-3 hover:border-2 hover:border-[#90c049] ${
              index + 1 === sliderIndex && "active-img "
            }`}
            onClick={() => setSliderIndex(index + 1)}
          >
            <img
              src={`data:image/png;base64,${item.file?.fileBase64}`}
              alt=""
              className={`h-[160px] w-[200px] cursor-pointer select-none  object-cover`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
