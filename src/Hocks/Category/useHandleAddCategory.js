import { addCategory } from "../../Store/StoreInterface";
function useHandleAddCategory(dispatch) {

  return function handleAddCategory(category) {

    dispatch(addCategory(category));

    const storageCat = JSON.parse(localStorage.getItem("Categories"));

    localStorage.setItem(
      "Categories",
      JSON.stringify({ ...storageCat, [category]: [] })
    );
  };
  
}
export default useHandleAddCategory;
