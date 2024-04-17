import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { Menu } from "antd";
import { useState } from "react";
import { getCategoriesRootLisId, getCategoriesRootList } from "../exports/api";
import Loading from "./../ui/loading/Loading";

const { SubMenu, Item, ItemGroup } = Menu;

const SubmenuComponent = ({ childCategories, chilId }) => {
  console.log(chilId);
  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategoriesRootLisId(chilId),
  });

  console.log(data?.content);
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
  const [childCategoriesId, setChildCategoriesId] = useState("");
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
    slidesToScroll: 5,
  };
  return (
    <div className="relative my-10">
      <Slider
        {...settings}
        centerMode
        className="flex h-[180px]"
        draggable
        speed={500}
      >
        {data?.data?.content?.map((item, index) => (
          <div className="" key={index}>
            <div className="flex h-[150px] w-[200px] flex-col items-center justify-center">
              <div className="flex h-[70px]  w-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFF] shadow-sm">
                <img
                  className="h-[30px] w-[30px]"
                  src={`data:image/png;base64,${item?.file?.fileBase64}`}
                  alt=""
                />
              </div>
              <span className="mt-3  text-center font-poppins text-[19px] font-normal not-italic leading-[100%] text-[#130F1E]">
                <Menu mode="horizontal">
                  <SubMenu
                    title={item?.name}
                    onMouseEnter={() => setChildCategoriesId(item?.id)}
                  >
                    <SubmenuComponent data={item} chilId={childCategoriesId} />
                  </SubMenu>
                </Menu>
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
