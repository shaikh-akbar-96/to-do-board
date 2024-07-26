import { useState } from "react";
import Input from "./components/Input.jsx";
import Board from "./components/Board.jsx";

function App() {
  const [taskList, setTasklist] = useState([]);
  const deleteItem = (indexToDelete) => {
    console.log(indexToDelete, "indexToDelete");
    setTasklist(taskList.filter((_, index) => index !== indexToDelete));
  };
  return (
    <div className="px-12">
      <div className="flex flex-col items-center justify-center py-8 gap-4">
        <h2 className="font-semibold text-xl"> To-Do-Board</h2>
        <Input taskList={taskList} setTasklist={setTasklist} />
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12">
          {taskList.map((task, index) => (
            <Board
              task={task}
              key={index}
              index={index}
              deleteItem={deleteItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
