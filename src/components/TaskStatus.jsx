import { FaTasks } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { useEffect, useState, useContext } from "react";
import { getCompletedTasks, getPendingTasks, getTotalTasks } from "../util/storage/tasks";
import { TaskContext } from "../context/TaskContext";

export default function TaskStatus(){
    const {tasks}= useContext(TaskContext);
    
    const total= tasks.length;
    const completed= tasks.filter(task=> task.status === "done").length;
    const pending= total-completed;

    return(
        <div className="grid grid-cols-3 gap-5 justify-between items-center">
            <div className="flex flex-col gap-6 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg px-8 py-6">
                <div className="flex justify-between items-center gap-3">
                    <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Tasks</h4>
                    <FaTasks className="text-purple-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{total}</h1>
            </div>

            <div className="flex flex-col gap-6 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg px-8 py-6">
                <div className="flex justify-between items-center gap-3">
                    <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Completed</h4>
                    <FaRegCheckCircle className="text-green-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{completed}</h1>
            </div>

            <div className="flex flex-col gap-6 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg px-8 py-6">
                <div className="flex justify-between items-center gap-3">
                    <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending</h4>
                    <MdAccessTime className="text-yellow-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{pending}</h1>
            </div>
        </div>
    )
}