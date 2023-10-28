import { GiConfirmed } from "react-icons/gi";

function useHandleEditCategoryName(
  renameCategory,
  setRenameCategory,
  dispatch,
  changeCategoryName,
  onCategoryClick
) {
  return function handleEditCategoryName(category, index) {
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
  };
}
export default useHandleEditCategoryName;
