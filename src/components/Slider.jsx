import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Slider() {
  return (
    <div className="slider-home mt-[20px] h-[413px] overflow-hidden rounded-2xl ">
      <Carousel
        emulateTouch
        autoFocus
        autoPlay
        transitionTime={300}
        infiniteLoop
        swipeable
        showIndicators={false}
        showStatus={false}
      >
        <div>
          <img
            src="https://olcha.uz/image/original/sliders/oz/4eLWNfkAmz5pDr9EO192VKKKQ35ButlqlWNFSFCFO0ARWyYLmAsHUkHQVAJe.jpg"
            className="h-[413px] w-full "
          />
        </div>
        <div>
          <img
            src="https://olcha.uz/image/original/sliders/oz/sH2cyvYl2BqmUQu5srVpMoGJUxLZd8EqxmfQR6m7sjYRJ0PtKNt5UfSHUI7b.jpg"
            className="h-[413px] w-full "
          />
        </div>
        <div>
          <img
            src="https://olcha.uz/image/original/sliders/oz/Mrwm9x0o5zaDUNj9Gnz6hJKT97fqmoxeSO8EOXydCfF7EqO9y9UHP0mD8m08.png"
            className="h-[413px] w-full "
          />
        </div>
      </Carousel>
    </div>
  );
}
