import { FaGlobe } from "react-icons/fa";

import Container from "../../shared/Container";
export default function Navigation() {
  return (
    <div className="max-sm:w-full h-[50px] bg-[#FEC000] ">
      <Container>
        <div className="flex h-full items-center justify-between">
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
