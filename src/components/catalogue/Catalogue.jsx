import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategories } from "../../exports/api";
import MenuList from "./CategoryTab";

const Catalogue = ({ open, setOpen }) => {
  const { data } = useQuery({
    queryKey: ["/category/all"],
    queryFn: getCategories,
  });
  console.log(data);

  return (
    <div className="max-h-max bg-white">
      <MenuList setOpen={setOpen} open={open} categories={data?.data} />
    </div>
  );
};

export default Catalogue;
