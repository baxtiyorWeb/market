// Import Swiper styles
import { Carousel, Image } from "antd";
import { useState } from "react";
import "react-medium-image-zoom/dist/styles.css";
import "./Product-details.css";
export default function ProductImage({ data }) {
  const [imgGetIndex, setImgGetIndex] = useState(0);

  const SliderProduct = () => {
    const handleSlideChange = (current) => {
      setImgGetIndex(current);
    };

    return (
      <>
        <div className="product-page-img relative">
          <div className="relative">
            <div className="h-full ">
              <Carousel
                afterChange={handleSlideChange}
                initialSlide={imgGetIndex}
                // className="w-[686px]"
                rootClassName="image-container"
                draggable
                effect="fade"
                waitForAnimate
                arrows
              >
                {data?.files?.map((item, index) => (
                  <Image
                    src={`data:image/png;base64,${item.file?.fileBase64}`}
                    loading="eager"
                    className="h-[400px] w-full select-none border bg-blue-500 object-center"
                  />
                ))}
              </Carousel>
              <div className="thumbnails flex w-full items-center justify-center">
                {data?.files?.map((thumbnail, index) => (
                  <div
                    key={index}
                    className={`h-[200px] w-[200px] ${
                      imgGetIndex === index
                        ? "h-[200px] w-[200px] border"
                        : "h-[200px] w-[200px]"
                    }`}
                    onClick={() => setImgGetIndex(index)}
                  >
                    <img
                      className="img-thumbs"
                      src={`data:image/png;base64,${thumbnail.file?.fileBase64}`}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className=" products-slide product-details relative  rounded-[10px] border">
      <SliderProduct />
    </div>
  );
}
