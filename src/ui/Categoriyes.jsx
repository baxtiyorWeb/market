/* eslint-disable react/prop-types */
import { MdClose } from "react-icons/md";
import CategoryTab from "../components/categoryTab/CategoryTab";
import Container from "../shared/Container";

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
            ? `scroll-wrapper fixed left-[10%] top-[21%] z-50 h-[100%] w-[80%] overflow-scroll bg-[#FAFAFA]  opacity-100 transition-all duration-100`
            : "fixed left-[10%]  top-[150px] z-[-100] h-[0%]  w-[80%]  opacity-0 transition-all duration-300"
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
        <Container>
          {open
            ? backgroundHidden() || (
                <div className="h-full w-full">
                  <CategoryTab open={open} />
                </div>
              )
            : setOpen(false) || backgroundUnset()}
        </Container>
      </div>
    </div>
  );
}
