export default function HistoryPage() {
  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          History
        </h1>

        <p className="text-gray-500 mt-2">
          View all your previous legal activities in one place.
        </p>
      </div>

      {/* History Records */}

      <div className="space-y-5">

        <HistoryCard
          title="AI Legal Advisor"
          description="Property dispute consultation"
          status="Completed"
          date="13 July 2026"
          time="10:30 AM"
        />

        <HistoryCard
          title="Document Analysis"
          description="RentalAgreement.pdf"
          status="Completed"
          date="12 July 2026"
          time="6:45 PM"
        />

        <HistoryCard
          title="Decision Comparison"
          description="Compared legal notice vs consumer complaint."
          status="Completed"
          date="12 July 2026"
          time="1:20 PM"
        />

        <HistoryCard
          title="Generated FIR"
          description="Complaint regarding mobile theft."
          status="Downloaded"
          date="11 July 2026"
          time="2:20 PM"
        />

      </div>

    </div>
  );
}

function HistoryCard({
  title,
  description,
  status,
  date,
  time,
}: {
  title: string;
  description: string;
  status: string;
  date: string;
  time: string;
}) {
  return (
    <div className="bg-white border rounded-2xl shadow-sm p-6">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>

          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <p className="text-gray-600 mt-2">
            {description}
          </p>

          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">

            <span>
               {date}
            </span>

            <span>
               {time}
            </span>

            <span className="text-green-600 font-medium">
               {status}
            </span>

          </div>

        </div>

        <div className="flex gap-3">

          <button className="px-4 py-2 rounded-xl bg-blue-700 text-white hover:bg-blue-800 transition">
            View
          </button>

          <button className="px-4 py-2 rounded-xl border border-blue-700 text-blue-700 hover:bg-blue-50 transition">
            Download
          </button>

          <button className="px-4 py-2 rounded-xl border border-red-300 text-red-600 hover:bg-red-50 transition">
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}