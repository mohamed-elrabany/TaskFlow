import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

export default function NoTasks(){
    return(
        <div className="w-full flex flex-col justify-center items-center gap-2">
      <HiOutlineClipboardDocumentList className="font-bold w-20 h-20 text-6xl text-purple-600 bg-purple-200 rounded-full p-3" />
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">No tasks yet</h2>
      <p className="text-gray-700 dark:text-gray-300 text-center text-sm">
        Create your first task to get started
      </p>
    </div>
    )
}