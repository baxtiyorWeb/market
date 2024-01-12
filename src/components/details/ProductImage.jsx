import { Carousel } from "react-responsive-carousel";

export default function ProductImage() {
  const detailMap = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Gaming_PC_set_up.jpg/640px-Gaming_PC_set_up.jpg",
    },
    {
      img: "https://cdn.mos.cms.futurecdn.net/f5b4Za98noyKQzJjLmHAnd.jpg",
    },
    {
      img: "https://cdn.autonomous.ai/static/upload/images/common/upload/20200930/6f2cce37d2c.jpg",
    },
    {
      img: "https://tiki.vn/blog/wp-content/uploads/2023/09/pc-la-gi-thumbnail-1.jpg",
    },
  ];
  return (
    <div className="products-slide border">
      <Carousel
        emulateTouch
        autoFocus
        autoPlay
        infiniteLoop
        swipeable
        showIndicators={true}
        showStatus={false}
        verticalSwipe="natural"
      >
        {detailMap.map((item, index) => {
          return (
            <div
              className="h-[400px] w-[100%] flex-shrink-0 rounded-[10px]"
              key={index}
            >
              <img src={item.img} className="h-[100%] w-[100%]" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
