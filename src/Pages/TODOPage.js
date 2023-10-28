import { useSelector } from "react-redux";
import Category from "../Components/Category";
import TODOItems from "../Components/TODOItems";
import { useEffect, useState } from "react";
import Input from "../Components/Input";
import { BiSearchAlt } from "react-icons/bi";

function TODOPage() {
  const [categories, allTODOItems] = useSelector((state) => {
    return [Object.keys(state.TODOItems), state.TODOItems];
  });

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const [searchTerm, setSearchTerm] = useState("");

  const [searchItems, setSearchItems] = useState([]);

  const [searchCategories, setSearchCategories] = useState([]);

  const TODOItemsFromStore = useSelector((state) => {
    return state.TODOItems[selectedCategory];
  });

  function onCategoryClick(categoryName) {
    setSelectedCategory(categoryName);
  }

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    if (searchTerm.length !== 0) {
      const foundItems = Object.entries(allTODOItems).reduce(
        (prev, current, index) => {
          const foundTODOItems = current[1].filter((item) => {
            return item.includes(searchTerm);
          });

          if (foundTODOItems.length !== 0)
            prev[current[0]] = [...foundTODOItems];

          return prev;
        },
        {}
      );
      if (Object.keys(foundItems).length !== 0) {
        setSearchCategories(Object.keys(foundItems));
        setSearchItems(
          Object.values(foundItems).reduce((prev, curr, index) => {
            prev.push(curr);
            return prev;
          }),
          []
        );
      } else {
        setSearchCategories([]);
        setSearchItems([]);
      }
    } else {
      setSearchCategories([]);
      setSearchItems([]);
    }
  }, [searchTerm]);

  return (
    <div className="flex flex-intial w-screen h-screen">
      <Category
        searchMode={searchTerm.length !== 0 ? true : false}
        categories={searchTerm.length !== 0 ? searchCategories : categories}
        onCategoryClick={onCategoryClick}
        selectedCategory={selectedCategory}
        emptyMessage={
          searchTerm.length !== 0 ? `Can't Find "${searchTerm}"` : undefined
        }
      />
      <TODOItems
        searchMode={searchTerm.length !== 0 ? true : false}
        items={searchTerm.length !== 0 ? searchItems : TODOItemsFromStore}
        selectedCategory={selectedCategory}
        emptyMessage={
          searchTerm.length !== 0 ? `Can't Find "${searchTerm}"` : undefined
        }
      >
        <div className="flex">
          <div className="bg-gray-600 flex place-content-center rounded-md m-1 p-2 font-bold text-orange-100 pt-2">
            Welcome TO TODO List Web App
          </div>
          <div className="bg-gray-600 flex place-content-center rounded-xl m-1 p-2 text-gray-200 w-full text-orange-200 items-center">
            <BiSearchAlt />
            <Input
              onChange={(event) => {
                handleSearchTermChange(event);
              }}
              className="bg-gray-600 flex place-content-center rounded-xl m-1 p-2 text-gray-200 w-full outline outline-1"
              placeholder="Search TODO Items here"
              value={searchTerm}
            />
          </div>
        </div>
      </TODOItems>
    </div>
  );
}

export default TODOPage;
