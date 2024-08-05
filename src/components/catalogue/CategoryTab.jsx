import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const transformCategoriesToMenuItems = (categories) => {
  return categories?.map((category) => {
    if (category?.childCategories && category?.childCategories?.length > 0) {
      return {
        key: category.id,
        label: (
          <Link onClick={() => setOpen(!open)} to={`/category/${category.id}?category-name=${category.name}`}>
            {category.name}
          </Link>
        ),
        children: transformCategoriesToMenuItems(category.childCategories),
      };
    } else {
      return {
        key: category.id,
        label: (
          <Link onClick={() => setOpen(!open)} to={`/category/${category.id}?category-name=${category.name}`}>
            {category.name}
          </Link>
        ),
      };
    }
  });
};

const MenuList = ({ categories,open, setOpen }) => {
  const menuItems = transformCategoriesToMenuItems(categories);
  const [menuMode, setMenuMode] = useState("vertical");

  const handleResize = () => {
    if (window.innerWidth < 1023) {
      setMenuMode("inline");
    } else {
      setMenuMode("vertical");
    }
  };

  useEffect(() => {
    handleResize(); // Set initial mode based on current window width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {menuMode !== "vertical" ? (
        <div className="flex w-full items-center  justify-between py-3 pl-3 pr-6">
          <span>Categoriya</span>
          <span className="rounded-full border p-1 text-lg">
            <MdClose onClick={() => setOpen(!open)} />
          </span>
        </div>
      ) : (
        ""
      )}
      <Menu
        mode={menuMode}
        className="shadow-[none_!important]"
        theme="light"
        defaultActiveFirst
        items={menuItems}
        inlineIndent={10}
      />
    </>
  );
};

export default MenuList;
