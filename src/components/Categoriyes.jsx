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
    <div className="slider-container-styck relative mt-5 ">
      <h1 className="my-5 text-2xl">top categoriyalar</h1>
      <Carousel
        dots={false}
        slidesToShow={4}
        slidesToScroll={1}
        draggable
        infinite
        autoplay
        arrows
        autoplaySpeed={1000}
      >
        {data?.data?.content?.map((item, index) => (
          <div className="rounded-md  bg-white shadow-sm " key={index}>
            <div className="flex  flex-col items-center justify-evenly ">
              <div className="flex h-[70px]  w-[70px] cursor-pointer items-center justify-center rounded-full  ">
                <img
                  className="my-1 h-[40px] w-[40px]"
                  src={`data:image/png;base64,${item?.file?.fileBase64}`}
                  alt=""
                />
              </div>
              <Link
                to={`/category/${item?.id}?category-name=${item?.name
                  .split(", ")
                  .join("-")}`}
                className="text-center "
              >
                <span className="mt-3 text-center  font-poppins text-[19px] font-normal not-italic leading-[100%] text-[#130F1E] hover:text-[#218490]">
                  {item?.name}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
