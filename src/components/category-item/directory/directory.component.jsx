import React from "react";
import "./directory.style.scss"
import CategoryItem from "../category-item.component";
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          title={category.title}
          imageUrl={category.imageUrl}
        />
      ))}
    </div>
  );
};

export default Directory;
