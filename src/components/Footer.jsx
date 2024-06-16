import { FaGoogle } from "react-icons/fa";
import { RiAppleFill, RiTelegramLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Container from "../shared/Container";
export default function Footer() {
  return (
    <div className="h-[202px]  w-full flex-shrink-0 border-[#D2D2D2] bg-white py-10 xs:overflow-hidden ">
      <Container>
        <div className="flex items-center justify-between">
          <div className="h-[66px] w-[287px] ">
            <h1 className="text font-poppins text-[40px] font-medium not-italic leading-[100%] tracking-[-0.8px] text-[#130F1E] ">
              LOGO
            </h1>
            <p className="text mt-[18px] font-poppins text-[18px] font-normal not-italic leading-[120%] tracking-[-0.36px] text-[#808080]">
              Kelishamiz.uz sayti orqali yanada oson toping va qulayliklarga ega
              bo’ling
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="mr-[92px] flex flex-col">
              <Link
                to={"#"}
                className="text mt-5 text-[18px] font-medium not-italic leading-[100%] tracking-[-0.36px] text-[#130F1E]"
              >
                Asosiy
              </Link>
              <Link
                to={"#"}
                className="text mt-5 text-[18px] font-medium not-italic leading-[100%] tracking-[-0.36px] text-[#130F1E]"
              >
                Biz haqimizda
              </Link>
              <Link
                to={"#"}
                className="text mt-5 text-[18px] font-medium not-italic leading-[100%] tracking-[-0.36px] text-[#130F1E]"
              >
                FAQ
              </Link>
            </div>
            <div className="flex flex-col">
              <Link
                to={"#"}
                className="text mt-5 text-[18px] font-medium not-italic leading-[100%] tracking-[-0.36px] text-[#130F1E]"
              >
                Login
              </Link>
              <Link
                to={"#"}
                className="text mt-5 text-[18px] font-medium not-italic leading-[100%] tracking-[-0.36px] text-[#130F1E]"
              >
                Profil
              </Link>
              <Link
                to={"#"}
                className="text mt-5 text-[18px] font-medium not-italic leading-[100%] tracking-[-0.36px] text-[#130F1E]"
              >
                A’loqa uchun{" "}
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text font-poppins text-[18px] font-medium not-italic leading-[100%] tracking-[-0.36px] text-[#130F1E]">
              Ijtimoiy tarmoqlar
            </h1>
            <div className="mt-4 flex items-center justify-center">
              <div
                to={"#"}
                className="mr-3 flex h-[40px] w-[40px] flex-shrink-0 cursor-pointer items-center justify-center rounded-[5px] border border-[#DFE2E5] text-[#1D828E]"
              >
                <FaGoogle />
              </div>
              <div
                to={"#"}
                className="mr-3 flex h-[40px] w-[40px] flex-shrink-0 cursor-pointer items-center justify-center rounded-[5px] border border-[#DFE2E5] text-[#1D828E]"
              >
                <RiTelegramLine />
              </div>
              <div
                to={"#"}
                className="mr-3 flex h-[40px] w-[40px] flex-shrink-0 cursor-pointer items-center justify-center rounded-[5px] border border-[#DFE2E5] text-[#1D828E]"
              >
                <RiAppleFill />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
