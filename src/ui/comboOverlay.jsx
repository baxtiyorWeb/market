import React from "react";

export default function ComboOverlay({ open, setOpen }) {
  return (
    <div
      className="fixed left-0 top-0 z-10 h-[100vh] w-full bg-slate-200/50 "
      onClick={() => setOpen(!open)}
    ></div>
  );
}
