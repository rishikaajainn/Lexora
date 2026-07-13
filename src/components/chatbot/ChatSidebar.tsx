export default function ChatSidebar() {
  const lawyerNeeded = true;

  return (
    <div className="bg-white rounded-2xl border p-6 space-y-8 overflow-y-auto">

      <h2 className="text-2xl font-bold">
        AI Analysis
      </h2>

      {/* Timeline */}

      <section>

        <h3 className="font-bold text-lg mb-4">
          Timeline
        </h3>

        <div className="space-y-4">

          {[
            "Collect Rental Agreement",
            "Gather Payment Receipts",
            "Send Legal Notice",
            "Attempt Mediation",
            "File Case (if required)",
          ].map((step, index) => (
            <div key={index} className="flex gap-3 items-start">

              <div className="w-7 h-7 rounded-full bg-blue-700 text-white flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>

              <p className="text-gray-700">
                {step}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* Estimated Cost */}

      <section>

        <h3 className="font-bold text-lg">
          Estimated Cost
        </h3>

        <div className="mt-3 rounded-xl bg-green-50 border border-green-200 p-4">
          <p className="text-2xl font-bold text-green-700">
            ₹5,000 – ₹25,000
          </p>
        </div>

      </section>

      {/* Required Documents */}

      <section>

        <h3 className="font-bold text-lg mb-3">
          Required Documents
        </h3>

        <ul className="space-y-2">

          {[
            "Rental Agreement",
            "Identity Proof",
            "Payment Receipts",
            "Email / WhatsApp Conversations",
          ].map((doc) => (
            <li
              key={doc}
              className="border rounded-xl px-4 py-3 bg-slate-50"
            >
              📄 {doc}
            </li>
          ))}

        </ul>

      </section>

      {/* Next Steps */}

      <section>

        <h3 className="font-bold text-lg mb-3">
          Next Steps
        </h3>

        <ol className="list-decimal ml-5 space-y-2 text-gray-700">

          <li>Review your rental agreement.</li>

          <li>Organize supporting evidence.</li>

          <li>Send a legal notice.</li>

          <li>Consult a lawyer if no response is received.</li>

        </ol>

      </section>

      {/* Lawyer Recommendation */}

      {lawyerNeeded && (

        <section>

          <h3 className="font-bold text-lg mb-3">
            Recommended Lawyer
          </h3>

          <div className="border rounded-xl p-4 bg-blue-50">

            <p className="font-semibold">
              Rental Law Specialist
            </p>

            <p className="text-gray-600 mt-2">
              Experience: 10+ Years
            </p>

            <p className="text-gray-600">
              Consultation Fee: ₹500
            </p>

            <p className="text-yellow-500 mt-2">
              ⭐ 4.9 / 5
            </p>

          </div>

        </section>

      )}

      {/* Sources */}

      <section>

        <h3 className="font-bold text-lg mb-3">
          Legal Sources
        </h3>

        <div className="space-y-3">

          <div className="border rounded-xl p-4">

            <p className="font-semibold">
              Delhi Rent Control Act
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Page 14 • Category: Rental Law
            </p>

          </div>

          <div className="border rounded-xl p-4">

            <p className="font-semibold">
              Transfer of Property Act
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Section 108
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}