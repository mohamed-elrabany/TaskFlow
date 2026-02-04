import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCalendarClearOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { editTask } from "../../util/storage/tasks";
import { useState } from "react";

export default function TaskCard({
  id,
  title,
  description,
  priority,
  status,
  dueDate,
  onDelete,
}) {

  const [currentStatus, setCurrentStatus]= useState(status);

  function handleChange(newStatus) {
    setCurrentStatus(newStatus);
    editTask(id,{
      id,
    title,
    description,
    priority,
    status: newStatus,
    dueDate,
    });
  }

  const navigate = useNavigate();
  const priorityColorMap = {
    high: "bg-red-100 text-red-700",
    medium: "bg-yellow-100 text-yellow-700",
    low: "bg-green-100 text-green-700",
  };
  const statusColorMap = {
    todo: "bg-gray-300 text-gray-700",
    "in-progress": "bg-blue-100 text-blue-700",
    done: "bg-green-100 text-green-700",
  };

  const priorityColor =
    priorityColorMap[priority] ?? "bg-gray-100 text-gray-700";
  const statusColor = statusColorMap[status] ?? "bg-gray-100 text-gray-700";

  return (
    <div className="bg-white border-2 border-gray-300 flex flex-col gap-4 rounded-lg p-8">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-700 text-center text-xl font-semibold">
          {title}
        </h3>
        <div className="flex gap-2 justify-center items-center">
          <button
            onClick={() => navigate(`/edit-task/${id}`)}
            className="cursor-pointer p-2 text-center rounded-md hover:bg-gray-300"
          >
            <FiEdit className="text-gray-700" />
          </button>
          <button
            onClick={onDelete}
            className="cursor-pointer p-2 text-center rounded-md hover:bg-red-100"
          >
            <RiDeleteBin6Line className="text-red-600" />
          </button>
        </div>
      </div>

      <p className="text-gray-500 text-left text-sm font-medium">
        {description}
      </p>

      <div className="flex gap-2 justify-start items-center text-gray-500">
        <IoCalendarClearOutline />
        <span>
          {dueDate
            ? new Date(dueDate).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })
            : "No due date"}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2 justify-center items-center">
          <p
            className={`p-2 rounded-md text-sm font-medium capitalize ${priorityColor}`}
          >
            {priority}
          </p>
          <p
            className={`p-2 rounded-md text-sm font-medium capitalize ${statusColor}`}
          >
            {status}
          </p>
        </div>
        <select
          className="text-sm border border-gray-300 rounded-lg px-3 py-1 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          name="status"
          id="status"
          value={currentStatus}
          onChange={(e)=> handleChange(e.target.value)}
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
    </div>
  );
}
