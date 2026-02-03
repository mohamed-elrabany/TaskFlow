import Input from "../components/UI/Input";
import TopBar from "../components/Topbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addTask } from "../util/storage/tasks";

export default function AddTask() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: '',
    priority: "",
    status: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleCreateTask() {
    if (!formData.title.trim()) return;
    const task = {
      id: crypto.randomUUID(),
      ...formData,
      createdAt: Date.now(),
    };

    addTask(task);
    navigate("/tasks");
  }

  function handleCancelation() {
    navigate("/tasks");
  }
  return (
    <div className="min-h-screen">
      <TopBar title="Add New Task" />
      <main className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="flex flex-col min-w-xl mx-auto px-8 py-6 gap-6 rounded-2xl shadow-xl bg-white border-2 border-gray-300">
          <Input
            label="Task Title"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter task title"
          />

          <div className="flex flex-col gap-2">
            <label
              htmlFor="description"
              className="text-gray-900 font-semibold"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter task description"
              value={formData.description}
              onChange={handleChange}
              className="px-2 py-2 rounded-lg border border-gray-300
              focus:outline-none
              focus:border-purple-400
              focus:ring-1 focus:ring-purple-600
              transitionmt-2 min-h-[120px]"
            />
          </div>

          <Input
            label="Due Date"
            id="dueDate"
            name="dueDate"
            type="date"
            value={formData.dueDate}
            onChange={handleChange}
          />

          <div className="grid grid-cols-2 gap-4 justify-between items-center">
            <div className="flex flex-col gap-2">
              <label className="text-gray-900 font-semibold">Priority</label>
              <select
                className="text-sm border border-gray-300 rounded-lg px-3 py-1 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                id="priority"
              >
                <option value="to-do">Low</option>
                <option value="in-progress">Medium</option>
                <option value="done">High</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-900 font-semibold">Status</label>
              <select
                className="text-sm border border-gray-300 rounded-lg px-3 py-1 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                name="status"
                value={formData.status}
                onChange={handleChange}
                id="status"
              >
                <option value="to-do">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 justify-between items-center">
            <button
            onClick={handleCreateTask}
              className="
            text-center px-4 py-2 rounded-lg font-semibold transition
            bg-purple-600 hover:bg-purple-700 cursor-pointer text-white
            "
            >
              Create Task
            </button>

            <button
              onClick={handleCancelation}
              className="
            text-center px-4 py-2 rounded-lg font-semibold transition border-2 border-gray-300
            bg-white hover:bg-gray-200 cursor-pointer text-gray-600
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
