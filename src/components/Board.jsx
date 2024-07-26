const Board = (props) => {
  console.log(props.index, "index");
  return (
    <>
      <div className="max-w-md px-4 py-2 rounded-xl flex flex-col items-center justify-center border text-center text-lg">
        <p>{props.task}</p>
        <button
          onClick={() => props.deleteItem(props.index)}
          className="bg-pink-400 rounded-xl text-white px-2 py-1 mt-3 font-semibold hover:bg-pink-500"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Board;
