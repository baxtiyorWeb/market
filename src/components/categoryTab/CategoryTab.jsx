import React, { useState } from "react";

const Category = ({ category }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (selectedCategoryId) => {
    setSelectedCategory(selectedCategoryId);
  };

  const renderChildCategories = (categories) => {
    return (
      <ul>
        {categories.map((childCategory) => (
          <li
            key={childCategory.id}
            onClick={() => handleCategorySelect(childCategory.id)}
          >
            {childCategory.name}
            {selectedCategory === childCategory.id &&
              childCategory.childCategories &&
              childCategory.childCategories.length > 0 &&
              renderChildCategories(childCategory.childCategories)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h2>Parent Categories:</h2>
      <ul>
        {category.map((parentCategory) => (
          <li
            key={parentCategory.id}
            onClick={() => handleCategorySelect(parentCategory.id)}
          >
            {parentCategory.name}
            {selectedCategory === parentCategory.id &&
              parentCategory.childCategories &&
              parentCategory.childCategories.length > 0 &&
              renderChildCategories(parentCategory.childCategories)}
          </li>
        ))}
      </ul>
    </div>
  );
};

const CategoryTab = () => {
  // Bu sizning ma'lumotlaringiz
  const data = [
    {
      id: 10,
      name: "Transport",
      childCategories: [
        {
          id: 12,
          name: "Car",
          childCategories: [
            {
              id: 20,
              name: "Electric Car",
              childCategories: [],
            },
            {
              id: 21,
              name: "Hybrid Car",
              childCategories: [
                {
                  id: 30,
                  name: "Plug-in Hybrid",
                  childCategories: [],
                },
              ],
            },
          ],
        },
        {
          id: 13,
          name: "Bike",
          childCategories: [],
        },
      ],
    },
    {
      id: 14,
      name: "Truck",
      childCategories: [
        {
          id: 15,
          name: "Kamaz",
          childCategories: [],
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Category Tree</h1>
      <Category category={data} />
    </div>
  );
};

export default CategoryTab;
