import React from "react";
import Container from "../shared/Container";


// svg  icons 


import menuIcon from "../assets/menuIcon.svg";
import searchIcon from "../assets/searchIcon.svg";
import locationIcon from "../assets/location.svg"
import plusIcon from "../assets/plusIcon.svg"


export default function Header() {
  return (
    <div>
      <div className="h-[100px] w-full bg-white ">
        <Container>
          <div className="w-full flex justify-between items-center h-full ">
            <button className="bg-[#F4F4F4] text-center w-40 h-[50px] text-[#1D828E] flex justify-between items-center flex-shrink-0 rounded-md p-2">
              <img src={menuIcon} alt="" />
              <span className="text font-poppins  text-[18px] not-italic font-normal leading-[100%]">Kategoriya</span>
            </button>
            <button className="bg-[#F4F4F4] text-center w-40 h-[50px] text-[#1D828E] flex justify-between items-center flex-shrink-0 rounded-md p-2">
              <img src={locationIcon} alt="" />
              <span className="text font-poppins  text-[18px] not-italic font-normal leading-[100%]">O'zbekistan</span>
            </button>

            <div className="flex justify-center items-center">
              <input type="text" placeholder="Qidiruv" className="w-[540px] h-[50px] outline-none rounded-md border border-[#F4F4F4] bg-[#F9F9F9] text-[#959EA7] pl-[19px]" />
              <button className="w-[50px] h-[50px] bg-[#1D828E] rounded-[5px] flex justify-center items-center">
                <img src={searchIcon} alt="" />
              </button>
            </div>
            <button className="w-[160px] h-[50px] flex-shrink-0 rounded-[5px] border border-[#1D828E] text-[#1D828E] flex items-center justify-between p-[30px] py-4">
                <img src={plusIcon} alt="" />
                <span className="font-poppins text-[18px] not-italic font-normal leading-[100%]">Qo’shish</span>
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
}
