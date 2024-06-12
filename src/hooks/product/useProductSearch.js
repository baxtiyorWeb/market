import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const useProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams("");
  const [categoryId, setCategoryId] = useState("1");
  const [categoryName, setCategoryName] = useState("");

  const navigate = useNavigate();
  searchParams.get("q");

  return {
    searchQuery,
    setCategoryId,
    setCategoryName,
  };
};

export default useProductSearch;
