import Button from "./Button";
import {
  addCategory,
  changeCategoryName,
  removeCategory,
} from "../Store/StoreInterface";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { AiFillDelete } from "react-icons/ai";
import Input from "./Input";

function Category({
  categories,
  onCategoryClick,
  selectedCategory,
  searchMode,
}) {
  const dispatch = useDispatch();

  const [categoriesState, setCategoriesState] = useState(categories);

  const categoryItemStyle =
    "bg-gray-200 flex place-content-center rounded-xl p-2 m-1 text-gray-600";

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
    console.log("SEXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
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

  function handleAddCategory(category) {
    dispatch(addCategory(category));

    const storageCat = JSON.parse(localStorage.getItem("Categories"));

    localStorage.setItem(
      "Categories",
      JSON.stringify({ ...storageCat, [category]: [] })
    );
  }

  function handleEditCategoryName(category, index) {
    if (!renameCategory[category.concat(index)].rename) {
      setRenameCategory({
        ...renameCategory,
        [category.concat(index)]: {
          rename: true,
          newName: "",
          icon: <GiConfirmed />,
        },
      });
    } else {
      dispatch(
        changeCategoryName({
          ogName: category,
          newName: renameCategory[category.concat(index)].newName,
        })
      );

      const storageCat = JSON.parse(localStorage.getItem("Categories"));

      storageCat[renameCategory[category.concat(index)].newName] =
        storageCat[category];

      delete storageCat[category];

      localStorage.setItem("Categories", JSON.stringify(storageCat));

      onCategoryClick("Default");
    }
  }

  function handleOnCategoryNameChange(event, category, index) {
    setRenameCategory({
      ...renameCategory,
      [category.concat(index)]: {
        ...renameCategory[category.concat(index)],
        newName: event.target.value,
      },
    });
  }

  function handleDeleteCategory(category, index) {
    dispatch(removeCategory(category));

    const storageCat = JSON.parse(localStorage.getItem("Categories"));

    delete storageCat[category];


    localStorage.setItem("Categories", JSON.stringify(storageCat));

    onCategoryClick("Default");
  }

  return (
    /*TODO add responsive width */
    <div className="sm:w-96 md:w-3/5 lg:w-3/5 xl:w-96 2xl:w-96 h-screen bg-gray-600 overflow-auto">
      <div className={categoryItemStyle + " pt-2"}>Categories</div>

      {categoriesState.map((category, index) => {
        return (
          <div>
            <div
              className={
                "p-2  flex flex-row text-gray-200 hover:text-gray-300 hover:cursor-pointer m-1" +
                (selectedCategory === category
                  ? " border-gray-200 border rounded-md font-bold "
                  : "")
              }
              key={index}
            >
              <div
                onClick={() => {
                  onCategoryClick(category);
                }}
              >
                <Input
                  value={
                    renameCategory[category.concat(index)].rename
                      ? renameCategory[category.concat(index)].newName
                      : category
                  }
                  className="p-2 text-gray-200 hover:text-gray-300 hover:cursor-pointer m-1 bg-gray-600 focus:outline-none"
                  onChange={(event) => {
                    handleOnCategoryNameChange(event, category, index);
                  }}
                  disabled={!renameCategory[category.concat(index)].rename}
                />
              </div>
              {category !== "Default" ? (
                <div className="flex flex-row-reverse">
                  <Button
                    className="border rounded-xl p-2 hover:bg-gray-400"
                    onChange={(event) => {
                      handleEditCategoryName(category, index);
                    }}
                    icon={renameCategory[category.concat(index)].icon}
                  />
                  {categories.length !== 1 ? (
                    <Button
                      className="border rounded-xl p-2 hover:bg-gray-400"
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
          className={"p-2 text-gray-200 hover:text-gray-300"}
        />
      )}
    </div>
  );
}
export default Category;
