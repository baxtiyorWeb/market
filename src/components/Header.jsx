import React, { useCallback, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import {
  HeartOutlined,
  HomeOutlined,
  MenuOutlined,
  PlusCircleFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Select } from "antd"; // Adjust the import based on your file structure
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import en from "./../assets/en.png";
import m_logo from "./../assets/logo.png";
import menuIcon from "./../assets/menuIcon.svg";
import ru from "./../assets/ru.png";
import uz from "./../assets/uz.png";
import HeadUserLinks from "./../components/header/HeadUserLinks"; // Adjust the import based on your file structure
import Regions from "./../components/regions/regions"; // Adjust the import based on your file structure
import useLiveSeach from "./../hooks/useLiveSeach";
import Container from "./../shared/Container"; // Adjust the import based on your file structure
import Overlay from "./../ui/Overlay"; // Adjust the import based on your file structure
import Catalogue from "./catalogue/Catalogue";

const Header = ({ update, setUpdate }) => {
  const { liveSearch } = useLiveSeach();
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const searchable = useSearchParams();
  const search = searchable[0].get("search");

  const language = (langText) => {
    localStorage.setItem("lang", langText);
    window.location.reload();
  };
  const backgroundUnset = () => {
    document.body.style.overflow = "unset";
  };
  const toggleHeader = useCallback(() => {
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
      window.addEventListener("scroll", updateScrollDirection);
      return () => {
        window.removeEventListener("scroll", updateScrollDirection);
      };
    }
  }, [scroll]);

  const closed = () => {
    setOpen(!open);
  };

  useEffect(() => {
    toggleHeader();
  }, [toggleHeader]);

  return (
    <div
      className={`sticky z-[302]  xs:overflow-hidden  ${
        scroll === "down" ? "top-[-180px]" : " top-0"
      } transitiona-all left-0 top-0  flex  h-[100px] w-full flex-col  items-center  justify-center bg-white duration-500   `}
    >
      <div
        className={"lg_min_c:hidden flex w-full items-center justify-between "}
      >
        <Link to={"/"} className="">
          {" "}
          <img
            src={m_logo}
            alt=""
            className="h-[60px] w-[160px] object-cover"
          />
        </Link>
        <div className="user-menu flex w-auto items-center justify-end ">
          <div
            className=" flex cursor-pointer items-center
              justify-end rounded-md
            "
          >
            <Select
              placeholder={"tilni tanlang"}
              className="flex h-[35px] w-[90px] items-center justify-center border-r border-[#ffffff]   bg-[transparent_!important] text-[#212121] hover:bg-[#fdd355] "
              onChange={(e) => language(e)}
              value={
                localStorage.getItem("lang") === null
                  ? "uz"
                  : localStorage.getItem("lang")
              }
            >
              <Select.Option key={"uz"} value="uz">
                <div className="flex items-center justify-between">
                  {" "}
                  uz <img src={uz} alt="" className="h-5 w-5" />
                </div>
              </Select.Option>
              <Select.Option key={"en"} value="en">
                <div className="flex items-center justify-between">
                  {" "}
                  en <img src={en} alt="" className="h-5 w-5" />
                </div>
              </Select.Option>
              <Select.Option key={"ru"} value="ru">
                <div className="flex items-center justify-between">
                  {" "}
                  ru <img src={ru} alt="" className="h-5 w-5" />
                </div>
              </Select.Option>
            </Select>
          </div>
        </div>
      </div>

      <Container>
        <div className="flex h-full   w-full items-center justify-between">
          <div
            onClick={() => setOpen(!open)}
            className="lg_min_c:hidden sm:mr-3 sm:flex sm:h-10 sm:w-10 sm:items-center sm:justify-center sm:rounded-md sm:bg-bgColor md:mr-3 md:flex md:h-10 md:w-10 md:items-center md:justify-center md:rounded-md md:bg-bgColor  md:text-2xl lg:mr-3 lg:flex lg:h-10 lg:w-10 lg:items-center lg:justify-center lg:rounded-md  lg:bg-bgColor   
             lg:text-2xl xs:flex xs:h-10 xs:w-10 xs:items-center xs:justify-center xs:rounded-md xs:bg-bgColor xs:text-2xl  "
          >
            {!open ? (
              <IoMenu src={menuIcon} alt="" className=" text-textColor" />
            ) : (
              <MdClose className="text-[30px] text-textColor" />
            )}
          </div>
          <Link to={"/"} className="sm:hidden md:hidden lg:hidden xs:hidden">
            {" "}
            <img
              src={m_logo}
              alt=""
              className="h-[60px] w-[240px] object-cover"
            />
          </Link>

          <button
            className="flex h-[35px] w-[100px] flex-shrink-0 items-center justify-between rounded-md border border-bgColor bg-bgColor p-2 text-center text-textColor sm:hidden md:hidden lg:hidden  xs:hidden"
            onClick={() => closed(!open)}
          >
            {!open ? (
              <MenuOutlined
                src={menuIcon}
                alt=""
                className="text-whiteTextColor"
              />
            ) : (
              <MdClose className="text-[30px] text-whiteTextColor" />
            )}
            <span className="text font-poppins text-base  font-normal not-italic leading-[100%] text-whiteTextColor sm:hidden xs:hidden">
              Katalog
            </span>
          </button>
          {open && <Overlay closed={closed} />}
          <div
            className={
              open
                ? `scroll-wrapper fixed   left-72 top-20   z-[302]   rounded-md bg-[#FFFFFF]  opacity-100 shadow-xl  transition-all duration-100 `
                : "absolute left-[380px] top-10  z-[-100] h-[0] opacity-0  transition-all  duration-300 xs:absolute xs:left-0"
            }
          >
            {(open && <Catalogue open={open} />) || backgroundUnset()}
          </div>

          <div
            onClick={() => setOpen(false)}
            className="h-auto w-auto p-0 sm:hidden md:hidden lg:hidden  xs:hidden"
          >
            <Regions opens={open} setOpens={setOpen} />
          </div>

          <div
            onClick={() => setOpen(false)}
            className="sm:w-full md:w-full lg:w-full xs:w-full"
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className=" flex items-center justify-center sm:w-full xs:mx-0"
            >
              <input
                type="text"
                placeholder="Qidiruv"
                defaultValue={search}
                onChange={(e) => liveSearch(e.target.value)}
                className="h-[35px] w-[480px] rounded-bl-md rounded-tl-md border border-bgColor bg-[#F9F9F9] pl-[19px] text-[#959EA7] outline-none sm:w-[100%] md:w-full lg:w-full xs:w-full"
              />
              <button
                type="submit"
                className="flex h-[35px] w-[50px]  items-center justify-center rounded-br-md rounded-tr-md bg-btnColor "
              >
                <FaSearch className="text-white" />
              </button>
            </form>
          </div>
          <div className="mr-3 flex items-center  justify-end sm:hidden md:hidden lg:hidden xs:hidden">
            <HeadUserLinks update={update} setUpdate={setUpdate} />
          </div>
          <div className="user-menu flex w-auto items-center justify-end xs:hidden">
            <div
              className=" flex cursor-pointer items-center
              justify-end rounded-md
            "
            >
              <Select
                placeholder={"tilni tanlang"}
                className="flex h-[35px] w-[90px] items-center justify-center border-r border-[#ffffff]   bg-[transparent_!important] text-[#212121] hover:bg-[#fdd355] sm:hidden md:hidden lg:hidden"
                onChange={(e) => language(e)}
                value={
                  localStorage.getItem("lang") === null
                    ? "uz"
                    : localStorage.getItem("lang")
                }
              >
                <Select.Option key={"uz"} value="uz">
                  <div className="flex items-center justify-between">
                    {" "}
                    uz <img src={uz} alt="" className="h-5 w-5" />
                  </div>
                </Select.Option>
                <Select.Option key={"en"} value="en">
                  <div className="flex items-center justify-between">
                    {" "}
                    en <img src={en} alt="" className="h-5 w-5" />
                  </div>
                </Select.Option>
                <Select.Option key={"ru"} value="ru">
                  <div className="flex items-center justify-between">
                    {" "}
                    ru <img src={ru} alt="" className="h-5 w-5" />
                  </div>
                </Select.Option>
              </Select>
            </div>
          </div>
        </div>
        <div className="xs:fixed  xs:bottom-0 xs:left-0 xs:z-[99999] xs:flex xs:h-16 xs:w-full xs:items-center xs:justify-between xs:border xs:bg-whiteTextColor xs:px-5 xs_min:hidden">
          <div className="flex h-[65px] w-[65px] flex-col items-center justify-evenly  rounded-full ">
            <Link
              to={"/"}
              className="text flex h-[65px] w-[65px] flex-col items-center justify-evenly text-bgColor"
            >
              <HomeOutlined className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-bgColor  text-[20px]" />
              <span className="text-[10px]">bosh sahifa</span>
            </Link>
          </div>
          <div className="flex h-[65px] w-[65px] flex-col items-center justify-evenly  rounded-full ">
            <Link className="text flex h-[65px] w-[65px] flex-col items-center justify-evenly text-bgColor">
              <MenuOutlined className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-bgColor  text-[20px]" />
              <span className="text-[10px]">Categoriya</span>
            </Link>
          </div>
          <div className="flex h-[65px] w-[65px] flex-col items-center justify-evenly  rounded-full ">
            <Link
              to={"product-form/add-product?"}
              className="text flex h-[65px] w-[65px] flex-col items-center justify-evenly  text-bgColor"
            >
              <PlusCircleFilled className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-bgColor  text-[30px]" />
              <span className="text-[10px]">E&apos;lon berish</span>
            </Link>
          </div>
          <div className="flex h-[65px] w-[65px] flex-col items-center justify-evenly  rounded-full ">
            <Link
              to={"/profile/dashboard?tab=2"}
              className="text flex h-[65px] w-[65px] flex-col items-center justify-evenly text-bgColor"
            >
              <HeartOutlined className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-bgColor  text-[20px]" />
              <span className="text-[10px]">Sevimlilar</span>
            </Link>
          </div>
          <div className="flex h-[65px] w-[65px] flex-col items-center justify-evenly  rounded-full ">
            <Link
              to={`/profile/dashboard?tab=1`}
              className="text flex h-[65px] w-[65px] flex-col items-center justify-evenly text-bgColor"
            >
              <UserOutlined className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-bgColor  text-[20px]" />
              <span className="text-[10px]">Kabinet</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
