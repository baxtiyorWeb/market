import React, { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFilter from "../hooks/product/useFilter";
import useParamsFilter from "../hooks/useParamsFilter";

const searchContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const { filter, setFilter } = useParamsFilter();

  const globalSearchData = () => {
    setFilter({ ...filter, search: search });
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
