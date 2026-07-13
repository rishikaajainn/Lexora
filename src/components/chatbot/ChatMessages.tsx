export default function ChatMessages() {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">

      {/* User Message */}

      <div className="flex justify-end">
        <div className="max-w-2xl bg-blue-700 text-white rounded-2xl px-5 py-4 shadow">
          <p className="font-medium">
            I need help regarding a property dispute with my landlord.
          </p>
        </div>
      </div>

      {/* AI Response */}

      <div className="max-w-4xl bg-white rounded-2xl border shadow-sm p-6 space-y-8">

        {/* Issue */}

        <section>
          <h3 className="text-xl font-bold">Issue</h3>
          <p className="mt-2 text-gray-600">
            Property dispute between tenant and landlord regarding rental agreement.
          </p>
        </section>

        {/* Severity + Confidence */}

        <section className="grid md:grid-cols-2 gap-4">

          <div className="rounded-xl bg-yellow-50 border border-yellow-200 p-4">
            <h4 className="font-semibold">Severity</h4>
            <p className="mt-2 inline-block bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">
              Medium
            </p>
          </div>

          <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
            <h4 className="font-semibold">Confidence</h4>
            <p className="mt-2 text-3xl font-bold text-blue-700">
              94%
            </p>
          </div>

        </section>

        {/* Rights */}

        <section>
          <h3 className="text-xl font-bold">
            Your Rights
          </h3>

          <p className="mt-2 text-gray-600 leading-7">
            As a tenant, you have rights under the applicable Rent Control laws
            and your rental agreement.
          </p>
        </section>

        {/* Explanation */}

        <section>
          <h3 className="text-xl font-bold">
            Explanation
          </h3>

          <p className="mt-2 text-gray-600 leading-7">
            Based on the information provided, your dispute appears to involve
            rental obligations, security deposit issues and tenant rights.
          </p>
        </section>

        {/* Legal Options */}

        <section>

          <h3 className="text-xl font-bold mb-4">
            Legal Options
          </h3>

          <div className="grid md:grid-cols-2 gap-5">

            <div className="border rounded-xl p-5">

              <h4 className="font-semibold text-lg">
                Legal Notice
              </h4>

              <p className="mt-3 text-gray-600">
                Send a legal notice requesting refund of your security deposit.
              </p>

              <div className="mt-4 space-y-2 text-sm">

                <p><strong>Time:</strong> 7 Days</p>

                <p><strong>Cost:</strong> ₹1000</p>

                <p><strong>Difficulty:</strong> Easy</p>

              </div>

            </div>

            <div className="border rounded-xl p-5">

              <h4 className="font-semibold text-lg">
                Consumer Complaint
              </h4>

              <p className="mt-3 text-gray-600">
                File a complaint before the appropriate authority.
              </p>

              <div className="mt-4 space-y-2 text-sm">

                <p><strong>Time:</strong> 30 Days</p>

                <p><strong>Cost:</strong> ₹500</p>

                <p><strong>Difficulty:</strong> Medium</p>

              </div>

            </div>

          </div>

        </section>

        {/* Recommendation */}

        <section className="rounded-xl bg-green-50 border border-green-200 p-5">

          <h3 className="text-xl font-bold text-green-700">
            Recommended Option
          </h3>

          <p className="mt-3 font-semibold">
            Send a Legal Notice
          </p>

          <p className="mt-2 text-gray-700">
            This option is faster, less expensive and often resolves disputes
            without going to court.
          </p>

        </section>

        {/* Disclaimer */}

        <section className="border-t pt-5">

          <p className="text-sm text-gray-500 italic">
            This legal analysis is AI-generated for informational purposes only.
            It is not a substitute for professional legal advice. Please consult
            a qualified lawyer before making legal decisions.
          </p>

        </section>

      </div>

    </div>
  );
}