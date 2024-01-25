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
      <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
    
     {
      detailMap.map((item,index) => {
        return (
          <SwiperSlide className='w-full h-[400px]' key={index}>
          <img className='w-full h-[400px]' src={item.img} alt="" />
        </SwiperSlide>
        )
      })
     }
     
      ...
    </Swiper>
      <Swiper
         modules={[Navigation, Thumbs,]}
         onSwiper={setThumbsSwiper}
         loop={true}
         watchSlidesProgress
         spaceBetween={10}
         slidesPerView={3}
         className='product-images-slider-thumbs'
        >
     {
      detailMap.map((item,index) => {
        return  <SwiperSlide   className='w-full h-[400px]' key={index}>
        <div className='product-images-slider-thumbs-wrapper'>
        <img className='w-full h-[400px]' src={item.img} alt="" />
        </div>
      </SwiperSlide>
      })
     }
        </Swiper>
    </div>
  );
}
