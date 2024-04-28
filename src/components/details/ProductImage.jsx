// Import Swiper styles
import { Image } from "antd";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Product-details.css";
export default function ProductImage({ data }) {
  const [sliderIndex, setSliderIndex] = useState(1);
  const [imgGetIndex, setImgGetIndex] = useState(0);
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

  document.addEventListener("DOMContentLoaded", (e) => {
    setImgGetIndex(data?.files?.length);
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const onClickThumb = (e) => {
    console.log(e);
  };
  const onClickItem = (e) => {
    console.log(e);
  };

  const onChange = (e) => {
    console.log(e);
  };

  const SliderProduct = () => {
    return (
      <>
        <div className="product-page-img relative">
          <div className="relative">
            <div className="h-full ">
              <Carousel
                verticalSwipe="natural"
                showThumbs={true}
                infiniteLoop
                showStatus={false}
                autoPlay
                autoFocus
                stopOnHover
                emulateTouch
                onChange={onChange}
                onClickItem={onClickItem}
                onClickThumb={onClickThumb}
                renderThumbs={() =>
                  data?.files?.map((item, index) => (
                    <img
                      className="img-thumbs"
                      key={index}
                      src={`data:image/png;base64,${item.file?.fileBase64}`}
                    />
                  ))
                }
              >
                {data?.files?.map((item, index) => (
                  <div key={index} className={`slide-item h-[400px] w-[726px]`}>
                    <Image
                      src={`data:image/png;base64,${item.file?.fileBase64}`}
                      loading="lazy"
                      width={"100%"}
                      height="400px"
                      className="img-product border  "
                    />
                  </div>
                ))}
              </Carousel>
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
