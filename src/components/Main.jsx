import React from "react";
import Slider from "./Slider";
import Categoriyes from "./Categoriyes";
import Products from "./products/Products";
import { Carousel } from "react-responsive-carousel";

export default function Main() {
  return <div>
    <Slider/>
    <div>
      <Categoriyes/>
    </div>
    <div>
      <Products/>
    </div>
    <div className="slide-next-1 mb-[100px]">
      <Carousel emulateTouch autoFocus transitionTime={300} infiniteLoop swipeable showIndicators={false} showStatus={false}>
            <div className="w-full h-[360px] flex-shrink-0 rounded-[10px]">
                    <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" className="w-full h-full " />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?cs=srgb&dl=pexels-francesco-ungaro-1525041.jpg&fm=jpg" className="w-full h-[360px] " />
                </div>
                <div>
                    <img src="https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg" className="w-full h-[360px] " />
                </div>
            </Carousel>
    </div>
     <div>
      <Products/>
    </div>
  </div>;
}
