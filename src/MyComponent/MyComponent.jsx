import React, { useState } from "react";

export const MyComponent = () => {
  const [tasks, setTasks] = useState([
  ]);

  const addTask = () => {
    const taskInput = document.getElementById("inp").value;
    const discInput = document.getElementById("inpdisc").value;

    if (taskInput !== "" && discInput !== "") {
      setTasks([...tasks, { task: taskInput, disc: discInput }]);
      document.getElementById("inp").value = "";
      document.getElementById("inpdisc").value = "";
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="h-screen w-screen bg-cyan-900 p-4">
      <h1 className="flex justify-center text-white text-2xl font-bold">Aaditya Todo List</h1>
      
      <div className="w-screen flex justify-center gap-2 mt-4">
        <input
          type="text"
          placeholder="Enter your Task"
          id="inp"
          className="p-2 w-60 border border-white rounded text-center font-bold"
        />
        <input
          type="text"
          placeholder="Enter your Description"
          id="inpdisc"
          className="p-2 w-60 border border-white rounded text-center font-bold"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Add Task
        </button>
      </div>

      <div className="mt-6">
        {tasks.map((item, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-gray-800 text-white rounded mb-2">
            <div>
              <span className="text-emerald-500 font-bold">Task:</span> {item.task}
              <br />
              <span className="text-green-200 font-bold">Description:</span> {item.disc}
            </div>
            <button
              onClick={() => removeTask(index)}
              className="h-10 px-4 bg-red-500 rounded text-white"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};