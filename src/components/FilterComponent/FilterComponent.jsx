import React from "react";
import useProductSearch from "../../hooks/product/useProductSearch";
import Loading from "../../ui/loading/Loading";

const FilterComponent = () => {
  const { isLoading, filterData } = useProductSearch();

  if (isLoading) return <Loading />;

  console.log(filterData?.data?.content);

  return <div></div>;
};

export default FilterComponent;
