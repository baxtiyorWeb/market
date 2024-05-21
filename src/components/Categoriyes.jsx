import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Loading from "./../ui/loading/Loading";

import { Carousel } from "antd";
import {
  getCategoriesRootLisId,
  getCategoriesRootListSticky,
} from "../exports/api";
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
  if (isLoading) return <Loading />;

  return (
    <div className="slider-container-styck mt-10  h-[200px] w-full   p-1">
      <Carousel
        draggable
        className="flex select-none items-center justify-center"
        arrows={true}
        dots={false}
        slidesToShow={7}
        slidesToScroll={1}
        infinite
        autoplay
      >
        {data?.data?.content?.map((item, index) => (
          <div
            key={index}
            className="my-5 flex h-[196px_!important] w-[160px_!important] flex-col items-center justify-center"
          >
            <Link
              to={`/category/${item?.id}?category-name=${item?.name
                .split(", ")
                .join("-")}`}
              className="group flex  flex-col  items-center justify-center rounded-full   text-center text-sm "
            >
              <img
                src={`data:image/png;base64,${item?.file?.fileBase64}`}
                className="my-2 h-[120px] w-[120px] rounded-full  border border-bgColor object-cover  p-3 "
                alt=""
              />
              <span className="mt-3 text-center font-poppins  font-normal  not-italic leading-[100%] text-textColor group-hover:text-bgColor">
                {item?.name}
              </span>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
