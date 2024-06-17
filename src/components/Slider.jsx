import { Carousel } from "antd";
export default function Slider() {
  return (
    <div className="slider-home   h-full w-[78%] rounded-2xl  sm:max-h-full  sm:w-full">
      <Carousel
        draggable
        className="select-none "
        arrows
        dots={true}
        slidesToShow={1}
        slidesToScroll={1}
        infinite
        dotPosition="bottom"
        autoplay
        effect="fade"
        autoplaySpeed={3000}
      >
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://olcha.uz/image/original/sliders/oz/4eLWNfkAmz5pDr9EO192VKKKQ35ButlqlWNFSFCFO0ARWyYLmAsHUkHQVAJe.jpg"
            className="h-[332px] w-full  rounded-2xl  sm:max-h-[150px]"
          />
        </div>
        <img
          src="https://olcha.uz/image/original/sliders/oz/sH2cyvYl2BqmUQu5srVpMoGJUxLZd8EqxmfQR6m7sjYRJ0PtKNt5UfSHUI7b.jpg"
          className="h-[332px] w-full  rounded-2xl sm:max-h-[150px]"
        />
        <img
          src="https://olcha.uz/image/original/sliders/oz/Mrwm9x0o5zaDUNj9Gnz6hJKT97fqmoxeSO8EOXydCfF7EqO9y9UHP0mD8m08.png"
          className="h-[332px] w-full  rounded-2xl sm:max-h-[150px]"
        />
        <img
          src="https://olcha.uz/image/original/sliders/oz/JbZXKLnK8jX2hNbIgi4eXJ3qvZ2jS5vxaJEFA8eZmUN1tsEyQjekKLTDN13t.png"
          className="h-[332px] w-full  rounded-2xl sm:max-h-[150px]"
        />
        <img
          src="https://olcha.uz/image/original/sliders/oz/a0tA8yTf1dhIRnbc59FExu1jJ577UWFXI1Ki1tuM3qW6bwD9jbrWkJbtBbB8.png"
          className="h-[332px] w-full  rounded-2xl sm:max-h-[150px]"
        />
        <img
          src="https://olcha.uz/image/original/sliders/oz/FJpaTzUZfeKjNeEDTHbllALp21oipD2K2QM1nRb3koK2h3ervh5E04cUkUte.jpg"
          className="h-[332px] w-full  rounded-2xl sm:max-h-[150px]"
        />
        <img
          src="https://minio.alifnasiya.uz/shop/catalog/carousel/185/1698244324-2%20uzb.jpg"
          className="h-[332px] w-full  rounded-2xl sm:max-h-[150px]"
        />

        <img
          src="https://assets.asaxiy.uz/uploads/banner/desktop/659d2b642a872.jpg.webp"
          className="h-[332px] w-full  rounded-2xl sm:max-h-[150px]"
        />
        <img
          src="https://assets.asaxiy.uz/uploads/banner/desktop/6586b4a2daf21.jpg.webp"
          className="h-[332px] w-full  rounded-2xl sm:max-h-[150px]"
        />
        <img
          src="https://assets.asaxiy.uz/uploads/banner/desktop/659d2b642a872.jpg.webp"
          className="h-[332px] w-full  rounded-2xl sm:max-h-[150px]"
        />
      </Carousel>
    </div>
  );
}
