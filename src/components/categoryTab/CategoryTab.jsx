import React, { useEffect, useState } from "react";
import { getCategories } from "../../exports/api";
import MenuItems from "./MenuItems";
import "./category.css";
const CategoryTab = () => {
  // Bu sizning ma'lumotlaringiz
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
    <div className="relative">
      {/* className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`} */}
      <ul className="flex items-center justify-center">
        {items?.map((submenu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems items={submenu} depthLevel={depthLevel} key={index} />
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryTab;
