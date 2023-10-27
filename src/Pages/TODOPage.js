import { useSelector } from "react-redux";
import Category from "../Components/Category";
import TODOItems from "../Components/TODOItems";
import { useEffect, useState } from "react";

function TODOPage() {
  const categories = useSelector((state) => {
    return Object.keys(state.TODOItems);
  });

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const TODOItemsFromStore = useSelector((state) => {
    return state.TODOItems[selectedCategory];
  });

  function onCategoryClick(categoryName) {
    setSelectedCategory(categoryName);
  }

  return (
    <div className="flex flex-intial w-screen h-screen">
      <Category
        categories={categories}
        onCategoryClick={onCategoryClick}
        selectedCategory={selectedCategory}
      />
      <TODOItems
        items={TODOItemsFromStore}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default TODOPage;
