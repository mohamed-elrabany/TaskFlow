import { avatars } from "../util/data";

export default function Welcome() {
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
                className="
              px-2 py-2 rounded-lg border border-gray-300
              focus:outline-none
              focus:border-purple-400
              focus:ring-1 focus:ring-purple-600
              transition
              "
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-900 font-semibold">
                Choose your avatar
              </label>
              <div className="grid grid-cols-5 gap-3 items-center p-4">
                {avatars.map((avatar) => (
                  <button
                    key={avatar.id}
                    className="inline-flex items-center justify-center rounded-full text-center cursor-pointer hover:ring-2 hover:ring-purple-400 transition px-4 py-3
                  border border-gray-300
                  focus:outline-none
                focus:border-gray-500
                  focus:ring-1 focus:ring-purple-600"
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

          <button className="bg-purple-600 hover:bg-purple-700 transition px-4 py-2 cursor-pointer rounded-lg text-white font-bold">
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
