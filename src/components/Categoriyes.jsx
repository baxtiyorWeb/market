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
    <div className="slider-container-styck my-4 flex h-[280px]  w-[25%] flex-col items-start justify-start overflow-scroll  bg-white p-1">
      {data?.data?.content?.map((item, index) => (
        <div
          key={index}
          className="mt-1  flex w-full flex-col items-start justify-start"
        >
          <Link
            to={`/category/${item?.id}?category-name=${item?.name
              .split(", ")
              .join("-")}`}
            className="w-full rounded-sm p-2   text-start text-sm hover:bg-slate-500/10"
          >
            <span className="mt-3 text-center  font-poppins  font-normal not-italic leading-[100%] ">
              {item?.name}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}
