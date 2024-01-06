import React from "react";
import Container from "../shared/Container"
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { RiAppleFill, RiTelegramLine } from "react-icons/ri";
export default function Footer() {
  return (
    <div className="w-full bg-white h-[202px] flex-shrink-0 border border-[#D2D2D2] py-10 ">
        <Container>
          <div className="flex justify-between items-center">
          <div className="w-[287px] h-[66px] ">
      <h1 className="text text-[#130F1E] font-poppins text-[40px] not-italic font-medium leading-[100%] tracking-[-0.8px] ">
        LOGO
      </h1>
      <p className="text text-[#808080] font-poppins text-[18px] not-italic font-normal leading-[120%] tracking-[-0.36px] mt-[18px]">
        Kelishamiz.uz sayti orqali yanada oson toping va qulayliklarga ega bo’ling 
      </p>
     </div>
     <div className="flex justify-center items-center">
      <div className="flex flex-col mr-[92px]">
        <Link to={"#"} className="text text-[#130F1E] text-[18px] not-italic font-medium leading-[100%] tracking-[-0.36px] mt-5">Asosiy</Link>
      <Link to={"#"} className="text text-[#130F1E] text-[18px] not-italic font-medium leading-[100%] tracking-[-0.36px] mt-5">Biz haqimizda</Link>
      <Link to={"#"} className="text text-[#130F1E] text-[18px] not-italic font-medium leading-[100%] tracking-[-0.36px] mt-5">FAQ</Link>
      </div>
      <div className="flex flex-col">
        <Link to={"#"} className="text text-[#130F1E] text-[18px] not-italic font-medium leading-[100%] tracking-[-0.36px] mt-5">Login</Link>
      <Link to={"#"} className="text text-[#130F1E] text-[18px] not-italic font-medium leading-[100%] tracking-[-0.36px] mt-5">Profil</Link>
      <Link to={"#"} className="text text-[#130F1E] text-[18px] not-italic font-medium leading-[100%] tracking-[-0.36px] mt-5">A’loqa uchun </Link>
      </div>
     </div>
     <div>
      <h1 className="text text-[#130F1E] font-poppins text-[18px] not-italic font-medium leading-[100%] tracking-[-0.36px]">Ijtimoiy tarmoqlar</h1>
      <div className="flex justify-center items-center mt-4">
        <div to={"#"} className="w-[60px] h-[60px] border border-[#DFE2E5] flex-shrink-0 rounded-[5px] mr-3 cursor-pointer text-[#1D828E] flex justify-center items-center">
            <FaGoogle/>
        </div>
        <div to={"#"} className="w-[60px] h-[60px] border border-[#DFE2E5] flex-shrink-0 rounded-[5px] mr-3 cursor-pointer text-[#1D828E] flex justify-center items-center">
            <RiTelegramLine />
        </div>
        <div to={"#"} className="w-[60px] h-[60px] border border-[#DFE2E5] flex-shrink-0 rounded-[5px] mr-3 cursor-pointer text-[#1D828E] flex justify-center items-center">
          <RiAppleFill />
        </div>
      </div>
     </div>
          </div>
        </Container>
    </div>
  );
}
