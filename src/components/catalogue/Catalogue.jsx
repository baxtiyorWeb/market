import React, { useEffect, useState } from "react";
import { getCategories } from "../../exports/api";
import MenuList from "./CategoryTab";
import "./category.css";
import { useQuery } from "@tanstack/react-query";

const Catalogue = () => {
  const { data } = useQuery({
    queryKey: ["category"],
    queryFnL: getCategories,
  });

  return (
    <div className="max-h-max bg-white">
      <MenuList categories={data} />
    </div>
  );
};

export default Catalogue;
