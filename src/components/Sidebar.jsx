import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaTasks } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export default function Sidebar() {
  const baseLinkClasses =
    "flex gap-4 items-center justify-start w-full px-3 py-3 rounded-lg transition font-semibold";

  return (
    <aside className="w-1/3 min-h-screen shadow-[4px_0_10px_rgba(0,0,0,0.15)] px-6 py-8 gap-6 flex flex-col justify-start items-start">
      <div className="flex flex-col ">
        <h1 className="font-bold text-4xl text-left text-purple-600">TaskFlow</h1>
        <p className="text-gray-700 text-left text-sm">Manage your tasks</p>
      </div>
      

      <nav className="flex flex-col gap-2 w-full">
        <NavLink to='/dashboard'
          className={({ isActive }) =>
            `${baseLinkClasses} ${
              isActive
                ? "bg-purple-200 text-purple-700"
                : "text-gray-600 hover:bg-purple-200"
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
                ? "bg-purple-200 text-purple-700"
                : "text-gray-600 hover:bg-purple-200"
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
                ? "bg-purple-200 text-purple-700"
                : "text-gray-600 hover:bg-purple-200"
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
                ? "bg-purple-200 text-purple-700"
                : "text-gray-600 hover:bg-purple-200"
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
