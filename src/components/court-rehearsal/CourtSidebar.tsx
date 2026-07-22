export default function CourtSidebar() {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6 overflow-y-auto">

      <h2 className="text-xl font-bold">
        Session Progress
      </h2>

      {/* Progress */}

      <div className="mt-6 space-y-6">

        <div>

          <p className="text-sm text-gray-500">
            Question
          </p>

          <p className="text-xl font-semibold">
            4 / 10
          </p>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            Confidence
          </p>

          <p className="text-xl font-semibold text-green-600">
            87%
          </p>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            Current Score
          </p>

          <p className="text-xl font-semibold text-blue-700">
            8.6 / 10
          </p>

        </div>

      </div>

      {/* Evidence */}

      <div className="mt-8">

        <h3 className="font-semibold text-lg mb-4">
          Evidence Mentioned
        </h3>

        <div className="space-y-3">

          <div className="bg-slate-50 rounded-xl p-3">
            ✓ Rent Agreement
          </div>

          <div className="bg-slate-50 rounded-xl p-3">
            ✓ WhatsApp Chats
          </div>

          <div className="bg-slate-50 rounded-xl p-3">
            ✓ Payment Receipt
          </div>

          <div className="bg-slate-50 rounded-xl p-3">
            ✓ Witness
          </div>

        </div>

      </div>

      {/* Judge Feedback */}

      <div className="mt-8">

        <h3 className="font-semibold text-lg mb-4">
          Judge Feedback
        </h3>

        <div className="space-y-3">

          <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-green-700">
            ✓ Good timeline
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-green-700">
            ✓ Clear explanation
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-yellow-700">
            ▲ Mention exact dates
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-yellow-700">
            ▲ Mention witness details
          </div>

        </div>

      </div>

    </div>
  );
}