import React from "react";
import transportIcon from "../assets/transport.svg"
import estateIcon from "../assets/estate.svg"
import servicesIcon from "../assets/services.svg"
import electronicIcon from "../assets/electronic.svg"
import furniture from "../assets/furniture.svg"
import materials from "../assets/materials.svg"
export default function Categoriyes() {
  return <div className="mt-[90px]">
    <h1 className="text-[#130F1E] font-poppins text-[33px] not-italic font-medium leading-normal tracking-[-0.66px] mb-[20px]">Kategoriyalar</h1>

    <div className="w-full flex justify-between items-center h-[190px]">
        <div className="flex justify-center items-center flex-col">
          <div className="w-[159px] h-[159px] rounded-full bg-[] bg-[#FFF] cursor-pointer shadow-sm flex justify-center items-center">
          <img src={transportIcon} alt="" />
        </div>
        <span className="text-[#130F1E] font-poppins text-[19px] not-italic font-normal leading-[100%] mt-3">Transport</span>
        </div>
        <div className="flex justify-center items-center flex-col">
        <div className="w-[160px] h-[160px] rounded-full bg-[] bg-[#FFF] cursor-pointer shadow-sm flex justify-center items-center">
          <img src={estateIcon} alt="" />
        </div>
<span className="text-[#130F1E] font-poppins text-[19px] not-italic font-normal leading-[100%] mt-3">Ko’chmas mulk</span>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="w-[160px] h-[160px] rounded-full bg-[] bg-[#FFF] cursor-pointer shadow-sm flex justify-center items-center">
          <img src={servicesIcon} alt="" />
        </div>
        <span className="text-[#130F1E] font-poppins text-[19px] not-italic font-normal leading-[100%] mt-3">Ish va hizmatlar</span>
        </div>

        <div className="flex justify-center items-center flex-col">
        <div className="w-[160px] h-[160px] rounded-full bg-[#FFF] shadow-sm flex justify-center items-center cursor-pointer">
          <img src={electronicIcon} alt="" />
        </div>
 <span className="text-[#130F1E] font-poppins text-[19px] not-italic font-normal leading-[100%] mt-3">Elektronika va texnika</span>
        </div>

        <div>
        <div className="w-[160px] h-[160px] rounded-full bg-[] bg-[#FFF] cursor-pointer shadow-sm flex justify-center items-center">
          <img src={furniture} alt="" />
        </div>
<span className="text-[#130F1E] font-poppins text-[19px] not-italic font-normal leading-[100%] mt-3">Uy-bog’, mebel</span>
        </div>
        <div>
         <div className="w-[160px] h-[160px] rounded-full bg-[] bg-[#FFF] cursor-pointer shadow-sm flex justify-center items-center">
          <img src={materials} alt="" />
        </div>
        <span className="text-[#130F1E] font-poppins text-[19px] not-italic font-normal leading-[100%] mt-3">Qurulish mollari</span>

        </div>
    </div>
  </div>;
}
