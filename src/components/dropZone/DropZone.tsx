import Drop from "../ui/Drop";

import { useDroppable } from "@dnd-kit/core";

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

const DropZone = () => {
  return (
    <div className="w-full ml-10">
      <Drop title="Source" />
      <Drop title="Load" />
      <Drop title="Path" />
    </div>
  );
};

export default DropZone;
