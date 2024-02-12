import React from "react";
import { twMerge } from "tailwind-merge";

export default function Input({
  className,
  placeholder,
  value,
  onChange,
  type,
}) {
  return (
    <input
      type={type ? type : "text"}
      placeholder={placeholder ? placeholder : "ma'lumot kiriting"}
      value={value}
      onChange={onChange}
      className={twMerge(
        "mt-2 h-[50px] w-[334px] shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins text-[16px] outline-none",
        className,
      )}
    />
  );
}
