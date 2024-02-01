import { Outlet } from "react-router-dom"
import "./layout.css"

export default function AuthLayout() {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center bg-gradient-css'>
      <Outlet />
    </div>
  );
}
