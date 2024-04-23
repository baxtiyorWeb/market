import { useEffect, useState } from "react";
import { getCategories } from "../../exports/api";
import MenuItems from "./MenuItems";
import "./categ.css";
const CategoryTab = ({ handleChoosen }) => {
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
    <ul className="menuss ">
      {" "}
      {items.map((menu, index) => {
        const depthLevel = 0;
        return (
          <MenuItems
            items={menu}
            key={index}
            depthLevel={depthLevel}
            handleChoosen={handleChoosen}
          />
        );
      })}{" "}
    </ul>
  );
};

export default CategoryTab;
