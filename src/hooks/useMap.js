import { useState } from "react";

export default function useMap() {
  const [value, setValue] = useState([]);
  const onChange = (e) => {
    console.log(e);
    setValue(e);
  };
  return {
    value,
    onChange,
  };
}
