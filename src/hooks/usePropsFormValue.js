import { useState } from "react";

export default function usePropsFormValue(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
    reset: () => setValue(""),
  };
}
