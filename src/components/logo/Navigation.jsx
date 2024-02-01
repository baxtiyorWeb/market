import { FaGlobe, FaKey, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"
import m_logo from "../../assets/m_logo.png"
import Container from "../../shared/Container"
export default function Navigation() {
  return (
    <div className="mt-[2px] bg-[#FFF] ">
      <Container>
        <div className="flex h-full items-center justify-between">
          <Link to={"/"}>
            {" "}
            <img src={m_logo} alt="" className="h-[70px] w-[230px]" />
          </Link>
          <div className="user-menu flex items-center justify-center">
            <div
              className="ml-3 mr-3 flex cursor-pointer items-center 
              justify-center rounded-md border p-2 hover:bg-slate-200
            "
            >
              <FaGlobe className="mx-2" /> UZ
            </div>
            <Link to={"/auth/register"}>
              <div
                className="ml-3 mr-3 flex cursor-pointer items-center 
              justify-center rounded-md border p-2 hover:bg-slate-200
            "
              >
                <FaKey className="mx-2" /> Register
              </div>
            </Link>
            <Link to={'/profile/dashboard'}>
            <div
              className="ml-3 mr-3 flex cursor-pointer items-center 
              justify-center rounded-md border p-2 hover:bg-slate-200
            "
            >
              <FaUser className="mx-2" /> Profil
            </div></Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
