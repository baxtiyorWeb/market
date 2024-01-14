/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({scroll, setScroll}) {

  return (
    <div className="bg-[#FAFAFA]">
      <Header  scroll={scroll} setScroll={setScroll}/>
      <div className="w-full  flex-grow min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
