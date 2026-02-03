import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCalendarClearOutline } from "react-icons/io5";

export default function TaskCard({...props}){
    return(
        <div className="bg-white border-2 border-gray-300 flex flex-col gap-4 rounded-lg p-8">
            <div className="flex justify-between items-center">
                <h3 className="text-gray-700 text-center text-xl font-semibold">Title</h3>
                <div className="flex gap-2 justify-center items-center">
                    <button className="cursor-pointer p-2 text-center rounded-md hover:bg-gray-300"><FiEdit className="text-gray-700" /></button>
                    <button className="cursor-pointer p-2 text-center rounded-md hover:bg-red-100"><RiDeleteBin6Line className="text-red-600"/></button>
                </div>
            </div>

            <p className="text-gray-500 text-left text-sm font-medium">description</p>

            <div className="flex gap-2 justify-start items-center text-gray-500">
                <IoCalendarClearOutline />
                <span>{props.dueDate ? format(new Date(task.dueDate), 'MMM dd, yyyy') : 'No due date'}</span>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex gap-2 justify-center items-center">
                    <p className="p-2 rounded-md text-center text-sm bg-yellow-100 text-yellow-700 font-medium">Priority</p>
                    <p className="p-2 rounded-md bg-blue-100 text-blue-700 text-center text-sm font-medium">Status</p>
                </div>
                <select 
                className="text-sm border border-gray-300 rounded-lg px-3 py-1 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                name="" id="">
                    <option value="to-do">To Do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="done">Done</option>
                </select>
            </div>
        </div>
    )
}