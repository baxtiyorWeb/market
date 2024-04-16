import Categoriyes from "./Categoriyes";
import Slider from "./Slider";
import Products from "./products/Products";

// eslint-disable-next-line react/prop-types
export default function Main({ scroll }) {
  return (
    <div>
      <Categoriyes scroll={scroll} />
      <Slider />
      <div>
        <Products />
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
}
