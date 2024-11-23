import React, { createContext, useContext, useState } from "react";
import useParamsFilter from "../hooks/useParamsFilter";
import { useNavigate } from "react-router-dom";

const searchContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const { filter, setFilter } = useParamsFilter();
  const navigate = useNavigate();

  const globalSearchData = () => {
    if (!filter.search) {
      setFilter({ ...filter, search: search });
      navigate(`/search?search=${filter.search}`);
    } else {
      navigate(`/search?search=${filter.search}`);
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
