export default function ConfirmModal({
  open,
  title = "Are you absolutely sure?",
  message = "This action cannot be undone. This will permanently delete all your tasks and user data from your browser's local storage.",
  onConfirm,
  onCancel,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onCancel}
      />

      {/* modal */}
      <div className="
        relative z-10 w-[90%] max-w-xl rounded-lg
        bg-white dark:bg-gray-800
        p-6 shadow-lg
      ">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {message}
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:justify-end">
          <button
            onClick={onCancel}
            className="
              w-full sm:w-auto font-medium cursor-pointer
              rounded-md border px-4 py-2 text-sm
              text-gray-700 dark:text-gray-300
              border-gray-300 dark:border-gray-600
              hover:bg-gray-100 dark:hover:bg-gray-700
            "
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="
              w-full sm:w-auto font-medium cursor-pointer
              rounded-md px-4 py-2 text-sm
              bg-red-600 text-white
              hover:bg-red-700
            "
          >
           Yes, clear all data
          </button>
        </div>
      </div>
    </div>
  );
}
