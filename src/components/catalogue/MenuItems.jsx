import { useEffect, useRef, useState } from "react";

import { Menu } from "antd";
import DropDown from "./DropDown";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const SubMenu = Menu.SubMenu;
  const MenuItemGroup = Menu.ItemGroup;
  let ref = useRef();
  function handleClick(e) {
    console.log("click", e);
  }
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

  const [tanlanganKategoriya, setTanlanganKategoriya] = useState(null);

  const kategoriyaTanlash = (kategoriya) => {
    setTanlanganKategoriya(kategoriya.key);
  };

  return (
    <li
      className="menu-items relative flex w-full justify-start"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Menu onClick={handleClick} style={{ width: 320 }} mode="vertical">
        <SubMenu
          key="sub1"
          title={
            <span>
              {/* <Icon type="mail" /> */}
              <span>{items?.name}</span>
            </span>
          }
        >
          <Menu.ItemGroup className="" title={items?.name}>
            <DropDown
              depthLevel={depthLevel}
              submenus={items?.childCategories}
              dropdown={dropdown}
            />
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </li>
  );
};

export default MenuItems;
