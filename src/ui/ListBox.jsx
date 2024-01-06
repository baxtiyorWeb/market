import { useState } from "react";
import locationIcon from "../assets/location.svg";
import Overlay from "./Overlay";
const options = [
  { label: "Butun O'zbekiston" },
  { label: "Toshkent shahri" },
  { label: "Farg'ona viloyati " },
  { label: "Jizzax viloyati" },
  { label: "Xorazm viloyati" },
  { label: "Namangan Viloyati" },
  { label: "Navoiy Viloyati " },
  { label: "Qashqadaroy viloyati" },
  { label: "Samarqand viloyati" },
  { label: "Sirdaryo viloyati" },
  { label: "Surxondaryo viloyati" },
  { label: "Toshkent viloyati" },
];

export default function MyListbox() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className="relative">
      <button
        className="flex h-[50px] w-40 flex-shrink-0 items-center justify-between rounded-md bg-[#F4F4F4] p-2 text-center text-[#1D828E]"
        onClick={() => setOpen(!open)}
      >
        <img src={locationIcon} alt="" />
        <span className="text font-poppins  text-[18px] font-normal not-italic leading-[100%]">
          {value}
        </span>
      </button>
      {open ? <Overlay open={open} setOpen={setOpen} /> : open}
      <ul
        className={
          open
            ? "absolute z-50 h-[601px] w-[640px] transform  rounded-[10px] border bg-[#FFF] px-6 py-3 shadow-xl transition-all"
            : "absolute z-10 h-[601px] w-[640px] scale-0 border border-slate-500"
        }
      >
        {options.map((item, index) => (
          <li
            key={index}
            className="mt-[5px] cursor-pointer border-b border-t py-3  font-poppins text-[16px] font-normal not-italic leading-[100%] tracking-[-0.08px] text-[#747474] transition  hover:border-t hover:border-slate-500 hover:font-medium hover:text-[#000]"
            onClick={() => setValue(item.label)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
