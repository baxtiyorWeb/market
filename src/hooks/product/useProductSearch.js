import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const useProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams("");
  const [categoryId, setCategoryId] = useState("1");
  const [categoryName, setCategoryName] = useState("");

  const navigate = useNavigate();
  searchParams.get("q");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    setSearchParams({ search_result: searchQuery });
    navigate(
      `/category/${categoryId}?category-name=${categoryName}&search=${searchQuery}`,
    );
  };

  return {
    handleInputChange,
    handleButtonClick,
    searchQuery,
    setCategoryId,
    setCategoryName,
  };
};

export default useProductSearch;
