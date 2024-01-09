import Container from "../shared/Container";

// svg  icons

import menuIcon from "../assets/menuIcon.svg";
import searchIcon from "../assets/searchIcon.svg";
import plusIcon from "../assets/plusIcon.svg";
import MyListbox from "../ui/ListBox";
import { Link } from "react-router-dom";
import Navigation from "./logo/Navigation";

export default function Header() {
  return (
    <div>
      <Navigation />
      <div className="h-[100px] w-full bg-white ">
        <Container>
          <div className="flex h-full w-full items-center justify-between ">
            <button className="flex h-[50px] w-[130px] flex-shrink-0 items-center justify-between rounded-md bg-[#F4F4F4] p-2 text-center text-[#1D828E]">
              <img src={menuIcon} alt="" />
              <span className="text font-poppins  text-[18px] font-normal not-italic leading-[100%]">
                Katalog
              </span>
            </button>
            <MyListbox />

            <div className="flex items-center justify-center">
              <input
                type="text"
                placeholder="Qidiruv"
                className="h-[50px] w-[540px] rounded-md border border-[#F4F4F4] bg-[#F9F9F9] pl-[19px] text-[#959EA7] outline-none"
              />
              <button className="flex h-[50px] w-[50px] items-center justify-center rounded-[5px] bg-[#1D828E]">
                <img src={searchIcon} alt="" />
              </button>
            </div>
            <Link
              to="/add-product"
              className="flex h-[50px] w-[160px] flex-shrink-0 items-center justify-between rounded-[5px] border border-[#1D828E] p-[30px] py-4 text-[#1D828E]"
            >
              <img src={plusIcon} alt="" />
              <span className="font-poppins text-[18px] font-normal not-italic leading-[100%]">
                Qo’shish
              </span>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}
