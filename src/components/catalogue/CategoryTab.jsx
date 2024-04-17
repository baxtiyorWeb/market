import { Menu } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import React, { useEffect, useState } from "react";
import "./category.css";
const Catalog = () => {
  const [datas, setDatas] = useState([]);

  const getCateg = async () => {
    const datas = fetch("http://95.130.227.131:8080/api/v1/category/all")
      .then((res) => res.json())
      .then((data) => setDatas(data?.data));
  };

  useEffect(() => {
    getCateg();
  }, []);
  const renderSubMenu = (category) => {
    if (category.childCategories.length > 0) {
      return (
        <SubMenu key={category.id} title={category.name}>
          {category.childCategories.map((child) => renderSubMenu(child))}
        </SubMenu>
      );
    } else {
      return <Menu.Item key={category.id}>{category.name}</Menu.Item>;
    }
  };

  return (
    <Menu mode="vertical" style={{ width: 256 }} className="custom-menu">
      {datas.map((rootCategory) => (
        <Menu.ItemGroup key={rootCategory.id} title={rootCategory.name}>
          {rootCategory.childCategories.map((category) =>
            renderSubMenu(category),
          )}
        </Menu.ItemGroup>
      ))}
    </Menu>
  );
};

const Catalogue = () => {
  return (
    <div>
      <Catalog />
    </div>
  );
};

export default Catalogue;
