import TopBar from "../components/TopBar";
import TaskCard from "../components/UI/TaskCard";
import { MdOutlineAdd } from "react-icons/md";
import { deleteTask, getTasks } from "../util/storage/tasks";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NoTasks from "../components/UI/NoTasks";
import { TaskContext } from "../context/TaskContext";


export default function Tasks() {

  const {tasks, deleteTask}= useContext(TaskContext);
  const navigate= useNavigate();


  function handleDelete(id){
    deleteTask(id);
  }


  return (
    <div>
      <TopBar title="Tasks" />
      <main className="flex flex-col gap-8 p-8 bg-gray-200">
        <div className="bg-white border-2 border-gray-300 flex flex-col gap-5 rounded-lg p-8">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <h2 className="font-semibold text-xl">Tasks ({tasks.length})</h2>
              <select
                className="text-sm border border-gray-300 rounded-lg px-3 py-1 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                name="status"
                id="status"
              >
                <option value="All Tasks">All Tasks</option>
                <option value="todo">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>

            <button onClick={()=> navigate('/add-task')} className="bg-purple-600 hover:bg-purple-700 cursor-pointer text-sm text-white flex justify- gap-2 items-center text-center px-4 py-2 rounded-lg font-bold transition">
              <MdOutlineAdd className="text-white text-lg" />
              <p>Add Task</p>
            </button>
          </div>
          <div className={`grid justify-center items-center gap-4 ${tasks.length > 0 ? "grid-cols-2" : "grid-cols-1"}`}>
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
      </main>
    </div>
  );
}
