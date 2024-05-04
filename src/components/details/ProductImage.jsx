import { Carousel, Image } from "antd";
import { useEffect, useRef, useState } from "react";
import "react-medium-image-zoom/dist/styles.css";
import "./Product-details.css";

export default function ProductImage({ productDetail }) {
  const [imgGetIndex, setImgGetIndex] = useState(0);

  const [width, setWidth] = useState(0);
  const refs = useRef(null);

  const handleThumbnailClick = (index) => {
    setImgGetIndex(index);
  };

  useEffect(() => {
    if (!refs.current) return;
    const scrollWidth = refs.current.scrollWidth;
    const childrenElementCount = refs.current.childElementCount;
    const width = scrollWidth / childrenElementCount;
    setWidth(width);
  }, []);

  const SliderProduct = () => {
    const handleSlideChange = (current) => {
      setImgGetIndex(current);
    };

    useEffect(() => {
      if (!refs.current || !width) return;
      const numOfThumb = Math.round(refs.current.offsetWidth / width);
      refs.current.scrollLeft = Math.min(
        imgGetIndex * width,
        refs.current.scrollWidth - refs.current.offsetWidth,
      );
    }, [width, imgGetIndex]);

    let startX = null;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      if (!startX) return;
      const x = e.touches[0].clientX;
      const delta = startX - x;
      refs.current.scrollLeft += delta;
      startX = x;
      e.preventDefault(); // Bu hodisa uchun brauzer ta'sirini oldini oladi
    };

    const handleTouchEnd = () => {
      startX = null;
    };

    return (
      <div className="product-page-img relative">
        <div className="relative w-full">
          <div className="h-full w-full rounded-2xl">
            <Carousel
              afterChange={handleSlideChange}
              initialSlide={imgGetIndex}
              draggable
              effect="fade"
              waitForAnimate
              arrows
            >
              {productDetail?.files?.map((item, index) => (
                <Image
                  key={index}
                  src={`data:image/png;base64,${item.file?.fileBase64}`}
                  loading="lazy"
                  width={600}
                  height={500}
                  className="scale-10 h-[350px] select-none overflow-clip rounded-2xl  border bg-gray-500/20 bg-center object-contain"
                />
              ))}
            </Carousel>
            <div className="absolute right-3 top-3 inline-block w-[100px] cursor-text select-none rounded-full border bg-whiteTextColor p-2 text-center text-textColor">
              {imgGetIndex + 1} | {productDetail?.files?.length}
            </div>
          </div>
          <div
            ref={refs}
            className="flex h-full w-[600px] items-center justify-start overflow-x-scroll rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ overflowX: "scroll", whiteSpace: "nowrap" }}
          >
            {productDetail?.files?.map((item, index) => (
              <img
                key={index}
                onClick={() => handleThumbnailClick(index)}
                src={`data:image/png;base64,${item.file?.fileBase64}`}
                loading="eager"
                className={`m-5 h-[150px] w-[150px] select-none rounded-2xl object-cover p-1 ${
                  imgGetIndex === index
                    ? "scale-110 border-2 border-bgColor transition-all duration-150"
                    : "border-2 "
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="products-slide product-details relative w-full rounded-[10px]">
      <SliderProduct />
    </div>
  );
}
