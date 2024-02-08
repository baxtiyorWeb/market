import { useSearchParams } from "react-router-dom"
import LightCar from "../product/components/lightCar"
import Transport from '../product/components/transport'

export default function AddProduct() {
  const [searchParamValue] = useSearchParams();

  return (
    <>
    <h1 className="text font-poppins text-[33px] font-medium not-italic leading-normal tracking-[-0.33px] text-[#130F1E]"></h1>
      <div className="child-product">
        {searchParamValue.get("q") === "Yengil avtomobil" && <LightCar />}
        {searchParamValue.get("q") === "s" && <Transport />}
      </div>
    </>
  );
}
