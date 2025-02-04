// components/SubmitButton.js
export default function SubmitButton({ label, onClick }) {
  return (
    <button
      className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
