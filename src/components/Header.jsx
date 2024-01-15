/* eslint-disable react/prop-types */
import Container from "../shared/Container";

// svg  icons

import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import menuIcon from "../assets/menuIcon.svg";
import plusIcon from "../assets/plusIcon.svg";
import searchIcon from "../assets/searchIcon.svg";
import Categoriyes from "../ui/Categoriyes";
import MyListbox from "../ui/ListBox";
import Navigation from "./logo/Navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scroll &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScroll(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scroll]);
  return (
    <div
      className={`sticky ${
        scroll === "down" ? "-top-[180px]" : "top-0"
      } transitiona-all left-0 top-0 z-[300] flex  h-[180px] w-full flex-col  items-center  justify-center bg-white duration-500`}
    >
      <Navigation />
      <Container>
        <div className="flex h-full w-full items-center justify-between ">
          <button
            className="flex h-[50px] w-[130px] flex-shrink-0 items-center justify-between rounded-md bg-[#F4F4F4] p-2 text-center text-[#1D828E]"
            onClick={() => setOpen(!open)}
          >
            {!open ? (
              <img src={menuIcon} alt="" />
            ) : (
              <MdClose className=" text-[30px] " />
            )}
            <span className="text font-poppins  text-[18px] font-normal not-italic leading-[100%]">
              Katalog
            </span>
          </button>
          <Categoriyes open={open} setOpen={setOpen} scroll={scroll} />
          <MyListbox opens={open} setOpens={setOpen} />

          <div
            className="flex items-center justify-center"
            onClick={() => setOpen(false)}
          >
            <input
              type="text"
              placeholder="Qidiruv"
              className="h-[50px] w-[540px] rounded-md border border-[#F4F4F4] bg-[#F9F9F9] pl-[19px] text-[#959EA7] outline-none"
            />
            <button className="flex h-[50px] w-[50px] items-center justify-center rounded-[5px] bg-[#1D828E] ">
              <img src={searchIcon} alt="" />
            </button>
          </div>
          <Link
            to="/add-product"
            className="flex h-[50px] w-[160px] flex-shrink-0 items-center justify-between rounded-[5px] border border-[#1D828E] p-[30px] py-4 text-[#1D828E]"
            onClick={() => setOpen(false)}
          >
            <img src={plusIcon} alt="" />
            <span className="font-poppins text-[18px] font-normal not-italic leading-[100%]">
              Qo’shish
            </span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
