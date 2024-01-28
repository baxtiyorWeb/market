// Import Swiper styles
import { useEffect, useRef, useState } from "react";

export default function ProductImage() {
  const [sliderIndex, setSliderIndex] = useState(1);
  const [width, setWidth] = useState(0);
  const [start, setStart] = useState(0);
  const [change, setChange] = useState(0);
  const detailMap = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Gaming_PC_set_up.jpg/640px-Gaming_PC_set_up.jpg",
    },
    {
      img: "https://cdn.mos.cms.futurecdn.net/f5b4Za98noyKQzJjLmHAnd.jpg",
    },
    {
      img: "https://cdn.autonomous.ai/static/upload/images/common/upload/20200930/6f2cce37d2c.jpg",
    },
    {
      img: "https://tiki.vn/blog/wp-content/uploads/2023/09/pc-la-gi-thumbnail-1.jpg",
    },
  ];
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
    if (n > detailMap.length) {
      setSliderIndex(1);
      console.log(n);
    }
    if (n < 1) {
      setSliderIndex(detailMap.length);
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

  return (
    <div className="products-slide product-details overflow-hidden rounded-[10px] border">
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
          {detailMap.map((item, index) => (
            <div
              key={index}
              style={{ display: index + 1 === sliderIndex ? "block" : "none" }}
            >
              <img
                src={item.img}
                alt=""
                className={"h-[400px] w-full object-cover"}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        draggable={true}
        onDragStart={dragStart}
        onDragOver={dragOver}
        onDragEnd={dragEnd}
        ref={sliderRef}
        className="slide-scroll slider-imgs mb-3 mt-3 flex  items-center justify-center"
      >
        {detailMap.map((item, index) => (
          <div
            key={index}
            className={`m-3 flex h-[121px] w-[153px]  items-center justify-center rounded-[10px] border border-[#C7C7C7] object-cover p-3 px-3 py-3 hover:border-2 hover:border-[#90c049] ${
              index + 1 === sliderIndex && "active-img "
            }`}
            onClick={() => setSliderIndex(index + 1)}
          >
            <img
              src={item.img}
              alt=""
              className={`h-[100%] w-[100%] cursor-pointer select-none  object-cover`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
