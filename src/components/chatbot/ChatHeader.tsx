export default function ChatHeader() {
  return (
    <div className="border-b px-6 py-5 flex items-center justify-between">

      <div>

        <h2 className="text-2xl font-bold text-slate-900">
          AI Legal Advisor
        </h2>

        <p className="text-gray-500 mt-1">
          Ask legal questions in your preferred language and receive AI-powered guidance.
        </p>

      </div>

      <button
        className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl transition font-medium"
      >
        + New Chat
      </button>

    </div>
  );
}