import { useEffect, useState } from "react";
import api from "./../../config/api/api";

const CategoryTab = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const getCategory = async () => {
    try {
      setLoading(true);
      const res = await api.get("/category/all");
      const data = res.data;
      setItems(data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const findCategoryById = (categoryId, data) => {
    for (let item of data) {
      if (item.id === categoryId) {
        return item;
      }
      if (item.childCategories.length > 0) {
        const found = findCategoryById(categoryId, item.childCategories);
        if (found) return found;
      }
    }
    return null;
  };

  const toggleMenu = (categoryId) => {
    const category = findCategoryById(categoryId, items);
    if (category) {
      setSelectedCategory(category);
      setOpen(!open);
    }
  };
};
// Child component to render dropdown menu
const CategoryDropdown = ({ category, onSelect }) => {
  return (
    <div>
      <ul className="relative flex h-[100%] w-[295px]  flex-col items-start justify-center">
        {/* {items.map((item, index) => (
          <li
            className='hover:text-teal-500" flex h-[68px] w-full cursor-pointer items-center justify-between rounded-md p-1 hover:bg-[#F5F5F5]'
            key={item.id}
          >
            <div className="flex items-center justify-center">
              <img
                src={electronicIcon}
                alt="rasm"
                className="mr-3 flex h-[50px] w-[50px]  items-center justify-center rounded-full bg-white p-2 shadow-md "
              />
            </div>

            <ul className="absolute right-[-150px] top-[-30px] w-[295px]">
              {open &&
                selectedCategory?.childCategories?.map((items, index) => (
                  <li
                    className='hover:text-teal-500" flex h-[68px] w-full cursor-pointer items-center justify-between rounded-md p-1 hover:bg-[#F5F5F5]'
                    key={items.id}
                  >
                    <div className="flex items-center justify-center">
                      <img
                        src={electronicIcon}
                        alt="rasm"
                        className="mr-3 flex h-[50px] w-[50px]  items-center justify-center rounded-full bg-white p-2 shadow-md "
                      />
                    </div>
                  </li>
                ))}
            </ul>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default CategoryTab;
