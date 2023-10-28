import { removeCategory } from "../../Store/StoreInterface";

function useHandleDeleteCategory(dispatch, onCategoryClick) {
  return function handleDeleteCategory(category, index) {
    dispatch(removeCategory(category));

    const storageCat = JSON.parse(localStorage.getItem("Categories"));

    delete storageCat[category];

    localStorage.setItem("Categories", JSON.stringify(storageCat));

    onCategoryClick("Default");
  };
}
export default useHandleDeleteCategory;
