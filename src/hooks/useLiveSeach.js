import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategoryFilter } from "../exports/api";

const useLiveSeach = () => {
  const { id } = useParams();
  const [search, setSearch] = useState([]);
  const [value, setValue] = useState("");
  const [propetyId, setproperyId] = useState(0);
  const [open, setOpen] = useState(false);

  const { data: productLiveFilter } = useQuery({
    queryKey: ["product/string-values", value],
    queryFn: async () => await getProductsByCategoryFilter(value),
  });

  console.log(productLiveFilter);
  const liveSearch = (inputValue, ids) => {
    setValue(inputValue);

    // Ensure the inputValue is updated before the following operations
    if (inputValue !== "") {
      setOpen(true);

      if (inputValue.length > -1) {
        // Use toLowerCase for case-insensitive matching
        const getValue = productLiveFilter?.data?.filter((item) =>
          item?.name?.toLowerCase().includes(inputValue.toLowerCase()),
        );

        setproperyId(ids);
        setSearch(getValue);
      } else {
        setSearch([]); // Clear search results if the input value length is greater than 3
      }
    } else {
      setSearch([]); // Clear search results if input is empty or ids are not provided
    }
  };
  return {
    productLiveFilter,
    liveSearch,
    search,
    propetyId,
    value,
    open,
    setOpen,
  };
};

export default useLiveSeach;
