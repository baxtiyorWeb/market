import { twMerge } from "tailwind-merge";

export const TextArea = ({
  minLength,
  maxLength,
  className,
  placeholder,
  onChange,
  value,
  defaultValue,
  props,
}) => {
  return (
    <textarea
      minLength={100}
      maxLength={1000}
      className={twMerge(
        "mt-2 h-[218px] w-full shrink-0 rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-3 font-poppins" +
          " text-[16px] outline-none",
        className,
      )}
      placeholder={placeholder ? placeholder : "e'lon nomini kiriting"}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
    />
  );
};
