import Slider from "./../components/Slider";
import Categoriyes from "./Categoriyes";
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
    </div>
  );
}
