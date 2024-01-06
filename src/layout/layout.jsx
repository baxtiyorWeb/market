import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="w-full bg-[#FAFAFA] flex-grow min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
