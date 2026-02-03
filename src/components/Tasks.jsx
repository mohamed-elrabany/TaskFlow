import { MdOutlineAdd } from "react-icons/md";
import { getTasks } from "../util/storage/tasks";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { useState, useEffect } from "react";
import TaskCard from "./UI/TaskCard";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTasks());
  }, []);


  const noTasks = (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <HiOutlineClipboardDocumentList className="font-bold w-20 h-20 text-6xl text-purple-600 bg-purple-200 rounded-full p-3" />
      <h2 className="font-semibold text-xl">No tasks yet</h2>
      <p className="text-gray-700 text-center text-sm">
        Create your first task to get started
      </p>
    </div>
  );

  return (
    <div className="bg-white border-2 border-gray-300 flex flex-col gap-5 rounded-lg p-8">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-xl">Recent Tasks</h2>
        <button className="bg-purple-600 hover:bg-purple-700 cursor-pointer text-sm text-white flex justify- gap-2 items-center text-center px-4 py-2 rounded-lg font-bold transition">
          <MdOutlineAdd className="text-white text-lg" />
          <p>Add Task</p>
        </button>
      </div>

      <div className="flex flex-col w-full gap-2">
        {tasks.length === 0 
        ? noTasks 
        : tasks.map(task => {
            <TaskCard />
        })}

        <TaskCard />
      </div>
    </div>
  );
}
