import { Carousel, Image } from "antd";
import { useEffect, useRef, useState } from "react";
import "react-medium-image-zoom/dist/styles.css";
import "./Product-details.css";

export default function ProductImage({ data }) {
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
              {data?.files?.map((item, index) => (
                <Image
                  key={index}
                  src={`data:image/png;base64,${item.file?.fileBase64}`}
                  loading="eager"
                  width={600}
                  height={500}
                  className="h-[350px] select-none rounded-2xl border bg-blue-500 object-fill  "
                />
              ))}
            </Carousel>
            <div className="absolute right-3 top-3 inline-block w-[100px] cursor-text select-none rounded-full border bg-whiteTextColor p-2 text-center text-textColor">
              {data?.files?.length} | {imgGetIndex + 1}
            </div>
          </div>
          <div
            ref={refs}
            className="flex h-full w-[600px] items-center justify-start overflow-x-scroll rounded-2xl"
          >
            {data?.files?.map((item, index) => (
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
    <div className="products-slide product-details relative rounded-[10px]">
      <SliderProduct />
    </div>
  );
}
