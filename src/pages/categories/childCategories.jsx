import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { getCategoriesRootLisId } from "../../exports/api";
import Loading from "../../ui/loading/Loading";

const ChildCategories = () => {
  const { id } = useParams();
  const searchParam = useSearchParams();
  const paramName = searchParam[0].get("category-name");
  const formatParamName = paramName.split("-").join(" ");

  const { data, isLoading, error } = useQuery({
    queryKey: ["category", id],
    queryFn: () => getCategoriesRootLisId(id),
  });

  if (isLoading) return <Loading />;
  if (error) return `Error: ${error}`;

  return (
    <div className="mt-3 h-[80vh] flex-col items-start justify-center overflow-scroll ">
      <div class="grid h-full grid-flow-col grid-rows-3 gap-4 bg-white">
        <div class="row-span-3 flex w-[280px] flex-col rounded-3xl  p-5">
          <div className="my-5 border-b border-b-gray-500 text-left text-[20px]">
            <span>{formatParamName}</span>
          </div>
          <div className="flex flex-col items-start justify-center">
            {data?.data?.content?.map((item) => (
              <Link
                className="my-1 h-16 w-full flex-1 rounded  border-b py-3 font-medium hover:text-[#1D828E]"
                to={
                  item?.hasChildren &&
                  `/category/${item?.id}?category-name=${item?.name
                    .split(", ")
                    .join("-")}`
                }
                key={item?.id}
              >
                <span>{item?.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div class="... col-span-12 row-span-3 border">03</div>
      </div>
    </div>
  );
};

export default ChildCategories;
