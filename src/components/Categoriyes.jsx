import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Loading from "./../ui/loading/Loading";

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
    <div className="slider-container-styck my-4  flex h-[280px] w-[25%] flex-col items-start justify-between overflow-scroll">
      {data?.data?.content?.map((item, index) => (
        <>
          <div
            key={index}
            className="mt-3  flex w-full flex-col items-start justify-evenly"
          >
            <Link
              to={`/category/${item?.id}?category-name=${item?.name
                .split(", ")
                .join("-")}`}
              className=" w-full   rounded-md border p-2 text-start"
            >
              <span className="mt-3 text-center  font-poppins text-[19px] font-normal not-italic leading-[100%] ">
                {item?.name}
              </span>
            </Link>
          </div>
          <div
            key={index}
            className="mt-3  flex w-full flex-col items-start justify-evenly"
          >
            <Link
              to={`/category/${item?.id}?category-name=${item?.name
                .split(", ")
                .join("-")}`}
              className=" w-full   rounded-md border p-2 text-start"
            >
              <span className="mt-3 text-center  font-poppins text-[19px] font-normal not-italic leading-[100%] ">
                {item?.name}
              </span>
            </Link>
          </div>
        </>
      ))}
    </div>
  );
}
