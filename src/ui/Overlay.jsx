import React from "react";

export default function Overlay({ open, setOpen, closed }) {
  return (
    <div
      className="fixed left-0 top-0  z-[301] h-[100vh] w-full bg-[#B2B2B280]"
      onClick={closed}
    ></div>
  );
}
