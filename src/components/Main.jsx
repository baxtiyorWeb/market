import { Carousel } from "react-responsive-carousel";
import Categoriyes from "./Categoriyes";
import Slider from "./Slider";
import Products from "./products/Products";

export default function Main() {
  return (
    <div>
      <Categoriyes />
      <Slider />
      <div>
        <Products />
      </div>
      <div className="slide-next-1 mb-[100px]">
        <Carousel
          emulateTouch
          autoFocus
          transitionTime={300}
          infiniteLoop
          swipeable
          showIndicators={false}
          showStatus={false}
        >
          <div className="h-[360px] w-full flex-shrink-0 rounded-[10px]">
            <img
              src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
              className="h-full w-full "
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?cs=srgb&dl=pexels-francesco-ungaro-1525041.jpg&fm=jpg"
              className="h-[360px] w-full "
            />
          </div>
          <div>
            <img
              src="https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg"
              className="h-[360px] w-full "
            />
          </div>
        </Carousel>
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
}
