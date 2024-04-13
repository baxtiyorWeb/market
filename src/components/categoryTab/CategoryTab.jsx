import React, { useEffect, useState } from "react";
import { getCategories } from "../../exports/api";
const CategoryTab = () => {
  const [category, setCategory] = useState([]);

  const res = getCategories();
  const getCateg = async () => {
    const data = await res.then((item) => item);
    setCategory(data?.data);
  };

  useEffect(() => {
    getCateg();
  }, []);
  // Bu sizning ma'lumotlaringiz
  const Menu = ({ data }) => {
    return (
      <ul className="menu">
        {data?.map((category) => (
          <MenuItem key={category.id} category={category} />
        ))}
      </ul>
    );
  };

  const MenuItem = ({ category }) => {
    return (
      <li>
        <span className="category-name">{category.name}</span>
        {category?.childCategories.length > 0 && (
          <ul>
            {category.childCategories.map((childCategory) => (
              <MenuItem key={childCategory.id} category={childCategory} />
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div>
      <div>
        <Menu data={category} />
      </div>
    </div>
  );
};

export default CategoryTab;
