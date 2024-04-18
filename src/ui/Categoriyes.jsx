/* eslint-disable react/prop-types */
import { MdClose } from "react-icons/md";
import Catalogue from "../components/catalogue/CategoryTab";

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
            ? `scroll-wrapper absolute left-0 top-24 z-50   rounded-md bg-[#FFFFFF]  opacity-100 shadow-xl transition-all duration-100`
            : "absolute  left-0 top-24 z-[-100] h-[0]  opacity-0 transition-all duration-300"
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
          ? backgroundHidden() || <Catalogue open={open} />
          : setOpen(false) || backgroundUnset()}
      </div>
    </div>
  );
}
