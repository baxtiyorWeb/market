import { useQuery } from "@tanstack/react-query";

import Carousel from "react-elastic-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { getCategoriesRootLisId, getCategoriesRootList } from "../exports/api";
import Loading from "./../ui/loading/Loading";

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
  const { data, isLoading, error } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategoriesRootList(),
  });

  if (error) return `Error: ${error}`;

  if (isLoading) return <Loading />;

  return (
    <div className="slider-container mt-5">
      <Carousel
        enableAutoPlay
        autoPlaySpeed={5000}
        itemsToShow={5}
        itemsToScroll={1}
        enableTilt
        showEmptySlots
      >
        {data?.data?.content?.map((item, index) => (
          <div
            className="mx-5 my-3 flex h-[100px] w-[200px] items-center   justify-center rounded-3xl "
            key={index}
          >
            <div>
              <div className="flex flex-col  items-center justify-center">
                <div className="flex h-[70px]  w-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFF] shadow-sm">
                  <img
                    className="my-1 h-[30px] w-[30px]"
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
          </div>
        ))}
      </Carousel>
    </div>
  );
}
