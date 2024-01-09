import React from "react";
import Container from "../../shared/Container";
import { FaGlobe, FaKey, FaUser } from "react-icons/fa";
export default function Navigation() {
  return (
    <div className="border-b bg-[#FFF] p-1 ">
      <Container>
        <div className="flex h-full items-center justify-end">
          <div className="user-menu flex items-center justify-center">
            <div
              className="ml-3 mr-3 flex cursor-pointer items-center 
              justify-center rounded-md border p-2 hover:bg-slate-200
            "
            >
              <FaGlobe className="mx-2" /> UZ
            </div>
            <div
              className="ml-3 mr-3 flex cursor-pointer items-center 
              justify-center rounded-md border p-2 hover:bg-slate-200
            "
            >
              <FaKey className="mx-2" /> Register
            </div>
            <div
              className="ml-3 mr-3 flex cursor-pointer items-center 
              justify-center rounded-md border p-2 hover:bg-slate-200
            "
            >
              <FaUser className="mx-2" /> Profil
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
