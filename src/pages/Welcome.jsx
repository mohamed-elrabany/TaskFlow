import { useState, useContext } from "react";
import { avatars } from "../util/data";
import { saveUser } from "../util/storage/user";
import { replace, useNavigate } from "react-router-dom";
import Input from "../components/UI/Input";
import { UserContext } from "../context/UserContext";

export default function Welcome() {
  const {editUser}= useContext(UserContext);

    const [userName, setUserName]= useState('');
    const [userAvatar, setUserAvatar]= useState(null);

    const navigate= useNavigate();

    function handleStart(){
        if(!userName || !userAvatar) return;

        editUser({userName, userAvatar});
        navigate('/dashboard', {replace: true});
    }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <div className="flex flex-col bg-white dark:bg-gray-800 max-w-xl mx-auto px-8 py-6 gap-6 rounded-2xl shadow-2xl ">
          
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Welcome to TaskFlow
            </h1>
            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              A simple and elegant way to manage your tasks
            </p>
          </div>

          <div className="flex flex-col gap-5">
            
            <Input 
              label="What's your name?"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name" />


            <div className="flex flex-col gap-2">
              <label className="text-gray-700 dark:text-gray-300 font-medium block">
                Choose your avatar
              </label>
              <div className="grid grid-cols-5 gap-3 items-center p-4">
                {avatars.map((avatar) => (
                  <button
                  onClick={ ()=> setUserAvatar(avatar.src)}
                    key={avatar.id}
                    className={`
                    inline-flex border-2 items-center justify-center rounded-lg 
                    text-center cursor-pointer transition-all p-3
                    ${userAvatar===avatar.src 
                    ? "border-purple-600 border-2 bg-purple-200 dark:bg-purple-900/30 scale-110" 
                    : "border-gray-300 border-2 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500"}`}
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
          disabled={!userName || !userAvatar}
          onClick={handleStart}
          className={`
          text-center px-4 py-2 rounded-lg font-bold transition w-full
          ${userName && userAvatar
            ? "bg-purple-600 hover:bg-purple-700  px-4 py-2 cursor-pointer text-white"
            : "bg-gray-300 dark:bg-gray-900/50 cursor-not-allowed text-gray-600 dark:text-gray-300"
          }
          `}>
            Start using Taskflow
          </button>
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            All your data is saved locally in your browser. No account required.
          </p>
        </div>
      </div>
    </>
  );
}
