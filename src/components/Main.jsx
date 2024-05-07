import Slider from "./../components/Slider";
import Categoriyes from "./Categoriyes";
import Products from "./products/Products";
// eslint-disable-next-line react/prop-types
export default function Main() {
  return (
    <div>
      <div className="flex flex-col items-start justify-between ">
        <Slider />
        <Categoriyes scroll={scroll} />
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
}
