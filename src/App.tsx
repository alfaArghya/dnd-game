import CardZone from "./components/cardZone/CardZone";
import DropZone from "./components/dropZone/DropZone";
import "remixicon/fonts/remixicon.css";
import { DndContext } from "@dnd-kit/core";

import { Droppable } from "./components/dropZone/DropZone";
import { Draggable } from "./components/cardZone/CardZone";
import { useState } from "react";

function App() {
  const containers = ["A", "B", "C"];
  const [parent, setParent] = useState(null);
  const draggableMarkup = <Draggable id="draggable">Drag me</Draggable>;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}

      {containers.map((id) => (
        // We updated the Droppable component so it would accept an `id`
        // prop and pass it to `useDroppable`
        <Droppable key={id} id={id}>
          {parent === id ? draggableMarkup : "Drop here"}
        </Droppable>
      ))}
    </DndContext>
  );

  function handleDragEnd(event) {
    const { over } = event;
    console.log(over);

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
}

/*
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

*/
export default App;
