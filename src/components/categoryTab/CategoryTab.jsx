import { useEffect, useState } from "react";
import electronicIcon from "../../assets/electronic.svg";
import api from "./../../config/api/api";

const DropdownMenu = ({ items, toggleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ul>
      <li onClick={() => toggleMenu(items.id)}>
        <span>{items.name}</span>
        {isOpen && items.childCategories.length > 0 && (
          <ul>
            {items.childCategories.map((child, index) => (
              <li
                className='hover:text-teal-500" flex h-[68px] w-full cursor-pointer items-center justify-between rounded-md p-1 hover:bg-[#F5F5F5]'
                key={items.id}
              >
                <div>
                  <img
                    src={electronicIcon}
                    alt="rasm"
                    className="mr-3 flex h-[50px] w-[50px]  items-center justify-center rounded-full bg-white p-2 shadow-md "
                  />
                </div>
                <DropdownMenu
                  key={index}
                  items={item}
                  toggleMenu={toggleMenu}
                />
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
};
const CategoryTab = () => {
  const [tab, setTab] = useState(1);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const getCategory = async () => {
    try {
      setLoading(true);
      const res = await api.get("/category/all");
      setItems(res.data.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);
  const tabKeys = (index) => {
    setTab(index);
  };
  const [selectedCategory, setSelectedCategory] = useState([]);
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
  return (
    <div>
      <ul className="relative flex h-[100%] w-[295px]  flex-col items-start justify-center">
        {items.map((item, index) => (
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
              <DropdownMenu key={index} items={item} toggleMenu={toggleMenu} />
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
                      <DropdownMenu
                        key={index}
                        items={items}
                        toggleMenu={toggleMenu}
                      />
                    </div>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryTab;
