// Import Swiper styles
import { useEffect, useRef, useState } from "react";
import { MdFullscreen } from "react-icons/md";
import useToggle from "../../hooks/useToggle";

export default function ProductImage({ data, isLoading }) {
  const [sliderIndex, setSliderIndex] = useState(1);
  const [width, setWidth] = useState(0);
  const [start, setStart] = useState(0);
  const [change, setChange] = useState(0);
  const { handleCloseLocationMenu, open, hideLocationMenu, showLocationMenu } =
    useToggle();

  const plusSlider = (n) => {
    setSliderIndex((prev) => prev + n);
    slideShow(sliderIndex + n);
  };

  useEffect(() => {
    if (!sliderRef.current) return;
    const scrollWidth = sliderRef.current.scrollWidth;
    const childrenElementCount = sliderRef.current.childElementCount;
    const width = scrollWidth / childrenElementCount;
    setWidth(width);
    console.log({ scrollWidth, childrenElementCount, width });
  }, []);

  const slideShow = (n) => {
    if (n > data.productImg.length) {
      setSliderIndex(1);
      console.log(n);
    }
    if (n < 1) {
      setSliderIndex(data.productImg.length);
    }
  };

  const sliderRef = useRef();

  const dragStart = (e) => {
    setStart(e.clientX);
  };
  const dragOver = (e) => {
    let touch = e.clientX;
    setChange(start - touch);
  };
  const dragEnd = (e) => {
    if (change > 0) {
      sliderRef.current.scrollLeft += width;
      console.log(width);
    }
  };

  const fullScreenMode = () => {};

  const FullScreenModal = () => {
    return (
      <>
        {open && (
          <div className="fixed  left-0 top-0 z-[999999] flex justify-center items-center h-full w-full bg-white">
            <div className="flex h-[80vh] w-[80%] items-center justify-center ">
              <div className="h-full w-full overflow-scroll scroll-m-5 ">
                {data.productImg?.map((item, index) => (
                  <div className={`images-data h-full w-full`}>
                    <img src={item} className="h-[60%] " alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  const SliderProduct = () => {
    return (
      <>
        <div className="product-page-img">
          <div className="relative">
            <div className="absolute top-[43%] flex w-full justify-between">
              <button
                onClick={() => plusSlider(-1)}
                className="ml-3 h-[50px] w-[50px] rounded-full text-[35px] text-slate-200 transition-all duration-200 hover:bg-slate-500/50 hover:text-slate-100"
              >
                {"<"}
              </button>

              <button
                onClick={() => plusSlider(1)}
                className="mr-3 h-[50px] w-[50px] rounded-full text-[35px] text-slate-200 transition-all duration-200 hover:bg-slate-500/50 hover:text-slate-100"
              >
                {">"}
              </button>
            </div>
            {data.productImg?.map((item, index) => (
              <div
                key={index}
                className="h-[400px] w-full"
                style={{
                  display: index + 1 === sliderIndex ? `flex` : `none`,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={item}
                  alt=""
                  className={"h-[400px] w-[100%] object-contain "}
                />
                <div className="absolute bottom-0 right-0 h-[100px] text-5xl">
                  <i className="p-2 ">
                    <FullScreenModal />
                    <MdFullscreen
                      onClick={showLocationMenu}
                      className="cursor-pointer rounded-md p-2 hover:bg-slate-500/50 hover:text-slate-100"
                    />
                  </i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="products-slide product-details overflow-hidden rounded-[10px] border">
      <SliderProduct />

      <div
        draggable={true}
        onDragStart={dragStart}
        onDragOver={dragOver}
        onDragEnd={dragEnd}
        ref={sliderRef}
        className="slide-scroll slider-imgs mb-3 mt-3 flex  items-center justify-center"
      >
        {data.productImg?.map((item, index) => (
          <div
            key={index}
            className={`m-3 flex h-[121px] w-[153px]  items-center justify-center rounded-[10px] border border-[#C7C7C7]  p-3 px-3 py-3 hover:border-2 hover:border-[#90c049] ${
              index + 1 === sliderIndex && "active-img "
            }`}
            onClick={() => setSliderIndex(index + 1)}
          >
            <img
              src={item}
              alt=""
              className={`h-[100%] w-[100%] cursor-pointer select-none  object-cover`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
