import { Carousel } from "antd";
import { useState } from "react";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (from, to) => {
    setCurrentSlide(to);
  };
  return (
    <div className="slider-home h-full w-[78%] overflow-hidden   rounded-2xl   sm:max-h-full  sm:w-full  md:h-[100%]  md:w-full">
      <Carousel
        draggable
        className="select-none "
        arrows
        dots={true}
        slidesToShow={1}
        swipeToSlide
        centerMode
        centerPadding="160px"
        slidesToScroll={1}
        infinite
        dotPosition="bottom"
        autoplay
        responsive={[
          {
            breakpoint: 640,
            settings: {
              centerMode: false,
              centerPadding: "0px",
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 767,
            settings: {
              centerMode: false,
              centerPadding: "0px",
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1023,
            settings: {
              centerMode: false,
              centerPadding: "0px",
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
        autoplaySpeed={3000}
        beforeChange={handleBeforeChange}
      >
        {[
          "https://olcha.uz/image/original/sliders/oz/4eLWNfkAmz5pDr9EO192VKKKQ35ButlqlWNFSFCFO0ARWyYLmAsHUkHQVAJe.jpg",
          "https://olcha.uz/image/original/sliders/oz/sH2cyvYl2BqmUQu5srVpMoGJUxLZd8EqxmfQR6m7sjYRJ0PtKNt5UfSHUI7b.jpg",
          "https://olcha.uz/image/original/sliders/oz/Mrwm9x0o5zaDUNj9Gnz6hJKT97fqmoxeSO8EOXydCfF7EqO9y9UHP0mD8m08.png",
          "https://olcha.uz/image/original/sliders/oz/JbZXKLnK8jX2hNbIgi4eXJ3qvZ2jS5vxaJEFA8eZmUN1tsEyQjekKLTDN13t.png",
          "https://olcha.uz/image/original/sliders/oz/a0tA8yTf1dhIRnbc59FExu1jJ577UWFXI1Ki1tuM3qW6bwD9jbrWkJbtBbB8.png",
          "https://olcha.uz/image/original/sliders/oz/FJpaTzUZfeKjNeEDTHbllALp21oipD2K2QM1nRb3koK2h3ervh5E04cUkUte.jpg",
          "https://minio.alifnasiya.uz/shop/catalog/carousel/185/1698244324-2%20uzb.jpg",
          "https://assets.asaxiy.uz/uploads/banner/desktop/659d2b642a872.jpg.webp",
          "https://assets.asaxiy.uz/uploads/banner/desktop/6586b4a2daf21.jpg.webp",
          "https://assets.asaxiy.uz/uploads/banner/desktop/659d2b642a872.jpg.webp",
        ].map((src, index) => (
          <div
            key={index}
            className={`h-[280px] w-[100%] p-10   transition-all duration-300 sm:max-h-[150px] md:h-[200px] md:object-cover  md:object-center md:p-1 ${
              currentSlide === index
                ? " scale-110 transition duration-700 "
                : " aspect-* opacity-15 "
            }`}
          >
            <img src={src} className="h-full w-full object-cover" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
