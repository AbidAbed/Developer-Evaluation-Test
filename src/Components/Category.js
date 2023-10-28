import Button from "./Button";
import { changeCategoryName, removeCategory } from "../Store/StoreInterface";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import Input from "./Input";

import { AiOutlinePlusCircle } from "react-icons/ai";
import useHandleAddCategory from "../Hocks/Category/useHandleAddCategory";
import useHandleEditCategoryName from "../Hocks/Category/useHandleEditCategoryName";
import useHandleOnCategoryNameChange from "../Hocks/Category/useHandleOnCategoryNameChange";
import useHandleDeleteCategory from "../Hocks/Category/useHandleDeleteCategory";

function Category({
  categories,
  onCategoryClick,
  selectedCategory,
  searchMode,
}) {
  const dispatch = useDispatch();

  const [categoriesState, setCategoriesState] = useState(categories);

  const [renameCategory, setRenameCategory] = useState({
    ...categories.reduce((prev, curr, index) => {
      prev[curr.concat(index)] = {
        rename: false,
        newName: "",
        icon: <MdDriveFileRenameOutline />,
      };
      return prev;
    }, {}),
  });

  // Use the categories prop directly as a dependency
  useEffect(() => {
    setCategoriesState(categories);
    setRenameCategory({
      ...categories.reduce((prev, curr, index) => {
        prev[curr.concat(index)] = {
          rename: false,
          newName: "",
          icon: <MdDriveFileRenameOutline />,
        };
        return prev;
      }, {}),
    });
  }, [categories, dispatch]);

  const handleAddCategory = useHandleAddCategory(dispatch);

  const handleEditCategoryName = useHandleEditCategoryName(
    renameCategory,
    setRenameCategory,
    dispatch,
    changeCategoryName,
    onCategoryClick
  );

  const handleOnCategoryNameChange = useHandleOnCategoryNameChange(
    setRenameCategory,
    renameCategory
  );

  const handleDeleteCategory = useHandleDeleteCategory(
    dispatch,
    onCategoryClick
  );

  return (
    /*TODO add responsive width */
    <div className="sm:w-96 md:w-3/5 lg:w-3/5 xl:w-2/5 2xl:w-2/5 h-screen bg-gray-600 overflow-auto">
      <div
        className={
          "border-t-4 border-orange-200 flex place-content-center rounded-xl p-2 m-1 text-orange-100 pt-2"
        }
      >
        Categories
      </div>

      {categoriesState.map((category, index) => {
        return (
          <div>
            <div
              className={
                "p-2  flex flex-row text-gray-200 hover:text-gray-300 hover:cursor-pointer m-1" +
                (selectedCategory === category
                  ? " border-orange-200 border rounded-md font-bold "
                  : "")
              }
              key={index}
            >
              <div
                onClick={() => {
                  onCategoryClick(category);
                }}
                className="w-full"
              >
                <Input
                  value={
                    renameCategory[category.concat(index)].rename
                      ? renameCategory[category.concat(index)].newName
                      : category
                  }
                  className="break-all p-2 text-gray-200 hover:text-gray-300 hover:cursor-pointer m-1 bg-gray-600 focus:outline-none"
                  onChange={(event) => {
                    handleOnCategoryNameChange(event, category, index);
                  }}
                  placeholder="Enter Category Name"
                  disabled={!renameCategory[category.concat(index)].rename}
                />
              </div>
              {category !== "Default" ? (
                <div className="flex flex-row-reverse ">
                  <Button
                    className="border rounded-xl p-2 hover:bg-gray-400 m-1 text-orange-200"
                    onChange={(event) => {
                      handleEditCategoryName(category, index);
                    }}
                    icon={renameCategory[category.concat(index)].icon}
                  />
                  {categories.length !== 1 ? (
                    <Button
                      className="border rounded-xl p-2 hover:bg-gray-400 m-1 text-orange-200"
                      onChange={(event) => {
                        handleDeleteCategory(category, index);
                      }}
                      icon={<AiFillDelete />}
                    />
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
      {searchMode ? null : (
        <Button
          text="Add New Category"
          onChange={(event) => {
            handleAddCategory(`New Category ${categoriesState.length}`);
          }}
          className={
            "p-2 text-gray-200 hover:text-gray-300 outline outline-1 outline-orange-200 rounded-md m-4 flex items-center hover:bg-gray-500  text-orange-200"
          }
          icon={<AiOutlinePlusCircle />}
        />
      )}
    </div>
  );
}
export default Category;
