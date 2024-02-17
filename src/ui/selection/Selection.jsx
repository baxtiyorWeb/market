import { Select } from "antd";
import React from "react";
import { twMerge } from "tailwind-merge";

function Selection({ type, className, placeholder, option, onChange }) {
  return (
    <Select
      type={type}
      className={twMerge(
        "mt-2 h-[50px] w-[334px] shrink-0 rounded-[10px] border-[#E2E2E2]  bg-[#FAFAFA]   font-poppins text-[16px] outline-none",
        className,
      )}
      placeholder={placeholder}
      options={[...option]}
      onChange={onChange}
    />
  );
}

export default Selection;
