/* eslint-disable react/prop-types */
import Container from "../shared/Container";

import { MenuOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import menuIcon from "../assets/menuIcon.svg";
import HeadUserLinks from "../components/header/HeadUserLinks";
import useProductSearch from "../hooks/product/useProductSearch";
import Categoriyes from "../ui/Categoriyes";
import Regions from "./regions/regions";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const { handleInputChange, handleButtonClick } = useProductSearch();
  const searchable = useSearchParams();
  const search = searchable[0].get("search");
  // scroll

  useEffect(() => {
    let lastScrollY = window.scrollY;
    if (typeof window !== "undefined") {
      const updateScrollDirection = () => {
        const scrollY = window.scrollY;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scroll &&
          (scrollY - lastScrollY > 1 || scrollY - lastScrollY < -10)
        ) {
          setScroll(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }
  }, []);

  return (
    <div
      className={`sticky ${
        scroll === "down" ? "top-[-180px]" : " top-0"
      } transitiona-all left-0 top-0 z-[300]   flex h-[100px] w-full  flex-col items-center justify-center bg-white  duration-500`}
    >
      <Container>
        <div className="flex h-full w-full items-center justify-between">
          <button
            className="flex h-[40px] w-[120px] flex-shrink-0 items-center justify-between rounded-md border border-bgColor bg-whiteTextColor p-2 text-center text-textColor"
            onClick={() => setOpen(!open)}
          >
            {!open ? (
              <MenuOutlined src={menuIcon} alt="" />
            ) : (
              <MdClose className=" text-[30px] " />
            )}
            <span className="text font-poppins  text-[18px] font-normal not-italic leading-[100%]">
              Katalog
            </span>
          </button>
          <Categoriyes open={open} setOpen={setOpen} scroll={scroll} />
          <div onClick={() => setOpen(false)} className="h-auto w-auto p-0  ">
            <Regions opens={open} setOpens={setOpen} />
          </div>

          <div onClick={() => setOpen(false)} className="mx-5">
            <form
              onSubmit={handleButtonClick}
              className="flex items-center justify-center"
            >
              <input
                onChange={handleInputChange}
                type="text"
                placeholder="Qidiruv"
                defaultValue={search}
                className="h-[50px] w-[650px] rounded-md border border-[#F4F4F4] bg-[#F9F9F9] pl-[19px] text-[#959EA7] outline-none"
              />
              <button
                type="submit"
                className="flex h-[50px] w-[50px] items-center justify-center rounded-[5px] bg-btnColor "
              >
                <FaSearch className="text-white" />
              </button>
            </form>
          </div>
          <div className="flex w-[25%] items-center justify-between">
            <HeadUserLinks />
          </div>
        </div>
      </Container>
    </div>
  );
}
