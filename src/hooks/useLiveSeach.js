import { useState } from "react";
import { useParams } from "react-router-dom";
import { getProductStringValues } from "../exports/api";

const useLiveSeach = () => {
  const [search, setSearch] = useState([]);
  const { id } = useParams();
  const [value, setValue] = useState("");
  const [propetyId, setproperyId] = useState(0);
  const [open, setOpen] = useState(false);
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
    getProductStringValues,
    liveSearch,
    search,
    propetyId,
    value,
    open,
    setOpen,
  };
};

export default useLiveSeach;
