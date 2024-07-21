import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const transformCategoriesToMenuItems = (categories) => {
  categories;
  return categories?.map((category) => {
    if (category?.childCategories && category?.childCategories?.length > 0) {
      return {
        key: category.id,
        label: (
          <Link to={`/category/${category.id}?category-name=${category.name}`}>
            {category.name}
          </Link>
        ),
        children: transformCategoriesToMenuItems(category.childCategories),
      };
    } else {
      return {
        key: category.id,
        label: (
          <Link to={`/category/${category.id}?category-name=${category.name}`}>
            {category.name}
          </Link>
        ),
      };
    }
  });
};

const MenuList = ({ categories }) => {
  const menuItems = transformCategoriesToMenuItems(categories);

  return (
    <Menu
      mode="vertical"
      className="shadow-[none_!important] "
      theme="light"
      items={menuItems}
    />
  );
};

export default MenuList;
