import Slider from "./../components/Slider";
import Categoriyes from "./Categoriyes";
import Products from "./products/Products";
// eslint-disable-next-line react/prop-types
export default function Main({ scroll }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Categoriyes scroll={scroll} />
        <Slider />
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
}
