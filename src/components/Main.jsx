import React from "react";
import Slider from "./Slider";
import Categoriyes from "./Categoriyes";
import Products from "./products/Products";

export default function Main() {
  return <div>
    <Slider/>
    <div>
      <Categoriyes/>
    </div>
    <div>
      <Products/>
    </div>
  </div>;
}
