/* eslint-disable react/prop-types */
import { IoLocation } from "react-icons/io5";
import useToggle from "../../hooks/useToggle";
import Overlay from "./../../ui/Overlay";

const Regions = () => {
  // other states function elements
  // const [value, setValue] = useState("");

  const { handleToggle, keyWithCloseElement, isOpen } = useToggle();

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["regions"],
  //   queryFn: () => getRegions(),
  // });

  // if (error) return `Error: ${error}`;

  // if (isLoading) return <Loading />;

  // end function

  return (
    <div>
      <button
        className={
          "mx-5 flex h-[40px] w-[140px] flex-shrink-0 items-center justify-between rounded-md border border-bgColor  bg-bgColor p-1 text-center text-whiteTextColor"
        }
        onClick={handleToggle}
      >
        <IoLocation className="text-2xl text-whiteTextColor" />
        <span className="text line-clamp-1 font-poppins  text-[16px] font-normal not-italic leading-[100%]">
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
            : "fixed bottom-[-600px] left-[35%] z-[-100] h-[601px] w-[640px]   transition-all duration-300"
        }
      >
        <li className="flex items-center justify-center">
          <input
            type="text"
            className="mb-3 mt-1 h-10 w-full border p-3 text-[#959595] outline-none"
            placeholder="tumanlarni qidiring"
            // onChange={(e) => setValue(e.target.value)}
          />
        </li>

        <li
          // key={index}
          className="cursor-pointer border-b border-t py-2  font-poppins text-[16px] font-normal not-italic leading-[100%] tracking-[-0.08px] text-[#747474] transition  hover:border-t hover:border-slate-500 hover:font-medium hover:text-[#000]"
          onClick={() => setText(item.label) || handleCloseLocationMenu()}
        >
          {/* {item?.name?.replace((match) => `<mark>${match}</mark>`)} */}
        </li>
      </ul>
    </div>
  );
};

export default Regions;
