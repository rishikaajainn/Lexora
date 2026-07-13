export default function DocumentGeneratorPage() {
  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>
        <h1 className="text-4xl font-bold">
          Legal Document Generator
        </h1>

        <p className="text-gray-500 mt-2">
          Generate legal documents using AI.
        </p>
      </div>

      {/* Form */}

      <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-5">

        <select className="w-full border rounded-xl p-3">
          <option>Select Document Type</option>
          <option>FIR</option>
          <option>Legal Notice</option>
          <option>Complaint Letter</option>
          <option>Affidavit</option>
        </select>

        <input
          placeholder="Your Full Name"
          className="w-full border rounded-xl p-3"
        />

        <input
          placeholder="Opponent Name"
          className="w-full border rounded-xl p-3"
        />

        <textarea
          rows={6}
          placeholder="Describe your issue..."
          className="w-full border rounded-xl p-3"
        />

        <button className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800">
          Generate Document
        </button>

      </div>

      {/* Generated Document */}

      <div className="bg-white border rounded-2xl shadow-sm p-6">

        <h2 className="text-2xl font-semibold">
          Generated Document
        </h2>

        <div className="mt-5 border rounded-xl p-5 bg-gray-50 min-h-[300px]">

          <p className="text-gray-500">
            Your generated legal document will appear here.
          </p>

        </div>

        <div className="flex gap-4 mt-6">

          <button className="bg-blue-700 text-white px-6 py-3 rounded-xl">
            Download PDF
          </button>

          <button className="border px-6 py-3 rounded-xl">
            Copy
          </button>

        </div>

      </div>

    </div>
  );
}