/* eslint-disable react/prop-types */
import useToggle from "../../hooks/useToggle";
import Overlay from "./../../ui/Overlay";
import { getDistrictById, getRegions } from "./../../exports/api";
import { useQuery } from "react-query";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import { LocateIcon } from "lucide-react";

const Regions = () => {
  const [id, setId] = useState("");

  const { handleToggle, keyWithCloseElement, isOpen } = useToggle();

  const {
    data: regions,

    error,
  } = useQuery({
    queryKey: ["regions"],
    queryFn: () => getRegions(),
    enabled: !!isOpen,
  });

  const { data: district, isLoading } = useQuery({
    queryKey: ["district/all", id],
    queryFn: () => getDistrictById(id),
  });

  if (error) return `Error: ${error}`;

  return (
    <div>
      <button
        className={
          "mx-5 flex h-[35px] w-[135px] flex-shrink-0  items-center justify-between overflow-hidden text-ellipsis rounded-md border border-bgColor  bg-bgColor p-1 text-center text-whiteTextColor"
        }
        onClick={handleToggle}
      >
        <LocateIcon className="text-2xl text-whiteTextColor" />
        <span className="text line-clamp-1  text-ellipsis  font-poppins  text-[16px] font-normal not-italic leading-[100%]">
          surxondaryo
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
            : "fixed bottom-[-600px] left-[35%] z-[-100] h-[601px] w-[640px]   transition-all duration-300 "
        }
      >
        <li>{id && <button onClick={() => setId(null)}>back</button>}</li>
        <li className="flex items-center justify-center">
          <input
            type="text"
            className="mb-3 mt-1 h-10 w-full border p-3 text-[#959595] outline-none"
            placeholder="tumanlarni qidiring"
            // onChange={(e) => setValue(e.target.value)}
          />
        </li>

        {!id ? (
          regions?.data?.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer border-b border-t py-3 font-poppins text-[16px] font-normal not-italic leading-[100%] tracking-[-0.08px] text-[#747474]  transition hover:border-t hover:border-slate-500 hover:font-medium hover:text-[#000]"
              onClick={() => setId(item?.id)}
            >
              {item?.name}
            </li>
          ))
        ) : isLoading ? (
          <LoadingOutlined />
        ) : (
          district?.data?.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer border-b border-t py-3 font-poppins text-[16px] font-normal not-italic leading-[100%] tracking-[-0.08px] text-[#747474]  transition hover:border-t hover:border-slate-500 hover:font-medium hover:text-[#000]"
            >
              {item?.length ? <span>tumanlar topilmadi</span> : item?.name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Regions;
