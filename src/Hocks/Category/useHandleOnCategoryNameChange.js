function useHandleOnCategoryNameChange(setRenameCategory, renameCategory) {
  return function handleOnCategoryNameChange(event, category, index) {
    setRenameCategory({
      ...renameCategory,
      [category.concat(index)]: {
        ...renameCategory[category.concat(index)],
        newName: event.target.value,
      },
    });
  };
}
export default useHandleOnCategoryNameChange;
