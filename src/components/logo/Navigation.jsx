import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import m_logo from "../../assets/m_logo.png";
import Container from "../../shared/Container";
export default function Navigation() {
  return (
    <div className=" bg-[#FFF] max-sm:w-full">
      <Container>
        <div className="flex h-full items-center justify-between">
          <div>
            <Link to={"/"}>
              {" "}
              <img src={m_logo} alt="" className="h-[60px] w-[200px]" />
            </Link>
          </div>
          <div className="user-menu flex items-center justify-center">
            <div
              className="ml-3 mr-3 flex cursor-pointer items-center 
              justify-center rounded-md border p-2 hover:bg-slate-200
            "
            >
              <FaGlobe className="mx-2" /> UZ
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
