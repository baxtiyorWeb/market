import { useEffect, useRef, useState } from "react";

import useToggle from "../../hooks/useToggle";
import Dropdown from "./DropDown";

const MenuItems = ({ items, depthLevel, handleChoosen }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();
  const { handleToggle } = useToggle();

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
      className="menu-items relative flex w-full justify-start bg-white"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items?.childCategories ? (
        <div className="w-full">
          <button
            className="relative w-full"
            onClick={() => {
              setDropdown((prev) => !prev);
              items?.childCategories.length > 0
                ? ""
                : handleChoosen(items?.name, items?.id) && handleToggle();
            }}
          >
            {items?.name}{" "}
            {depthLevel > 1 ? (
              <>{items?.childCategories.length ? <span> &raquo; </span> : ""}</>
            ) : (
              <span>
                {items?.childCategories.length ? <span> &raquo; </span> : ""}
              </span>
            )}{" "}
          </button>{" "}
          <Dropdown
            handleChoosen={handleChoosen}
            depthLevel={depthLevel}
            submenus={items?.childCategories}
            dropdown={dropdown}
          />{" "}
        </div>
      ) : (
        // <a href="/#"> {items?.name} </a>
        <></>
      )}{" "}
    </li>
  );
};

export default MenuItems;
