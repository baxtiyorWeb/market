import { useSearchParams } from "react-router-dom";
import Consturction from "../product/components/Consturction";
import TrackComponent from "../product/components/TrackComponent";

export default function AddProduct() {
  const [searchParamValue] = useSearchParams();

  return (
    <>
      <h1 className="text font-poppins text-[33px] font-medium not-italic leading-normal tracking-[-0.33px] text-[#130F1E]"></h1>

      <div className="child-product">
        {searchParamValue.get("q") === "Motosikl va mototexnika" && (
          <Consturction />
        )}
        {searchParamValue.get("q") === "Yuk tashish va mahsus transport" && (
          <TrackComponent />
        )}
      </div>
    </>
  );
}
