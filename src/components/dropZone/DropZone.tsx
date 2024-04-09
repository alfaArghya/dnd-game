import Drop from "../ui/Drop";

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
