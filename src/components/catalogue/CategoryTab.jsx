import { Menu } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../exports/api";
import "./category.css";
const MenuList = ({ categories }) => {
  const renderSubMenu = (category) => {
    if (category.childCategories.length > 0) {
      return (
        <SubMenu
          key={category.id}
          title={
            <Link
              to={`/category/${category?.id}?category-name=${category?.name}`}
            >
              {category.name}
            </Link>
          }
        >
          {category.childCategories.map((child) => renderSubMenu(child))}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item key={category.id} className="menu-item">
          <Link
            to={`/category/${category?.id}?category-name=${category?.name}`}
          >
            {" "}
            {category.name}
          </Link>
        </Menu.Item>
      );
    }
  };

  return (
    <Menu mode="vertical" theme="light">
      {categories.map((category) => renderSubMenu(category))}
    </Menu>
  );
};
const Catalogue = () => {
  const [items, setItems] = useState([]);

  const data = getCategories();

  const getCateg = async () => {
    const res = await data.then((data) => data);
    setItems(res?.data);
  };

  useEffect(() => {
    getCateg();
  }, []);

  return (
    <div className="max-h-max bg-white">
      <MenuList categories={items} />
    </div>
  );
};

export default Catalogue;
