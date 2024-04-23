import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getproductgetFileterSearch } from "../../exports/api";

const useProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams("");
  const [filterData, setFilterData] = useState([]);
  const navigate = useNavigate();
  searchParams.get("q");
  const {
    data: productFilter,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", searchQuery],
    queryFn: () => getproductgetFileterSearch(searchQuery),
  }); // fetchData funksiyasiga tanlangan qidiruvni yuborish

  useEffect(() => {
    // SearchQuery o'zgarishi bilan tarmoq so'rovi ni qayta ishga tushirish
    refetch(); // refetch funksiyasini React-Query obyektiga ma'lumotlarni yangilash uchun yuborish
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleButtonClick = () => {
    setSearchParams({ search_result: searchQuery });
    setFilterData(productFilter);
    navigate("/product/search_result/name");
    refetch(); // Tugma bosilganda tarmoq so'rovi ni qayta ishga tushirish
  };

  return {
    handleInputChange,
    handleButtonClick,
    filterData,
    isLoading,
  };
};

export default useProductSearch;
