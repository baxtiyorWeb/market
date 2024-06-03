import { Cascader } from "antd";
import { useEffect, useState } from "react";
import { getCategories } from "../../exports/api";
import "./categ.css";

const CategoryTab = ({ handleChoosen }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  const buildCategoryTree = (categories) => {
    return categories.map((category) => {
      const { id, name, childCategories } = category;
      const children =
        childCategories.length > 0 ? buildCategoryTree(childCategories) : [];
      return { value: id, label: name, children };
    });
  };

  const categoryOptions = buildCategoryTree(categories);
  const handleCategoryChange = (value, selectedOptions) => {
    if (selectedOptions && selectedOptions.length > 0) {
      const selectedCategory = selectedOptions[selectedOptions.length - 1];
      if (selectedCategory.children.length <= 0) {
        selectedCategory.label, selectedCategory.value;
        handleChoosen(selectedCategory.label, selectedCategory.value);
      }
    }
  };
  return (
    <ul className="menuss ">
      {" "}
      <Cascader
        rootClassName="categor-root-class-cascading"
        popupClassName="categor-popup-class-cascading"
        options={categoryOptions}
        placeholder="Kategoriyani tanlang"
        onChange={handleCategoryChange}
        changeOnSelect
        autoClearSearchValue
      />
    </ul>
  );
};

export default CategoryTab;
