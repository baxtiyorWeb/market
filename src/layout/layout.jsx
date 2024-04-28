/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div className="bg-[#FAFAFA]">
      <Header />
      <div className=" min-h-screen w-full flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
