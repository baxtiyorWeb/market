import MenuItems from "./MenuItems";
const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul
      className={`dropdown shadow-none ${dropdownClass} ${
        dropdown ? "show" : "hide"
      }`}
    >
      {submenus?.map((submenu, index) => (
        <div className="border">
          <MenuItems items={submenu} depthLevel={depthLevel} key={index} />
        </div>
      ))}
    </ul>
  );
};

export default Dropdown;
