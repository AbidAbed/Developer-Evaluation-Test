import { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { addTODOItem } from "../Store/StoreInterface";
import { AiOutlineCopy } from "react-icons/ai";
import { AiFillCopy } from "react-icons/ai";

function TODOItems({
  items,
  selectedCategory,
  children,
  emptyMessage,
  searchMode,
}) {
  const [todoContent, setTodoContent] = useState("");

  const clipboards = items.reduce((prev, curr, index) => {
    prev[curr.concat(index)] = <AiOutlineCopy />;
    return prev;
  }, {});

  const [copyClipBoardIcon, setCopyClipBoardIcon] = useState(clipboards);

  useEffect(() => {
    setCopyClipBoardIcon(
      items.reduce((prev, curr, index) => {
        prev[curr.concat(index)] = <AiOutlineCopy />;
        return prev;
      }, {})
    );
  }, [items]);

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

  const handleCopyClick = async (todoText, index) => {
    try {
      await navigator.clipboard.writeText(todoText);

      setCopyClipBoardIcon({
        ...copyClipBoardIcon,
        [todoText.concat(index)]: <AiFillCopy />,
      });

      setTimeout(() => {
        setCopyClipBoardIcon({
          ...copyClipBoardIcon,
          [todoText.concat(index)]: <AiOutlineCopy />,
        });
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-200">
      {children}
      {searchMode ? null : (
        <div className="flex ">
          <Input
            onChange={(event) => {
              handleOnChangeTODO(event);
            }}
            className={TODOItemStyle + " w-full"}
            placeholder="Add New TODO Content"
            value={todoContent}
          />
          <Button
            onChange={(event) => {
              handleAddTODOItem(event, selectedCategory);
              setTodoContent("");
            }}
            className={TODOItemStyle + " hover:bg-gray-500 hover:text-gray-200"}
            text="Submit"
          />
        </div>
      )}
      <div className="pt-10">
        {items.length === 0 ? (
          emptyMessage ? (
            <p className="flex place-content-center text-gray-500">
              {emptyMessage}
            </p>
          ) : (
            <p className="flex place-content-center text-gray-500">
              This Category Is Empty
            </p>
          )
        ) : (
          items.map((item, index) => {
            return (
              <div
                className={
                  "flex flex-row bg-gray-600 rounded-xl p-2 text-gray-200 w-full p-2 m-1 text-gray-200 "
                }
                key={index}
              >
                <div className="w-full"> {item} </div>
                <div className="flex flex-row-reverse">
                  <Button
                    className="border rounded-xl p-2 hover:bg-gray-400"
                    onChange={(event) => {
                      handleCopyClick(item, index);
                    }}
                    icon={copyClipBoardIcon[item.concat(index)]}
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
export default TODOItems;
