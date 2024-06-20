/* eslint-disable react/prop-types */
import { MdClose } from "react-icons/md";
import Catalogue from "../components/catalogue/CategoryTab";

export default function Categoriyes({ open, setOpen }) {
  const backgroundUnset = () => {
    document.body.style.overflow = "unset";
  };
  return (
    <div>
      <div
        className={
          open
            ? `scroll-wrapper absolute  left-40 top-24 z-[302] rounded-md bg-[#FFFFFF]  opacity-100 shadow-xl  transition-all duration-100 xs:absolute xs:right-[50%] xs:z-50`
            : "absolute left-40 top-24  z-[-100] h-[0] opacity-0 transition-all  duration-300 xs:absolute xs:left-0"
        }
      >
        <div className="mb-10">
          <MdClose
            className={`absolute right-3 top-3 mb-3 cursor-pointer text-[20px] text-slate-400 hover:text-slate-800 ${
              open ? "opacity-100 transition-all duration-0" : "opacity-0 "
            }`}
            onClick={() => setOpen(false)}
          />
        </div>
        {(open && <Catalogue open={open} />) ||
          setOpen(false) ||
          backgroundUnset()}
      </div>
    </div>
  );
}
