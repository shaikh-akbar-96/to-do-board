import { useState } from "react";

const Input = (props) => {
  const [input, setInput] = useState("");
  const onHandleInput = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      props.setTasklist([...props.taskList, input]);
      setInput("");
    }
  };
  return (
    <>
      <form className="flex flex-row items-center gap-3">
        <input
          className="border rounded-lg py-1 px-2 text-lg"
          type="text"
          placeholder="Add a Task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-violet-500 text-white py-2 px-3.5 rounded-lg font-semibold hover:bg-violet-600 "
          onClick={onHandleInput}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default Input;
