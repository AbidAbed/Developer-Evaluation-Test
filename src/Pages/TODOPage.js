import Category from "../Components/Category";
import TODOItems from "../Components/TODOItems";

function TODOPage() {
  return (
    <div className="flex flex-intial">
      <Category />
      <TODOItems />
    </div>
  );
}

export default TODOPage;
