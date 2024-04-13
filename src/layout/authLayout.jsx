import { Outlet } from "react-router-dom";
import "./layout.css";

export default function AuthLayout() {
  return (
    <div className="flex h-[100vh] w-full flex-col items-center justify-center">
      <h1 className="mb-10 mt-1 text-3xl">
        <span className="text-teal-500">Kelishamiz.uz</span> saytiga hush
        kelibsiz
      </h1>
      <div className="flex h-[629px] w-[600px] items-center justify-center bg-white shadow-lg">
        <Outlet />
      </div>
    </div>
  );
}
