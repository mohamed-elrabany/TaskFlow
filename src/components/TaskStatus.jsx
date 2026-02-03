import { FaTasks } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

export default function TaskStatus(){
    return(
        <div className="grid grid-cols-3 gap-5 justify-between items-center">
            <div className="flex flex-col gap-6 border-2 border-gray-300 rounded-lg px-8 py-6 bg-white">
                <div className="flex justify-between items-center gap-3">
                    <h4 className="text-gray-700 text-center text-sm font-semibold">Total Tasks</h4>
                    <FaTasks className="text-purple-600" />
                </div>
                <h1 className="font-bold text-2xl text-left">0</h1>
            </div>

            <div className="flex flex-col gap-6 border-2 border-gray-300 rounded-lg px-8 py-6 bg-white">
                <div className="flex justify-between items-center gap-3">
                    <h4 className="text-gray-700 text-center text-sm font-semibold">Completed</h4>
                    <FaRegCheckCircle className="text-green-600" />
                </div>
                <h1 className="font-bold text-2xl text-left">0</h1>
            </div>

            <div className="flex flex-col gap-6 border-2 border-gray-300 rounded-lg px-8 py-6 bg-white">
                <div className="flex justify-between items-center gap-3">
                    <h4 className="text-gray-700 text-center text-sm font-semibold">Pending</h4>
                    <MdAccessTime className="text-yellow-600" />
                </div>
                <h1 className="font-bold text-2xl text-left">0</h1>
            </div>
        </div>
    )
}