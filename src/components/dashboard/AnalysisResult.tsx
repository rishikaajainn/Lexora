export default function AnalysisResult() {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-8 space-y-8">

      <h2 className="text-2xl font-bold">
        AI Analysis Result
      </h2>

      {/* Basic Information */}

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-slate-50 rounded-xl p-5">
          <p className="text-sm text-gray-500">
            Document Type
          </p>

          <h3 className="font-semibold text-lg mt-2">
            Employment Contract
          </h3>
        </div>

        <div className="bg-slate-50 rounded-xl p-5">
          <p className="text-sm text-gray-500">
            Summary
          </p>

          <p className="mt-2 text-gray-700">
            Employment agreement containing salary, confidentiality,
            termination and notice clauses.
          </p>
        </div>

      </div>

      {/* Parties */}

      <section>

        <h3 className="text-xl font-semibold mb-3">
          Parties
        </h3>

        <ul className="list-disc ml-6 text-gray-600 space-y-2">

          <li>Employer</li>

          <li>Employee</li>

        </ul>

      </section>

      {/* Important Dates */}

      <section>

        <h3 className="text-xl font-semibold mb-3">
          Important Dates
        </h3>

        <ul className="list-disc ml-6 text-gray-600 space-y-2">

          <li>Agreement Date</li>

          <li>Joining Date</li>

          <li>Termination Notice Period</li>

        </ul>

      </section>

      {/* Timeline */}

      <section>

        <h3 className="text-xl font-semibold mb-3">
          Timeline
        </h3>

        <ul className="list-disc ml-6 text-gray-600 space-y-2">

          <li>Contract Signed</li>

          <li>Employment Begins</li>

          <li>Probation Ends</li>

        </ul>

      </section>

      {/* Clauses */}

      <section>

        <h3 className="text-xl font-semibold mb-3">
          Important Clauses
        </h3>

        <ul className="list-disc ml-6 text-gray-600 space-y-2">

          <li>Salary Clause</li>

          <li>Confidentiality Clause</li>

          <li>Termination Clause</li>

          <li>Non-Compete Clause</li>

        </ul>

      </section>

      {/* Risks */}

      <section className="bg-yellow-50 rounded-xl p-6">

        <h3 className="text-xl font-semibold mb-3">
          ⚠ Risks
        </h3>

        <ul className="list-disc ml-6 text-gray-700 space-y-2">

          <li>Long notice period</li>

          <li>Strict confidentiality obligations</li>

          <li>Penalty for early resignation</li>

        </ul>

      </section>

      {/* Missing Information */}

      <section className="bg-red-50 rounded-xl p-6">

        <h3 className="text-xl font-semibold mb-3">
          Missing Information
        </h3>

        <ul className="list-disc ml-6 text-gray-700 space-y-2">

          <li>Employer signature missing</li>

          <li>Witness information missing</li>

        </ul>

      </section>

      {/* Recommended Actions */}

      <section className="bg-green-50 rounded-xl p-6">

        <h3 className="text-xl font-semibold mb-3">
          Recommended Actions
        </h3>

        <ul className="list-disc ml-6 text-gray-700 space-y-2">

          <li>Review termination clause carefully.</li>

          <li>Verify salary and benefits.</li>

          <li>Consult a lawyer before signing if unsure.</li>

        </ul>

      </section>

    </div>
  );
}