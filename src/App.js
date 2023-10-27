import TODOPage from "./Pages/TODOPage";

function App() {
  console.log(JSON.parse(localStorage.getItem("Categories")));
  return (
    <div>
      <TODOPage />
    </div>
  );
}

export default App;
