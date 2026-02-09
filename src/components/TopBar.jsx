import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function TopBar({title}) {
  const {user, loading}= useContext(UserContext);
  if(loading) return <div>Loading...</div>

  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-8 py-4 flex items-center justify-between">
      <h2 className="font-bold text-2xl text-center text-gray-900 dark:text-white">{title}</h2>
      <div className="flex justify-center items-center gap-4">
        <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
          Welcome back, <span className="font-bold text-gray-900 dark:text-white">{user?.userName || 'Guest'}</span>
        </p>
        {user?.userAvatar && <img className="w-10 h-10" src={user?.userAvatar} alt="avatar" />}
      </div>
    </div>
  );
}
