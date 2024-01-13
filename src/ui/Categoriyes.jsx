/* eslint-disable react/prop-types */
import { MdClose } from "react-icons/md";
import CategoryTab from "../components/categoryTab/CategoryTab";
export default function Categoriyes({ open, setOpen , scroll}) {
  return (
    <div>
      <div
        className={
          open
            ? `fixed left-[10%] ${scroll ? "top-[100px]" : "top-[140px]"} z-50 h-[100%] w-[80%]  bg-[#FAFAFA]  opacity-100 transition-all duration-100`
            : "fixed left-[10%] top-[150px] z-[-100] h-[0%]  w-[80%]    opacity-0 transition-all duration-300"
        }
      >
        <div className="mb-10">
          <MdClose
            className="absolute right-3 top-3 mb-3 cursor-pointer text-[20px] text-slate-400 hover:text-slate-800"
            onClick={() => setOpen(!open)}
          />
        </div>
        {open ? (
          <div className="w-full ">
            <CategoryTab open={open} />
          </div>
        ) : (
          setOpen(false)
        )}
      </div>
    </div>
  );
}
