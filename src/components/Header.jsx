/* eslint-disable react/prop-types */
import Container from "../shared/Container";

// svg  icons

import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { FaCartPlus, FaRegHeart, FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link, useSearchParams } from "react-router-dom";
import menuIcon from "../assets/menuIcon.svg";
import useProductSearch from "../hooks/product/useProductSearch";
import Categoriyes from "../ui/Categoriyes";
import Navigation from "./logo/Navigation";
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
          (scrollY - lastScrollY > 1 || scrollY - lastScrollY < -5)
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

  const token = true;

  return (
    <div
      className={`sticky ${
        scroll === "down" ? "top-[-180px]" : " top-0"
      } transitiona-all left-0 top-0 z-[300]  flex h-[150px] w-full  flex-col items-center justify-center bg-white  duration-500`}
    >
      <Navigation />
      <Container>
        <div className="flex h-full w-full items-center justify-between ">
          <button
            className="flex h-[50px] w-[130px] flex-shrink-0 items-center justify-between rounded-md bg-[#F4F4F4] p-2 text-center text-textColor"
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

          <div onClick={() => setOpen(false)}>
            <form
              onSubmit={handleButtonClick}
              className="flex items-center justify-center"
            >
              <input
                onChange={handleInputChange}
                type="text"
                placeholder="Qidiruv"
                defaultValue={search}
                className="h-[50px] w-[450px] rounded-md border border-[#F4F4F4] bg-[#F9F9F9] pl-[19px] text-[#959EA7] outline-none"
              />
              <button
                type="submit"
                className="flex h-[50px] w-[50px] items-center justify-center rounded-[5px] bg-btnColor "
              >
                <FaSearch className="text-white" />
              </button>
            </form>
          </div>
          {/* <Link
            
            className="hover:bg-bgColor flex h-[50px] w-[160px] flex-shrink-0 items-center justify-around rounded-[5px] border border-textColor p-[30px] py-4 text-textColor transition-all duration-100 hover:text-white"
            onClick={() => setOpen(false)}
          >
            // {/* <img src={plusIcon} alt="" />
            <span className="font-poppins text-[18px] font-normal not-italic leading-[100%]">
              {token ? "Kabinet" : " Kirish"}
            </span>
          </Link> */}

          <div>
            <Link
              to={"/"}
              className="hover/heart flex flex-col items-center justify-center"
            >
              <FaRegHeart className="text text-2xl text-textColor hover/heart:text-bgColor" />
              <span className="text text-spanColor">Sevimlilar</span>
            </Link>
          </div>
          <div>
            <Link
              to={"/"}
              className="flex flex-col items-center justify-center"
            >
              <FaCartPlus className="text text-2xl text-textColor " />
              <span className="text text-spanColor">Savatcha</span>
            </Link>
          </div>
          <div>
            <Link
              to={token ? `/profile/dashboard?tab=1` : "/auth/login"}
              className="flex flex-col items-center justify-center"
            >
              <UserOutlined className="text text-2xl text-textColor " />
              <span className="text text-spanColor">kabinet</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
