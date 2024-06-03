import Slider from "./../components/Slider";
import Categoriyes from "./Categoriyes";
import Products from "./products/Products";
// eslint-disable-next-line react/prop-types
export default function Main({ setUpdate, update }) {
  return (
    <div>
      <div className="my-5 flex  h-[332px] w-full items-center justify-between border sm:flex sm:max-h-[50vh_!important] sm:max-w-full sm:flex-col">
        <Slider />
        <div className=" h-full w-[20%] rounded-xl border  border-bgColor sm:my-3 sm:h-[208px_!important] sm:w-full "></div>
      </div>
      <div>
        <Categoriyes scroll={scroll} />
      </div>
      <div>
        <Products setUpdate={setUpdate} update={update} />
      </div>
    </div>
  );
}
