import { Menu } from "antd";
import MenuItems from "./MenuItems";
const { Item } = Menu;
const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  const SubMenu = Menu.SubMenu;
  const MenuItemGroup = Menu.ItemGroup;
  depthLevel = depthLevel + 1;
  return submenus?.map((submenu, index) => (
    <MenuItems items={submenu} depthLevel={depthLevel} key={index} />
  ));
};

export default Dropdown;
