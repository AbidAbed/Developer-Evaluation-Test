import Button from "./Button";
import Input from "./Input";

function TODOItems() {
  const TODOItemStyle =
    "bg-gray-600 flex place-content-center rounded-xl p-2 m-3 text-gray-200";

  function handleAddTODOItem() {}

  function handleOnChangeTODO() {}
  return (
    <div className="w-full h-screen bg-gray-200">
      <div className={TODOItemStyle + " pt-2"}>TODO List</div>
      <div className="flex ">
        <Input
          onChange={handleOnChangeTODO}
          className={TODOItemStyle + " w-full"}
          placeholder="TODO Content"
        />
        <Button
          onChange={handleAddTODOItem}
          className={TODOItemStyle + " hover:bg-gray-500 hover:text-gray-200"}
          text="Submit"
        />
      </div>
    </div>
  );
}
export default TODOItems;
