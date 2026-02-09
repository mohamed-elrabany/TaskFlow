import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaTasks } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export default function Sidebar() {
  const baseLinkClasses =
    "flex gap-4 items-center justify-start w-full px-3 py-3 rounded-lg transition font-semibold";

  return (
    <aside className="w-1/3 min-h-screen shadow-[4px_0_10px_rgba(0,0,0,0.15)] px-6 py-8 gap-6 flex flex-col justify-start items-start bg-white dark:bg-gray-900">
      <div className="flex flex-col ">
        <h1 className="font-bold text-4xl text-left text-purple-600">TaskFlow</h1>
        <p className="text-gray-700 dark:text-gray-400 text-left text-sm">Manage your tasks</p>
      </div>
      

      <nav className="flex flex-col gap-2 w-full">
        <NavLink to='/dashboard'
          className={({ isActive }) =>
            `${baseLinkClasses} ${
              isActive
                ? "bg-purple-200 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-800"
            }`
          }
        >
          <LuLayoutDashboard />
          <h3>Dashboard</h3>
        </NavLink>

        <NavLink to='/tasks'
          className={({ isActive }) =>
            `${baseLinkClasses} ${
              isActive
                ? "bg-purple-200 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-800"
            }`
          }
        >
          <FaTasks />
          <h3>Tasks</h3>
        </NavLink>

        <NavLink to='/add-task'
          className={({ isActive }) =>
            `${baseLinkClasses} ${
              isActive
                ? "bg-purple-200 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-800"
            }`
          }
        >
          <MdOutlineAdd />
          <h3>Add Tasks</h3>
        </NavLink>

        <NavLink
        to='/settings'
          className={({ isActive }) =>
            `${baseLinkClasses} ${
              isActive
                ? "bg-purple-200 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-800"
            }`
          }
        >
          <IoSettingsOutline />
          <h3>Settings</h3>
        </NavLink>
      </nav>
    </aside>
  );
}
