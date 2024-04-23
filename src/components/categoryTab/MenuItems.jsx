import { useEffect, useRef, useState } from "react";

import useToggle from "../../hooks/useToggle";
import Dropdown from "./DropDown";

const MenuItems = ({ items, depthLevel, handleChoosen }) => {
  const [dropdown, setDropdown] = useState(false);
  const { handleToggle } = useToggle();
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
      className="menu-itemss"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.childCategories ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => {
              items?.childCategories.length > 0
                ? ""
                : handleChoosen(items?.name, items?.id) && handleToggle();
            }}
          >
            {items?.name}{" "}
            {depthLevel > 0 ? (
              <>{items?.childCategories.length ? <span> &raquo; </span> : ""}</>
            ) : (
              <span>
                {items?.childCategories.length ? <span> &raquo; </span> : ""}
              </span>
            )}{" "}
          </button>{" "}
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.childCategories}
            dropdown={dropdown}
            handleChoosen={handleChoosen}
          />{" "}
        </>
      ) : (
        // <a href="/#"> {items?.name} </a>
        <></>
      )}{" "}
    </li>
  );
};

export default MenuItems;
