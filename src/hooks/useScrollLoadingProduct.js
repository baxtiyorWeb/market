import { useEffect, useState } from "react";
import useToggle from "./../hooks/useToggle";
import useFilter from "./product/useFilter";
const useScrollLoadingProduct = () => {
  const { manufacture } = useFilter();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useFilter();
  const [fastId, setFastId] = useState("");
  const { handleToggle, isOpen } = useToggle();
  const getFastid = (id) => {
    if (id !== undefined) {
      handleToggle();
      setFastId(id);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetchingNextPage
    )
      return;
    if (hasNextPage) fetchNextPage();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, isFetchingNextPage, manufacture]);

  const existing = JSON.parse(localStorage.getItem("products")) || [];

  return {
    fastId,
    existing,
    isOpen,
    data,
    getFastid,
    isLoading,
    handleToggle,
    isFetchingNextPage,
  };
};

export default useScrollLoadingProduct;
