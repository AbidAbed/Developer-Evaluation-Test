import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { addTODOItem } from "../Store/StoreInterface";

function TODOItems({ items, selectedCategory }) {
  const [todoContent, setTodoContent] = useState("");

  const dispatch = useDispatch();

  const TODOItemStyle =
    "bg-gray-600 flex place-content-center rounded-xl m-1 p-2 text-gray-200";

  function handleAddTODOItem(event, selectedCategory) {
    event.preventDefault();
    let storageCat = JSON.parse(localStorage.getItem("Categories"));
    if (storageCat === null) storageCat = {};
    localStorage.setItem(
      "Categories",
      JSON.stringify({
        ...storageCat,
        [selectedCategory]: storageCat.hasOwnProperty(selectedCategory)
          ? [...storageCat[selectedCategory], todoContent]
          : [todoContent],
      })
    );
    dispatch(
      addTODOItem({ category: selectedCategory, TODOContent: todoContent })
    );
  }

  function handleOnChangeTODO(event) {
    setTodoContent(event.target.value);
  }
  return (
    <div className="w-screen h-screen bg-gray-200">
      <div className={TODOItemStyle + " pt-2 "}>TODO List</div>
      <div className="flex ">
        <Input
          onChange={(event) => {
            handleOnChangeTODO(event);
          }}
          className={TODOItemStyle + " w-full"}
          placeholder="TODO Content"
          value={todoContent}
        />
        <Button
          onChange={(event) => {
            handleAddTODOItem(event, selectedCategory);
          }}
          className={TODOItemStyle + " hover:bg-gray-500 hover:text-gray-200"}
          text="Submit"
        />
      </div>
      <div className="pt-10">
        {items.map((item, index) => {
          return (
            <div
              className={
                "bg-gray-600 rounded-xl p-2 text-gray-200 w-full p-2 m-1 text-gray-200 "
              }
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default TODOItems;
