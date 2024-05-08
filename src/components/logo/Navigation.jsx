import { FaGlobe } from "react-icons/fa";

import { Link } from "react-router-dom";
import m_logo from "../../assets/m_logo.png";
import Container from "../../shared/Container";
export default function Navigation() {
  return (
    <div className="max-sm:w-full h-max bg-gray-500/10   ">
      <Container>
        <div className="flex h-full items-center justify-between">
          <div className="mr-10">
            <Link to={"/"}>
              {" "}
              <img src={m_logo} alt="" className="h-[60px] w-[240px]" />
            </Link>
          </div>
          <div className="user-menu flex w-full items-center justify-end">
            <div
              className="ml-3 mr-3 flex cursor-pointer items-center 
              justify-end rounded-md   
            "
            >
              <FaGlobe className="mx-2" />
              <span className="flex h-[40px] w-[50px] items-center justify-center   border-r border-[#ffffff] text-[#212121] hover:bg-[#fdd355]">
                UZ
              </span>
              <span className="flex h-[40px] w-[50px] items-center justify-center   border-r border-[#ffffff] text-[#212121] hover:bg-[#fdd355]">
                EN
              </span>
              <span className="flex h-[40px] w-[50px] items-center justify-center   border-r border-[#ffffff] text-[#212121] hover:bg-[#fdd355]">
                RU
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
