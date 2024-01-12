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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Gaming_PC_set_up.jpg/640px-Gaming_PC_set_up.jpg"
            className="h-[100%] w-[100%]"
          />
        </div>
        <div>
          <img
            src="https://cdn.mos.cms.futurecdn.net/f5b4Za98noyKQzJjLmHAnd.jpg"
            className="h-[100%] w-[100%]"
          />
        </div>
        <div>
          <img
            src="https://cdn.autonomous.ai/static/upload/images/common/upload/20200930/6f2cce37d2c.jpg"
            className="h-[100%] w-[100%]"
          />
        </div>
        <div>
          <img
            src="https://tiki.vn/blog/wp-content/uploads/2023/09/pc-la-gi-thumbnail-1.jpg"
            className="h-[100%] w-[100%]"
          />
        </div>
      </Carousel>
    </div>
  );
}
