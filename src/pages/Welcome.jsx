import { useState } from "react";
import { avatars } from "../util/data";
import { saveUser } from "../util/storage/user";
import { useNavigate } from "react-router-dom";

export default function Welcome() {

    const [userName, setUserName]= useState('');
    const [userAvatar, setUserAvatar]= useState(null);

    const navigate= useNavigate();

    function handleStart(){
        if(!userName || !userAvatar) return;

        saveUser({userName, userAvatar});
        navigate('/dashboard');
    }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col max-w-xl mx-auto px-8 py-6 gap-6 rounded-2xl shadow-2xl">
          
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-4xl text-center">
              Welcome to TaskFlow
            </h1>
            <p className="text-gray-700 text-center text-sm">
              A simple and elegant way to manage your tasks
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-gray-900 font-semibold" htmlFor="name">
                What's your name?
              </label>
              <input
              value={userName}
                className="
              px-2 py-2 rounded-lg border border-gray-300
              focus:outline-none
              focus:border-purple-400
              focus:ring-1 focus:ring-purple-600
              transition
              "
                type="text"
                placeholder="Enter your name"
                onChange={ e => setUserName(e.target.value) }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-900 font-semibold">
                Choose your avatar
              </label>
              <div className="grid grid-cols-5 gap-3 items-center p-4">
                {avatars.map((avatar) => (
                  <button
                  onClick={ ()=> setUserAvatar(avatar.src)}
                    key={avatar.id}
                    className={`
                    inline-flex border-2 items-center justify-center rounded-full 
                    text-center cursor-pointer transition-all p-3
                    ${userAvatar===avatar.src 
                    ? "border-purple-600 bg-purple-200" 
                    : "border-gray-400 hover:border-purple-500"}`}
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
          text-center px-4 py-2 rounded-lg font-bold transition
          ${userName && userAvatar
            ? "bg-purple-600 hover:bg-purple-700  px-4 py-2 cursor-pointer text-white"
            : "bg-gray-300 text-gray-500 courser-not-allowed"
          }
          `}>
            Start using Taskflow
          </button>
          <p className="text-gray-700 text-center text-sm">
            All your data is saved locally in your browser. No account required.
          </p>
        </div>
      </div>
    </>
  );
}
