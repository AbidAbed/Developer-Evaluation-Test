import { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { addTODOItem } from "../Store/StoreInterface";
import { AiOutlineCopy } from "react-icons/ai";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import useHandleAddTODOItem from "../Hocks/TODOItems/useHandleAddTODOItem";
import useHandleCopyClick from "../Hocks/TODOItems/useHandleCopyClick";

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

  const handleAddTODOItem = useHandleAddTODOItem(
    dispatch,
    todoContent,
    addTODOItem
  );

  function handleOnChangeTODO(event) {
    setTodoContent(event.target.value);
  }

  const handleCopyClick = useHandleCopyClick(
    setCopyClipBoardIcon,
    copyClipBoardIcon
  );

  return (
    <div className="w-screen h-screen bg-gray-200">
      {children}
      {searchMode ? null : (
        <div className="flex ">
          <Input
            onChange={(event) => {
              handleOnChangeTODO(event);
            }}
            className={TODOItemStyle + " w-full outline outline-1"}
            placeholder="Add New TODO Content"
            value={todoContent}
          />
          <Button
            onChange={(event) => {
              handleAddTODOItem(event, selectedCategory);
              setTodoContent("");
            }}
            className={
              TODOItemStyle +
              " flex items-center hover:bg-gray-500  text-orange-200"
            }
            text="Submit "
            icon={<BsFillArrowDownCircleFill />}
          />
        </div>
      )}
      <div className="pt-10 grid grid-cols-3 grid-rows-3 gap-2 col-span-8 ">
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
                <div className="w-full break-all border-t-4 rounded-md border-orange-200">
                  {" "}
                  {item}{" "}
                </div>
                <div className="flex flex-row-reverse">
                  <Button
                    className="border rounded-xl p-2 hover:bg-gray-400 text-orange-200"
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
