import Button from "./Button";

function Category({ categories, onCategoryClick, selectedCategory }) {
  const categoryItemStyle =
    "bg-gray-200 flex place-content-center rounded-xl p-2 m-1 text-gray-600";
  function handleAddCategory() {}

  return (
    /*TODO add responsive width */
    <div className="w-1/3 h-screen bg-gray-600">
      <div className={categoryItemStyle + " pt-2"}>Categories</div>

      {categories.map((category, index) => {
        return (
          <div
            className={
              "p-2  text-gray-200 hover:text-gray-300 hover:cursor-pointer m-1" +
              (selectedCategory === category
                ? " border-gray-200 border rounded-md font-bold "
                : "")
            }
            key={index}
            onClick={() => {
              onCategoryClick(category);
            }}
          >
            {category}
          </div>
        );
      })}
      <Button
        text="New Category"
        onChange={handleAddCategory}
        className={"p-2 text-gray-200 hover:text-gray-300"}
      />
    </div>
  );
}
export default Category;
