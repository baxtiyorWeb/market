import { useState } from "react";

const useToggle = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleToggle = () => {
    if (isOpen === false) {
      document.body.style.overflow = "hidden";
      setisOpen(!isOpen);
    } else {
      document.body.style.overflow = "unset";
      setisOpen(!isOpen);
    }
  };

  const keyWithCloseElement = () => {
    setisOpen(false);
  };
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      keyWithCloseElement();
    }
  });

  return { handleToggle, keyWithCloseElement, isOpen };
};

export default useToggle;
