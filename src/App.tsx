import CardZone from "./components/cardZone/CardZone";
import DropZone from "./components/dropZone/DropZone";
import "remixicon/fonts/remixicon.css";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex ">
        <div className="w-1/2 flex items-center justify-center">
          <DropZone />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <CardZone />
        </div>
      </div>
      <div className="flex Item-center justify-center gap-4 h-10">
        <button className="bg-lime-500 text-white rounded w-28">
          <i className="ri-task-line"></i> Check
        </button>
        <button className="bg-yellow-400 rounded w-28">
          <i className="ri-refresh-line"></i> Reset
        </button>
      </div>
    </div>
  );
};

export default App;
