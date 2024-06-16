/* eslint-disable react/prop-types */
import { MenuOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { Link, useSearchParams } from "react-router-dom";
import m_logo from "../assets/logo.png";
import menuIcon from "../assets/menuIcon.svg";
import { en, ru, uz } from "../common/common";
import HeadUserLinks from "../components/header/HeadUserLinks";
import useProductSearch from "../hooks/product/useProductSearch";
import useLiveSeach from "../hooks/useLiveSeach";
import Container from "../shared/Container";
import Categoriyes from "../ui/Categoriyes";
import Regions from "./regions/regions";

export default function Header({ update, setUpdate }) {
  const { productLiveFilter, liveSearch } = useLiveSeach();
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const { handleButtonClick } = useProductSearch();
  const searchable = useSearchParams();
  const search = searchable[0].get("search");
  const language = (langText) => {
    localStorage.setItem("lang", langText);
    window.location.reload();
  };
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
    <>
      {/*<ResponsiveBottomMenu/>*/}
      <div
        className={`sticky xs:overflow-hidden   ${
          scroll === "down" ? "top-[-180px]" : " top-0"
        } transitiona-all left-0 top-0 z-[300] flex  h-[100px] w-full flex-col  items-center  justify-center bg-white duration-500   `}
      >
        <Container>
          <div className="flex h-full  w-full items-center justify-between">
            <div
              onClick={() => setOpen(!open)}
              className="xs:flex xs:h-10 xs:w-10 xs:items-center xs:justify-center xs:rounded-md xs:bg-bgColor xs:text-2xl xs_min:hidden "
            >
              {!open ? (
                <IoMenu src={menuIcon} alt="" className=" text-textColor" />
              ) : (
                <MdClose className="text-[30px] text-textColor" />
              )}
            </div>
            <Link to={"/"} className="xs:hidden">
              {" "}
              <img
                src={m_logo}
                alt=""
                className="h-[60px] w-[240px] object-cover"
              />
            </Link>

            <button
              className="flex h-[40px] w-[120px] flex-shrink-0 items-center justify-between rounded-md border border-bgColor bg-bgColor p-2 text-center text-textColor  xs:hidden"
              onClick={() => setOpen(!open)}
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
              <span className="text font-poppins text-[18px]  font-normal not-italic leading-[100%] text-whiteTextColor">
                Katalog
              </span>
            </button>
            <div className="sm:hidden xs:hidden">
              <Categoriyes open={open} setOpen={setOpen} scroll={scroll} />
            </div>

            <div
              onClick={() => setOpen(false)}
              className="h-auto w-auto p-0 xs:hidden  "
            >
              <Regions opens={open} setOpens={setOpen} />
            </div>

            <div onClick={() => setOpen(false)}>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mx-5 flex items-center justify-center xs:mx-0"
              >
                <input
                  type="text"
                  placeholder="Qidiruv"
                  defaultValue={search}
                  onChange={(e) => liveSearch(e.target.value)}
                  className="h-[40px] w-[510px] rounded-bl-md rounded-tl-md border border-bgColor bg-[#F9F9F9] pl-[19px] text-[#959EA7] outline-none xs:w-[236px]"
                />
                <button
                  type="submit"
                  className="flex h-[40px] w-[50px]  items-center justify-center rounded-br-md rounded-tr-md bg-btnColor "
                >
                  <FaSearch className="text-white" />
                </button>
              </form>
            </div>
            <div className="flex w-auto items-center justify-end xs:hidden">
              <HeadUserLinks update={update} setUpdate={setUpdate} />
            </div>
            <div className="user-menu flex w-auto items-center justify-end xs:hidden">
              <div
                className="ml-3 mr-3 flex cursor-pointer items-center
              justify-end rounded-md
            "
              >
                <Select
                  placeholder={"tilni tanlang"}
                  className="flex h-[40px] w-[90px] items-center justify-center   border-r border-[#ffffff] bg-[transparent_!important] text-[#212121] hover:bg-[#fdd355]"
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
        </Container>
      </div>
    </>
  );
}
