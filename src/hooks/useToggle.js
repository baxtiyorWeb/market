import { useState } from "react";

export default function useToggle() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleCloseLocationMenu = (e) => {
    hideLocationMenu();
  };

  const hideLocationMenu = () => {
    setOpen(false);
    document.body.style.overflow = "unset";
  };

  const showLocationMenu = () => {
    setOpen(true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };
  return {
    hideLocationMenu,
    showLocationMenu,
    handleCloseLocationMenu,
    setText,
    text,
    open,
  };
}
