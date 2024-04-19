import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { Menu } from "antd";
import { Link } from "react-router-dom";
import { getCategoriesRootLisId, getCategoriesRootList } from "../exports/api";
import Loading from "./../ui/loading/Loading";

const SubmenuComponent = ({ childCategories, chilId }) => {
  console.log(chilId);
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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="relative my-10 w-full">
      <Slider {...settings} draggable speed={500} lazyLoad="progressive" arrows>
        {data?.data?.content?.map(
          (item, index) =>
            item?.hasChildren && (
              <div
                className="mx-5  h-[150px] w-[100px]  rounded-3xl "
                key={index}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="flex h-[70px]  w-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFF] shadow-sm">
                    <img
                      className="h-[30px] w-[30px]"
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
            ),
        )}
      </Slider>
    </div>
  );
}
