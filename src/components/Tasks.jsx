import { MdOutlineAdd } from "react-icons/md";
import { getTasks, deleteTask } from "../util/storage/tasks";
import NoTasks from "./UI/NoTasks";
import { useState, useEffect } from "react";
import TaskCard from "./UI/TaskCard";
import { useNavigate } from "react-router-dom";

export default function Tasks() {
  const navigate= useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

    function handleDelete(id){
      deleteTask(id);
      setTasks(getTasks());
    }
  

  return (
    <div className="bg-white border-2 border-gray-300 flex flex-col gap-5 rounded-lg p-8">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-xl">Recent Tasks</h2>
        <button
        onClick={()=> navigate('/add-task')}
        className="bg-purple-600 hover:bg-purple-700 cursor-pointer text-sm text-white flex justify- gap-2 items-center text-center px-4 py-2 rounded-lg font-bold transition">
          <MdOutlineAdd className="text-white text-lg" />
          <p>Add Task</p>
        </button>
      </div>

      <div className='grid justify-center items-center gap-4 grid-cols-1'>
                    {tasks.length === 0 ? (
                    <NoTasks />
                  ) : (
                    tasks.map((task) => (
                      <TaskCard
                        key={task.id}
                        {...task}
                        onDelete={() => handleDelete(task.id)}
                      />
                    ))
                  )}
                </div>
    </div>
  );
}
