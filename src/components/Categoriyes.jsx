import electronicIcon from "../assets/electronic.svg";
import estateIcon from "../assets/estate.svg";
import furniture from "../assets/furniture.svg";
import materials from "../assets/materials.svg";
import servicesIcon from "../assets/services.svg";
import transportIcon from "../assets/transport.svg";
export default function Categoriyes() {
  return (
    <div className="mt-[0px]">
      {/* <h1 className="mb-[20px] font-poppins text-[33px] font-medium not-italic leading-normal tracking-[-0.66px] text-[#130F1E]">
        Kategoriyalar
      </h1> */}

      <div className="flex h-[190px] w-full items-center justify-between">
        <div className="flex flex-col items-center justify-center">
          <div className="flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-[#FFF] bg-[] shadow-sm">
            <img className="h-[45px] w-[45px]" src={transportIcon} alt="" />
          </div>
          <span className="mt-3 font-poppins text-[19px] font-normal not-italic leading-[100%] text-[#130F1E]">
            Transport
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-[#FFF] bg-[] shadow-sm">
            <img className="h-[45px] w-[45px]" src={estateIcon} alt="" />
          </div>
          <span className="mt-3 font-poppins text-[19px] font-normal not-italic leading-[100%] text-[#130F1E]">
            Ko’chmas mulk
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-[#FFF] bg-[] shadow-sm">
            <img className="h-[45px] w-[45px]" src={servicesIcon} alt="" />
          </div>
          <span className="mt-3 font-poppins text-[19px] font-normal not-italic leading-[100%] text-[#130F1E]">
            Ish va hizmatlar
          </span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-[#FFF] shadow-sm">
            <img className="h-[45px] w-[45px]" src={electronicIcon} alt="" />
          </div>
          <span className="mt-3 font-poppins text-[19px] font-normal not-italic leading-[100%] text-[#130F1E]">
            Elektronika va texnika
          </span>
        </div>

        <div>
          <div className="flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-[#FFF] bg-[] shadow-sm">
            <img className="h-[45px] w-[45px]" src={furniture} alt="" />
          </div>
          <span className="mt-3 font-poppins text-[19px] font-normal not-italic leading-[100%] text-[#130F1E]">
            Uy-bog’, mebel
          </span>
        </div>
        <div>
          <div className="flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-[#FFF] bg-[] shadow-sm">
            <img className="h-[45px] w-[45px]" src={materials} alt="" />
          </div>
          <span className="mt-3 font-poppins text-[19px] font-normal not-italic leading-[100%] text-[#130F1E]">
            Qurulish mollari
          </span>
        </div>
      </div>
    </div>
  );
}
