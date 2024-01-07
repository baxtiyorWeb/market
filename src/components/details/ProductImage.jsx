import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function ProductImage() {
  return (
    <div className="products-slide">
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
        <div className="h-[400px] w-[100%] flex-shrink-0 rounded-[10px]">
          <img
            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            className="h-[100%] w-[100%]"
          />
        </div>
        <div>
          <img
            src="https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg"
            className="h-[100%] w-[100%]"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?cs=srgb&dl=pexels-francesco-ungaro-1525041.jpg&fm=jpg"
            className="h-[100%] w-[100%]"
          />
        </div>
        <div>
          <img
            src="https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg"
            className="h-[100%] w-[100%]"
          />
        </div>
      </Carousel>
    </div>
  );
}
