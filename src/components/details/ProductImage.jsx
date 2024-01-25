import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { A11y, Navigation, Pagination, Thumbs } from 'swiper/modules'
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
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="products-slide border overflow-hidden  rounded-[10px]">
      <Carousel
        emulateTouch
        autoFocus
        transitionTime={300}
        infiniteLoop
        swipeable
        showIndicators={true}
        showStatus={false}
      >
        {detailMap.map((item, index) => {
          return (
            <div
              className="h-[400px] w-[100%] flex-shrink-0 overflow-hidden"
              key={index}
            >
              <img src={item.img} className="h-[100%] w-[100%] object-cover" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
