/* eslint-disable react/prop-types */
import { useState } from "react";
import locationIcon from "../assets/location.svg";
import Overlay from "./Overlay";
const options = [
  { label: "Surxondaryo" },
  { label: "Angor tumani" },
  { label: "Bandixon tumani " },
  { label: "Boysun tumani" },
  { label: "Denov tumani" },
  { label: "Jarqo'rg'on tumani" },
  { label: "Muzrobot tumani " },
  { label: "Oltinsoy tumani" },
  { label: "Qiziriq tumani" },
  { label: "Qumqo'rg'on tumani" },
  { label: "Sariosiyo tumani" },
  { label: "Sherobod tumani" },
  { label: "Sho'rchi tumani" },
  { label: "Termiz shahri" },
  { label: "Termiz tumani" },
  { label: "Uzun tumani" },
];

export default function MyListbox({ opens }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  return (
    <div>
      <button
        className={
          "flex h-[50px] w-40 flex-shrink-0 items-center justify-between rounded-md bg-[#F4F4F4] p-2 text-center text-[#1D828E]"
        }
        onClick={() => setOpen(!open && !opens)}
      >
        <img src={locationIcon} alt="" />
        <span className="text font-poppins  text-[18px] font-normal not-italic leading-[100%]">
          {text}
        </span>
      </button>
      {open ? <Overlay open={open} setOpen={setOpen} /> : open}
      <ul
        className={
          open
            ? "fixed bottom-[-10px] left-[35%] z-50  h-[90%] w-[640px]  transform items-center overflow-scroll rounded-[10px] border bg-[#FFF] px-6 py-3 shadow-xl transition-all duration-500"
            : "fixed bottom-[-600px] left-[35%] z-[-100] h-[601px] w-[640px] border border-slate-500 transition-all duration-500"
        }
      >
        <li className="flex items-center justify-center">
          <input
            type="text"
            className="mb-3 mt-1 h-10 w-full border p-3 text-[#959595] outline-none"
            placeholder="tumanlarni qidiring"
            onChange={(e) => setValue(e.target.value)}
          />
        </li>
        {options
          .filter((item) => item.label.toLowerCase().includes(value))
          .map((item, index) => (
            <li
              key={index}
              className="cursor-pointer border-b border-t py-3  font-poppins text-[16px] font-normal not-italic leading-[100%] tracking-[-0.08px] text-[#747474] transition  hover:border-t hover:border-slate-500 hover:font-medium hover:text-[#000]"
              onClick={() => setText(item.label) || setOpen(!open)}
            >
              {item.label.replace((match) => `<mark>${match}</mark>`)}
            </li>
          ))}
      </ul>
    </div>
  );
}
