import TopBar from "../components/TopBar";
import Input from "../components/UI/Input";
import { replace, useNavigate } from "react-router-dom";
import { avatars } from "../util/data";
import { useState, useContext, useEffect } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";
import { TaskContext } from "../context/TaskContext";
import ConfirmModal from "../components/UI/ConfirmModal";

export default function Settings() {

  const navigate=useNavigate();
  const [openModal, setOpenModal]= useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);
  const {clearTasks}=useContext(TaskContext);

  const { user, editUser, clearUser } = useContext(UserContext);
  const [userData, setUserData] = useState({
    userName: "",
    userAvatar: "",
  });

  useEffect(() => {
    if (!user) return;

    setUserData({
      userName: user.userName,
      userAvatar: user.userAvatar,
    });
  }, [user]);

  function handleSaveChanges() {
    editUser(userData);
  }

  function handleClearAll(){
    clearTasks();
    clearUser();
    setOpenModal(false);
    navigate('/welcome', {replace: true});
  }


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <TopBar title="Settings" />
      <main className="flex flex-col gap-8 p-8 bg-gray-200 dark:bg-gray-950">
        {/* User Data Part */}

        <div className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 flex flex-col gap-5 rounded-lg p-8 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">User Settings</h2>

          <div className="flex flex-col gap-5">
            <Input
              label="Name"
              value={userData.userName}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  userName: e.target.value,
                }))
              }
              placeholder="Enter your name"
            />

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 dark:text-gray-300 mb-3 block">Avatar</label>
              <div className="grid grid-cols-5 gap-3 items-center p-4">
                {avatars.map((avatar) => (
                  <button
                    key={avatar.id}
                    onClick={() =>
                      setUserData((prev) => ({
                        ...prev,
                        userAvatar: avatar.src,
                      }))
                    }
                    className={`
                            inline-flex border-2 items-center justify-center rounded-lg 
                            text-center cursor-pointer transition-all p-3
                            ${
                              userData.userAvatar === avatar.src
                                ? "border-purple-600 bg-purple-200 dark:bg-purple-900/30 scale-110"
                                : "hover:border-purple-400 dark:hover:border-purple-500 border-gray-300 dark:border-gray-600"
                            }`}
                  >
                    <img
                      src={avatar.src}
                      alt="avatar"
                      className="rounded-full w-14 h-14"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={handleSaveChanges}
            disabled={
              user.userName === userData.userName &&
              user.userAvatar === userData.userAvatar
            }
            className={`
    px-4 py-2 rounded-lg font-semibold transition-all duration-200
    ${
      user?.userName === userData.userName &&
      user?.userAvatar === userData.userAvatar
        ? "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
        : "bg-purple-600 hover:bg-purple-700 text-white cursor-pointer"
    }
  `}
          >
            Save Changes
          </button>
        </div>
        <div className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 flex flex-col gap-5 rounded-lg p-8 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Appearance</h2>

          <div className="flex justify-between items-center gap-5">
            <div className="flex gap-2 justify-center items-center">
              {theme === "dark" ? (
                <MdOutlineDarkMode className="text-gray-900 dark:text-white" size={24} />
              ) : (
                <MdOutlineLightMode className="text-gray-900 dark:text-white" size={24} />
              )}
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Dark Mode</h4>
                <p className="text-gray-500 dark:text-gray-400 text-center text-sm">
                  Toggle dark mode theme
                </p>
              </div>
            </div>
            {/* Toggle button */}
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
                className="sr-only peer"
              />
              <div
                className="
                relative mx-3 w-9 h-5 rounded-full bg-gray-400
                peer-checked:bg-purple-600
                after:content-[''] after:absolute after:top-[2px] after:start-[2px]
                after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all
                peer-checked:after:translate-x-full
              "
              />
            </label>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 flex flex-col gap-5 rounded-lg p-8 shadow-lg">
          <h2 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-6">Danger Zone</h2>

          <div className="flex justify-between items-center gap-5">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">Clear All Data</h4>
              <p className="text-gray-500 dark:text-gray-400 text-center text-sm">
                This will delete all your tasks and user data permanently
              </p>
            </div>

            <button
              onClick={()=> setOpenModal(true)}
              className="bg-red-600 hover:bg-red-700 cursor-pointer text-sm text-white flex justify- gap-2 items-center text-center px-4 py-2 rounded-lg font-bold transition"
            >
              <FaTrash className="text-white text-lg" />
              <p>Clear Data</p>
            </button>
          </div>
        </div>
        <ConfirmModal
        open={openModal}
        onConfirm={handleClearAll}
        onCancel={()=> setOpenModal(false)}
        />
      </main>
    </div>
  );
}
