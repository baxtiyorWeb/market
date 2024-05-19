import { FaGlobe } from "react-icons/fa";

import { Select } from "antd";
import { Link } from "react-router-dom";
import m_logo from "../../assets/m_logo.png";
import { en, ru, uz } from "../../common/common";
import Container from "../../shared/Container";
export default function Navigation() {
  const language = (langText) => {
    localStorage.setItem("lang", langText);
    window.location.reload();
  };

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
  );
}
