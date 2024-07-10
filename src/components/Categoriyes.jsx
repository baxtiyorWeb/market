import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { Carousel, Menu } from "antd";
import {
  getCategoriesRootLisId,
  getCategoriesRootListSticky,
} from "../exports/api";
import CategoryLoading from "../ui/loading/CategoryLoading";
const SubmenuComponent = ({ childCategories, chilId }) => {
  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategoriesRootLisId(chilId),
  });

  return (
    <>
      {data?.childCategories?.length &&
        childCategories?.childCategories?.map((item) => (
          <Menu mode="horizontal" key={index}>
            <Menu.Item title={item?.name}>
              <SubmenuComponent data={item} />
            </Menu.Item>
          </Menu>
        ))}
    </>
  );
};

export default function Categoriyes() {
  const { data, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategoriesRootListSticky(),
  });
  // if (isLoading) return <Loading />;

  return (
    <div className="slider-container-styck mt-3  h-[200px] w-full   p-1">
      {isLoading ? (
        <CategoryLoading />
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
          ]}
        >
          {data?.data?.content?.map((item, index) => (
            <div
              key={index}
              className="my-1 flex h-[196px_!important] w-[160px_!important] flex-col items-center justify-center xs:h-[130px_important] xs:w-[130px_important]"
            >
              <Link
                to={`/category/${item?.id}?category-name=${item?.name
                  .split(", ")
                  .join("-")}`}
                className="group flex  flex-col  items-center justify-center rounded-full   text-center text-sm "
              >
                <img
                  src={`data:image/png;base64,${item?.file?.fileBase64}`}
                  className="my-2 h-[100px] w-[100px] rounded-full border  border-bgColor object-cover p-[10px] xs:h-[60px_!important]  xs:w-[60px_!important] xs:p-1"
                  alt=""
                />
                <span className="mt-3 text-center font-poppins font-normal  not-italic  leading-[100%] text-textColor group-hover:text-bgColor xs:text-xs">
                  {item?.name}
                </span>
              </Link>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}
