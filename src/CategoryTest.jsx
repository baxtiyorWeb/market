import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getCategories } from "./exports/api";

const CategoryTest = () => {
  const [hoveredCategoryId, setHoveredCategoryId] = useState(null);
  const [clickedCategoryId, setClickedCategoryId] = useState(null);
  const { data, isLoading } = useQuery({
    queryKey: ["category/list"],
    queryFn: getCategories,
  });

  if (isLoading) return "Loading...";

  const handleMouseEnter = (id) => {
    setHoveredCategoryId(id);
  };

  const handleClick = (id) => {
    setClickedCategoryId(id);
  };

  const ParentCategories = ({ data }) => {
    return (
      <div className="h-full w-full bg-gray-100">
        <ul className="space-y-1">
          {data?.map((parent, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(parent?.id)}
              className="relative flex h-10 cursor-pointer select-none items-center px-4 text-green-700 hover:bg-green-100"
            >
              {parent?.name}
              {hoveredCategoryId === parent?.id && (
                <ul className="absolute left-full top-0 z-50 ml-1 h-auto w-56 border border-gray-300 bg-white shadow-lg">
                  {parent?.childCategories?.length !== 0 ? (
                    <ChildCategories data={parent?.childCategories} />
                  ) : (
                    ""
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const ChildCategories = ({ data }) => {
    const lengthChild = data?.childCategories?.length;
    (lengthChild);
    return (
      <>
        {data?.childCategories?.length !== 0 ? (
          <div
            className={
              lengthChild !== 0
                ? "fixed top-0 z-50 h-[100vh] w-[30%] bg-red-300"
                : "w-full border border-gray-300 bg-white"
            }
          >
            {data?.map((item) => (
              <li
                key={item?.id}
                onMouseEnter={() => handleClick(item?.id)}
                className="relative flex h-10 cursor-pointer select-none items-center px-4 text-green-700 hover:bg-green-100"
              >
                {item?.name} {item?.childCategories?.length ? ">" : ""}
                {clickedCategoryId === item?.id && item?.childCategories && (
                  <ul className="absolute left-full top-0 z-50 ml-1 h-auto w-56 border border-gray-300 bg-white shadow-lg">
                    <ChildCategories data={item?.childCategories} />
                  </ul>
                )}
              </li>
            ))}
          </div>
        ) : (
          ""
        )}
      </>
    );
  };

  const FullCategory = () => {
    return (
      <div className="w-full border border-gray-300 bg-white">
        <ParentCategories data={data?.data} />
      </div>
    );
  };

  return (
    <div className="absolute left-0 top-0 h-full w-[30%] border border-gray-300 bg-white shadow-md">
      <FullCategory />
    </div>
  );
};

export default CategoryTest;
