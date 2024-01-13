import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="bg-[#FAFAFA]">
      <Header />
      <div className="w-full  flex-grow min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
