import { useEffect, useRef, useState } from "react";

import Dropdown from "./DropDown";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      className="menu-items relative flex w-full justify-start"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items?.childCategories ? (
        <div className="w-full">
          <button
            className="relative w-full"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => {
              setDropdown((prev) => !prev);
              items?.childCategories.length > 0;
            }}
          >
            {items?.name}
            {depthLevel > 0 ? (
              <span> &raquo; </span>
            ) : (
              <span className="arrow" />
            )}{" "}
          </button>{" "}
          <Dropdown
            depthLevel={depthLevel}
            submenus={items?.childCategories}
            dropdown={dropdown}
          />{" "}
        </div>
      ) : (
        // <a href="/#"> {items?.name} </a>
        <>{items?.name}</>
      )}{" "}
    </li>
  );
};

export default MenuItems;
