import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function TopBar({title}) {
  const {user, loading}= useContext(UserContext);
  if(loading) return <div>Loading...</div>

  return (
    <div className="flex justify-between items-center px-7 py-4 w-full shadow-lg">
      <h2 className="font-bold text-2xl text-center">{title}</h2>
      <div className="flex justify-center items-center gap-4">
        <p className="text-gray-700 text-center text-sm">
          Welcome back, <span className="font-bold">{user?.userName || 'Guest'}</span>
        </p>
        {user?.userAvatar && <img className="w-10 h-10" src={user?.userAvatar} alt="avatar" />}
      </div>
    </div>
  );
}
