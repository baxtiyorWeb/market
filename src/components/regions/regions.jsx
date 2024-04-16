/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import locationIcon from "../../assets/location.svg";
import { getRegions } from "../../exports/api";
import useToggle from "../../hooks/useToggle";
import Loading from "../../ui/loading/Loading";
import Overlay from "./../../ui/Overlay";

const Regions = () => {
  // other states function elements
  const [value, setValue] = useState("");

  const { handleToggle, keyWithCloseElement, isOpen } = useToggle();

  const { data, isLoading, error } = useQuery({
    queryKey: ["regions"],
    queryFn: () => getRegions(),
  });

  if (error) return `Error: ${error}`;

  if (isLoading) return <Loading />;

  // end function

  return (
    <div>
      <button
        className={
          "flex h-[50px] w-40 flex-shrink-0 items-center justify-between rounded-md bg-[#F4F4F4] p-1 text-center text-[#1D828E]"
        }
        onClick={handleToggle}
      >
        <img src={locationIcon} alt="" />
        <span className="text line-clamp-1 font-poppins  text-[18px] font-normal not-italic leading-[100%]">
          {/* {text ? text : "surxondaryo "} */}
        </span>
      </button>
      {isOpen ? (
        <Overlay closed={handleToggle} closeKey={keyWithCloseElement} />
      ) : (
        isOpen
      )}
      <ul
        className={
          isOpen
            ? "fixed bottom-[-10px] left-[35%] z-[901]  h-[90%] w-[640px]  transform items-center overflow-scroll rounded-[10px] border bg-[#FFF] px-6 py-3 shadow-xl transition-all duration-300"
            : "fixed bottom-[-600px] left-[35%] z-[-100] h-[601px] w-[640px]   transition-all duration-300"
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
        {data?.data
          ?.filter((item) => item?.name?.toLowerCase().includes(value))
          .map((item, index) => (
            <li
              key={index}
              className="cursor-pointer border-b border-t py-2  font-poppins text-[16px] font-normal not-italic leading-[100%] tracking-[-0.08px] text-[#747474] transition  hover:border-t hover:border-slate-500 hover:font-medium hover:text-[#000]"
              onClick={() => setText(item.label) || handleCloseLocationMenu()}
            >
              {item?.name?.replace((match) => `<mark>${match}</mark>`)}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Regions;
