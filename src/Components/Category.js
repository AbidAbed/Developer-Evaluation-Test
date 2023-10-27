import Button from "./Button";

function Category() {
  const categoryItemStyle =
    "bg-gray-200 flex place-content-center rounded-xl p-2 m-3 text-gray-600";
  function handleAddCategory() {}
  return (
    /*TODO add responsive width */
    <div className="w-1/3 h-screen bg-gray-600">
      <div className={categoryItemStyle + " pt-2"}>Categories</div>
      <Button
        text="Add Category"
        onChange={handleAddCategory}
        className={categoryItemStyle + " hover:bg-gray-500 hover:text-gray-200"}
      />
    </div>
  );
}
export default Category;
