import { LoadingOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import PrefetchComponent from "../prefetch/PrefetchComponent";
import useCategory from "./../hooks/category-hooks/useCategory";
export default function Categoriyes() {
  const { data, isLoading } = useCategory();

  if (isLoading)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
        <LoadingOutlined style={{ fontSize: 24 }} spin />
      </div>
    );

  return (
    <div className="slider-container-styck mt-3  h-[200px] w-full   p-1">
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
          <LoadingOutlined style={{ fontSize: 24 }} spin />
        </div>
      ) : (
        <Carousel
          draggable
          className="flex select-none items-center justify-center"
          arrows={true}
          dots={false}
          slidesToShow={8}
          slidesToScroll={1}
          infinite
          autoplay
          responsive={[
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 7,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {data?.data?.content?.map((item, index) => (
            <div
              key={index}
              className="my-1 flex h-[196px_!important] w-[160px_!important] flex-col items-center justify-center xs:h-[130px_important] xs:w-[130px_important]"
            >
              <PrefetchComponent item={item} />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}
