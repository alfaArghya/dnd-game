const Drop = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center rounded-md h-36 my-3 px-5 shadow shadow-blue-500/50">
      <div className="rounded bg-blue-700 text-white px-4 py-1 mr-6">
        {title}
      </div>
      <div className="text-slate-400 ">Drag Here . . . .</div>
    </div>
  );
};

export default Drop;
