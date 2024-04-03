import { Carousel } from "react-responsive-carousel";
import Categoriyes from "./Categoriyes";
import Slider from "./Slider";
import Products from "./products/Products";

// eslint-disable-next-line react/prop-types
export default function Main({ scroll }) {
  return (
    <div>
      <Categoriyes scroll={scroll} />
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
          <div>
            <img
              src="https://olcha.uz/image/original/sliders/oz/FJpaTzUZfeKjNeEDTHbllALp21oipD2K2QM1nRb3koK2h3ervh5E04cUkUte.jpg"
              className="h-[413px] w-full "
            />
          </div>
          <div>
            <img
              src="https://minio.alifnasiya.uz/shop/catalog/carousel/185/1698244324-2%20uzb.jpg"
              className="h-[413px] w-full "
            />
          </div>
          <div>
            <img
              src="https://minio.alifnasiya.uz/shop/catalog/carousel/186/1698761735-3)%201600x491%2043-50_3300%20UZB.png"
              className="h-[413px] w-full "
            />
          </div>
          <div>
            <img
              src="https://assets.asaxiy.uz/uploads/banner/desktop/659d2b642a872.jpg.webp"
              className="h-[413px] w-full "
            />
          </div>
          <div>
            <img
              src="https://assets.asaxiy.uz/uploads/banner/desktop/6586b4a2daf21.jpg.webp"
              className="h-[413px] w-full "
            />
          </div>
          <div>
            <img
              src="https://assets.asaxiy.uz/uploads/banner/desktop/659d2b642a872.jpg.webp"
              className="h-[413px] w-full "
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
