export default function TimelinePage() {
  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Case Timeline
        </h1>

        <p className="text-gray-500 mt-2">
          Follow the progress of your legal matter step by step.
        </p>
      </div>

      {/* Case Overview */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <p className="text-gray-500 text-sm">
            Current Status
          </p>

          <h2 className="text-xl font-bold mt-2 text-blue-700">
            Legal Notice Stage
          </h2>
        </div>

        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <p className="text-gray-500 text-sm">
            Estimated Completion
          </p>

          <h2 className="text-xl font-bold mt-2">
            30 Days
          </h2>
        </div>

        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <p className="text-gray-500 text-sm">
            Next Step
          </p>

          <h2 className="text-xl font-bold mt-2">
            Await Response
          </h2>
        </div>

      </div>

      {/* Timeline */}

      <div className="bg-white rounded-2xl border shadow-sm p-8">

        <h2 className="text-2xl font-bold mb-8">
          Timeline
        </h2>

        <div className="space-y-10">

          <TimelineItem
            title="Collect Required Documents"
            description="Gather agreements, payment receipts, identity proof and any supporting evidence."
            completed={true}
          />

          <TimelineItem
            title="Send Legal Notice"
            description="Issue a formal legal notice to the opposite party."
            completed={true}
          />

          <TimelineItem
            title="Wait for Response"
            description="Allow the legally required response period."
            completed={false}
          />

          <TimelineItem
            title="Attempt Mediation"
            description="Try resolving the dispute outside the court."
            completed={false}
          />

          <TimelineItem
            title="File Court Case"
            description="Proceed with litigation if mediation is unsuccessful."
            completed={false}
            last
          />

        </div>

      </div>

    </div>
  );
}

function TimelineItem({
  title,
  description,
  completed,
  last = false,
}: {
  title: string;
  description: string;
  completed: boolean;
  last?: boolean;
}) {
  return (
    <div className="flex gap-6">

      <div className="flex flex-col items-center">

        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
            completed ? "bg-green-600" : "bg-blue-700"
          }`}
        >
          {completed ? "✓" : "•"}
        </div>

        {!last && (
          <div className="w-1 flex-1 bg-blue-200 mt-2"></div>
        )}

      </div>

      <div className="pb-6">

        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <p className="text-gray-600 mt-2 leading-7">
          {description}
        </p>

      </div>

    </div>
  );
}