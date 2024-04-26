import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { getCategoriesRootListSticky } from "../../exports/api";
import Container from "../../shared/Container";

const HeaderCategories = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["category"],
    queryFn: getCategoriesRootListSticky,
  });
  console.log(data?.data);
  return (
    <div className="mb-3 border-t bg-white p-3  shadow-md">
      <Container>
        <div className="flex  items-center justify-between">
          {data?.data?.content?.map((item) => (
            <Link
              className="hover:text-teal-700"
              to={`category/${item?.id}?category-name=${item?.name}`}
            >
              {item?.name}
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HeaderCategories;
