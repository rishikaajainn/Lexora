export default function CourtRehearsalPage() {
  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>
        <h1 className="text-4xl font-bold">
          Court Rehearsal
        </h1>

        <p className="text-gray-500 mt-2">
          Practice answering legal questions before your hearing.
        </p>
      </div>

      {/* Case Selection */}

      <div className="bg-white border rounded-2xl shadow-sm p-6">

        <h2 className="text-xl font-semibold mb-4">
          Select Case Type
        </h2>

        <select className="w-full border rounded-xl p-3">
          <option>Choose a case type</option>
          <option>Family Law</option>
          <option>Property Dispute</option>
          <option>Consumer Complaint</option>
          <option>Employment Issue</option>
          <option>Criminal Case</option>
        </select>

      </div>

      {/* AI Question */}

      <div className="bg-white border rounded-2xl shadow-sm p-6">

        <h2 className="text-xl font-semibold">
          AI Judge Question
        </h2>

        <div className="mt-4 rounded-xl bg-slate-50 p-5">
          <p>
            Please explain what happened in your own words and include the important dates.
          </p>
        </div>

      </div>

      {/* Answer */}

      <div className="bg-white border rounded-2xl shadow-sm p-6">

        <h2 className="text-xl font-semibold">
          Your Answer
        </h2>

        <textarea
          rows={6}
          placeholder="Type your answer here..."
          className="mt-4 w-full border rounded-xl p-4"
        />

        <div className="flex gap-4 mt-5">

          <button className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800">
            Submit Answer
          </button>

          <button className="border px-6 py-3 rounded-xl">
            🎤 Voice Answer
          </button>

        </div>

      </div>

      {/* AI Feedback */}

      <div className="bg-green-50 border border-green-200 rounded-2xl p-6">

        <h2 className="text-xl font-semibold text-green-700">
          AI Feedback
        </h2>

        <ul className="list-disc ml-5 mt-4 space-y-2 text-slate-700">
          <li>Your explanation is clear.</li>
          <li>Add exact dates for better accuracy.</li>
          <li>Mention any supporting evidence.</li>
        </ul>

      </div>

    </div>
  );
}