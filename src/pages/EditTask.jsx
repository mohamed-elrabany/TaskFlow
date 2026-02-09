import { useParams } from "react-router-dom";
import { getTaskById } from "../util/storage/tasks";
import { useEffect, useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";
import Input from "../components/UI/Input";
import TopBar from "../components/TopBar";

export default function EditTask() {
  const { editTask } = useContext(TaskContext);
  const navigate = useNavigate();
  const { taskId } = useParams();

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "low",
    status: "todo",
  });

  useEffect(() => {
    const task = getTaskById(taskId);
    if (!task) {
      navigate("/tasks");
      return;
    }
    setTaskData(task);
  }, [taskId, navigate]);

  function handleChange(e) {
    const { name, value } = e.target;
    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleUpdates() {
    editTask(taskId, taskData);
    navigate("/tasks");
  }

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-950 flex flex-col">
      <TopBar title="Edit Task" />

      <main className="flex flex-1 items-center justify-center">
        <div className="flex flex-col min-w-xl mx-auto px-8 py-6 gap-6 rounded-2xl shadow-xl bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700">
          <Input
            label="Task Title"
            id="title"
            name="title"
            value={taskData.title}
            onChange={handleChange}
            placeholder="Enter task title"
          />

          <div className="flex flex-col gap-2">
            <label
              htmlFor="description"
              className="text-gray-700 dark:text-gray-300 font-medium"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter task description"
              value={taskData.description}
              onChange={handleChange}
              className="px-2 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                text-gray-700 dark:text-gray-300 mb-3 block
                focus:outline-none
                focus:border-purple-400
                focus:ring-1 focus:ring-purple-600
                transition min-h-[120px]"
            />
          </div>

          <Input
            label="Due Date"
            id="dueDate"
            name="dueDate"
            type="date"
            value={taskData.dueDate}
            onChange={handleChange}
          />

          <div className="grid grid-cols-2 gap-4 justify-between items-center">
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 dark:text-gray-300 font-medium">
                Priority
              </label>
              <select
                className="text-sm border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1
                  bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300
                  focus:outline-none focus:ring-2 focus:ring-purple-500"
                name="priority"
                value={taskData.priority}
                onChange={handleChange}
                id="priority"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 dark:text-gray-300 font-medium">
                Status
              </label>
              <select
                className="text-sm border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1
                  bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300
                  focus:outline-none focus:ring-2 focus:ring-purple-500"
                name="status"
                value={taskData.status}
                onChange={handleChange}
                id="status"
              >
                <option value="todo">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 justify-between items-center">
            <button
              onClick={handleUpdates}
              className="
                text-center px-4 py-2 rounded-lg font-semibold transition
                bg-purple-600 hover:bg-purple-700 cursor-pointer text-white
              "
            >
              Update Task
            </button>

            <button
              onClick={() => navigate("/tasks")}
              className="
                text-center px-4 py-2 rounded-lg font-semibold transition border-2 border-transparent
                bg-white dark:bg-gray-900/50 hover:bg-gray-200 dark:hover:bg-gray-900
                cursor-pointer text-gray-600 dark:text-gray-300
              "
            >
              Cancel
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
