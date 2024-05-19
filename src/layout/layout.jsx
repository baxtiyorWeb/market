/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/logo/Navigation";

export default function Layout({ update, setUpdate }) {
  return (
    <div className="bg-[#FFFFFF]">
      <Navigation />
      <Header update={update} setUpdate={setUpdate} />
      <div className=" min-h-screen w-full flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
