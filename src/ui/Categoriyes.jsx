/* eslint-disable react/prop-types */
import { MdClose } from "react-icons/md";
import CategoryTab from "../components/categoryTab/CategoryTab";

export default function Categoriyes({ open, setOpen }) {
  const backgroundHidden = () => {
    document.body.style.overflow = "hidden";
  };
  const backgroundUnset = () => {
    document.body.style.overflow = "unset";
  };

  return (
    <div>
      <div
        className={
          open
            ? `scroll-wrapper absolute left-[-5%] top-[100%] z-50 h-[400px] w-[300px]  rounded-md bg-[#FFF]  opacity-100 shadow-xl transition-all duration-100`
            : "absolute left-[-5%] top-[100%] z-[-100] h-[0%]  w-[300px]  opacity-0 transition-all duration-300"
        }
      >
        <div className="mb-10">
          {open && (
            <MdClose
              className="absolute right-3 top-3 mb-3 cursor-pointer text-[20px] text-slate-400 hover:text-slate-800"
              onClick={() => setOpen(false)}
            />
          )}
        </div>
        {open
          ? backgroundHidden() || <CategoryTab open={open} />
          : setOpen(false) || backgroundUnset()}
      </div>
    </div>
  );
}
