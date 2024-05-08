/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/logo/Navigation";

export default function Layout() {
  return (
    <div className="bg-[#FFFFFF]">
      <Navigation />
      <Header />
      <div className=" min-h-screen w-full flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
