import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown, depthLevel, handleChoosen }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenus" : "";
  return (
    <ul className={`dropdowns ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {" "}
      {submenus.map((submenu, index) => (
        <MenuItems
          items={submenu}
          key={index}
          depthLevel={depthLevel}
          handleChoosen={handleChoosen}
        />
      ))}{" "}
    </ul>
  );
};

export default Dropdown;
