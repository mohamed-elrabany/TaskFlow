

export default function Input({ label, id, ...props }) {
  return (
    <div className="flex flex-col gap-2">
        
      {label && (
        <label htmlFor={id} className="text-gray-900 font-semibold">
          {label}
        </label>
      )}

      <input
        id={id}
        className="
              px-2 py-2 rounded-lg border border-gray-300
              focus:outline-none
              focus:border-purple-400
              focus:ring-1 focus:ring-purple-600
              transition
              "
        {...props}
      />
    </div>
  );
}
