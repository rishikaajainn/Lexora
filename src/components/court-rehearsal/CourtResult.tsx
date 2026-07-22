"use client";

type CourtResultProps = {
  onRestart: () => void;
};

export default function CourtResult({
  onRestart,
}: CourtResultProps) {
  return (
    <div className="max-w-5xl mx-auto space-y-8">

      {/* Heading */}

      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Court Rehearsal Finished
        </h1>

        <p className="text-slate-600 mt-2">
          Here is your overall performance summary.
        </p>
      </div>

      {/* Overall Score */}

      <div className="bg-white rounded-2xl border shadow-sm p-8 text-center">

        <p className="text-slate-500">
          Overall Score
        </p>

        <h2 className="text-6xl font-bold text-blue-700 mt-4">
          89%
        </h2>

        <p className="text-green-600 mt-3 font-medium">
          Excellent Performance
        </p>

      </div>

      {/* Score Cards */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white rounded-2xl border shadow-sm p-6 text-center">
          <p className="text-gray-500">Communication</p>
          <h3 className="text-3xl font-bold mt-3 text-blue-700">9.2</h3>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6 text-center">
          <p className="text-gray-500">Legal Knowledge</p>
          <h3 className="text-3xl font-bold mt-3 text-blue-700">8.8</h3>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6 text-center">
          <p className="text-gray-500">Confidence</p>
          <h3 className="text-3xl font-bold mt-3 text-blue-700">9.0</h3>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6 text-center">
          <p className="text-gray-500">Evidence</p>
          <h3 className="text-3xl font-bold mt-3 text-blue-700">8.6</h3>
        </div>

      </div>

      {/* Timeline Feedback */}

      <div className="bg-white rounded-2xl border shadow-sm p-8">

        <h2 className="text-2xl font-semibold mb-4">
          Timeline Feedback
        </h2>

        <ul className="list-disc ml-6 space-y-3 text-slate-700">
          <li>Your answers followed a logical sequence.</li>
          <li>You explained the incident clearly.</li>
          <li>Mention exact dates wherever possible.</li>
          <li>Include witness details for stronger arguments.</li>
        </ul>

      </div>

      {/* Buttons */}

      <div className="flex flex-wrap gap-4">

        <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl transition">
          Download Report
        </button>

        <button
          onClick={onRestart}
          className="border rounded-xl px-6 py-3 hover:bg-slate-100 transition"
        >
          Start New Session
        </button>

      </div>

    </div>
  );
}