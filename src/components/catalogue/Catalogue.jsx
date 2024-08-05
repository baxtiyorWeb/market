import React, { useEffect, useState } from "react";
import { getCategories } from "../../exports/api";
import MenuList from "./CategoryTab";

const Catalogue = ({open, setOpen}) => {
  const [items, setItems] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setItems(response.data); // Adjust according to your API response structure
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="max-h-max bg-white">
      <MenuList setOpen={setOpen} open={open} categories={items} />
    </div>
  );
};

export default Catalogue;
