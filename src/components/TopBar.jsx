import { getUser } from "../util/storage/user";

export default function TopBar({title}) {

  const userData=getUser();

  return (
    <div className="flex justify-between items-center px-7 py-4 w-full shadow-lg">
      <h2 className="font-bold text-2xl text-center">{title}</h2>
      <div className="flex justify-center items-center gap-4">
        <p className="text-gray-700 text-center text-sm">
          Welcome back, <span className="font-bold">{userData.userName}</span>
        </p>
        <img className="w-10 h-10" src={userData.userAvatar} alt="avatar" />
      </div>
    </div>
  );
}
