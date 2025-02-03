import React from "react";
import { useAppContext } from "../context/AppContext";

const Sidebar = () => {
  const { categories, setSelectedCategory } = useAppContext();

  return (
    <aside className="sidebar">
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => setSelectedCategory(category)}>{category}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
