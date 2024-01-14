import electronicIcon from "../assets/electronic.svg";
import estateIcon from "../assets/estate.svg";
import furniture from "../assets/furniture.svg";
import materials from "../assets/materials.svg";
import servicesIcon from "../assets/services.svg";
import transportIcon from "../assets/transport.svg";
export default function Categoriyes({scroll}) {
  return (
    <div className={scroll ? "mt-[210px]" : " mt-[30px]"}>
      <div className="mt-3 flex h-[100px] w-full items-center justify-between">
        <div className="flex flex-col items-center justify-center">
          <div className="flex h-[70px] w-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFF] bg-[] shadow-sm">
            <img className="h-[30px] w-[30px]" src={transportIcon} alt="" />
          </div>
          <span className="mt-3 font-poppins text-[19px] font-normal not-italic leading-[100%] text-[#130F1E]">
            Transport
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex h-[70px] w-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFF] bg-[] shadow-sm">
            <img className="h-[30px] w-[30px]" src={estateIcon} alt="" />
          </div>
          <span className="mt-3 font-poppins text-[19px] font-normal not-italic leading-[100%] text-[#130F1E]">
            Ko’chmas mulk
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex h-[70px] w-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFF] bg-[] shadow-sm">
            <img className="h-[30px] w-[30px]" src={servicesIcon} alt="" />
          </div>
          <span className="mt-3 font-poppins text-[19px] font-normal not-italic leading-[100%] text-[#130F1E]">
            Ish va hizmatlar
          </span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex h-[70px] w-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFF] shadow-sm">
            <img className="h-[30px] w-[30px]" src={electronicIcon} alt="" />
          </div>
          <span className="mt-3 font-poppins text-[19px] font-normal not-italic leading-[100%] text-[#130F1E]">
            Elektronika va texnika
          </span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex h-[70px] w-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFF] bg-[] shadow-sm">
            <img className="h-[30px] w-[30px]" src={furniture} alt="" />
          </div>
          <span className="mt-3 font-poppins text-[19px] font-normal not-italic leading-[100%] text-[#130F1E]">
            Uy-bog’, mebel
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex h-[70px] w-[70px] cursor-pointer items-center justify-center rounded-full bg-[#FFF] bg-[] shadow-sm">
            <img className="h-[30px] w-[30px]" src={materials} alt="" />
          </div>
          <span className="mt-3 font-poppins text-[19px] font-normal not-italic leading-[100%] text-[#130F1E]">
            Qurulish mollari
          </span>
        </div>
      </div>
    </div>
  );
}
