function useHandleAddTODOItem(dispatch,todoContent,addTODOItem) {
  return function handleAddTODOItem(event, selectedCategory) {

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
  };
}
export default useHandleAddTODOItem;
