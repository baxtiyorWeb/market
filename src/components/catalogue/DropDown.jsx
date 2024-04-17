const Dropdown = ({ submenus, dropdown, depthLevel, handleChoosen }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul
      className={`dropdown absolute left-[400px] w-[400px]  border ${dropdownClass} ${
        dropdown ? "show" : ""
      }`}
    >
      {submenus?.map((submenu, index) =>
        submenu?.childCategories?.map((item) => (
          <li>
            <span>{item?.name}</span>
          </li>
        )),
      )}
    </ul>
  );
};

export default Dropdown;
