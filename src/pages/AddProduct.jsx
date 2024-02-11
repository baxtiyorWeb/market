import { useSearchParams } from "react-router-dom";
import TrackComponent from "../product/components/TrackComponent";
import LightCar from "../product/components/lightCar";

export default function AddProduct() {
  const [searchParamValue] = useSearchParams();

  return (
    <>
      <h1 className="text font-poppins text-[33px] font-medium not-italic leading-normal tracking-[-0.33px] text-[#130F1E]"></h1>
      <div className="child-product">
        {searchParamValue.get("q") === "Yengil avtomobil" && <LightCar />}
        {searchParamValue.get("q") === "Yuk tashish va mahsus transport" && (
          <TrackComponent  />
        )}
      </div>
    </>
  );
}
