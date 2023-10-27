import { useDispatch } from "react-redux";
import TODOPage from "./Pages/TODOPage";
import { addItemsFromStorage } from "./Store/StoreInterface";

function App() {
  const dispatch = useDispatch();

  const storageData = JSON.parse(localStorage.getItem("Categories"));
  if (storageData !== null) dispatch(addItemsFromStorage(storageData));

  return (
    <div>
      <TODOPage />
    </div>
  );
}

export default App;
