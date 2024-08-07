import React, { createContext, useContext, useState } from "react";
import useParamsFilter from "../hooks/useParamsFilter";

const searchContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const { filter, setFilter } = useParamsFilter();

  const globalSearchData = () => {
    if (!filter.search) {
      return false;
    } else {
      setFilter({
        search: search,
        regionId: "",
        districtId: "",
        categoryId: "",
        propertyId: "",
        canAgree: "",
        paymentType: "",
        sellType: "",
        price_min: "",
        price_max: "",
      });
    }
  };

  return (
    <searchContext.Provider
      value={{ searchValue: search, setSearch, globalSearchData }}
    >
      {children}
    </searchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(searchContext);
};

export default SearchProvider;
