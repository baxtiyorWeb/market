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
            src="	https://images.uzum.uz/cm77399s99ouqbfp450g/main_page_banner.jpg"
            className="h-[413px] w-full "
          />
        </div>
        <div>
          <img
            src="https://images.uzum.uz/cm0ml132psag1e8u17bg/main_page_banner.jpg"
            className="h-[413px] w-full "
          />
        </div>
        <div>
          <img
            src="https://images.uzum.uz/cm5fhf125ku1lubqegrg/main_page_banner.jpg"
            className="h-[413px] w-full "
          />
        </div>
      </Carousel>
    </div>
  );
}
