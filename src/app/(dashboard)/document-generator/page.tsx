"use client";

import { countries } from "@/constants/countries";
import { languages } from "@/constants/languages";

export default function DocumentGeneratorPage() {
  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Legal Document Generator
        </h1>

        <p className="text-slate-600 mt-2">
          Generate legally formatted documents using AI.
        </p>
      </div>

      {/* Generator Form */}

      <div className="bg-white rounded-2xl border shadow-sm p-8 space-y-6">

        <div className="grid md:grid-cols-2 gap-6">

          {/* Document Type */}

          <div>
            <label className="block text-sm font-medium mb-2">
              Choose Document Type
            </label>

            <select className="w-full border rounded-xl p-3">
              <option>FIR</option>
              <option>Legal Notice</option>
              <option>Complaint Letter</option>
              <option>Affidavit</option>
            </select>
          </div>

          {/* Country */}

          <div>
            <label className="block text-sm font-medium mb-2">
              Country
            </label>

            <select className="w-full border rounded-xl p-3">
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {/* State */}

          <div>
            <label className="block text-sm font-medium mb-2">
              State
            </label>

            <input
              placeholder="Enter State"
              className="w-full border rounded-xl p-3"
            />
          </div>

          {/* Language */}

          <div>
            <label className="block text-sm font-medium mb-2">
              Language
            </label>

            <select className="w-full border rounded-xl p-3">
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Document Details */}

        <div className="border-t pt-6">

          <h2 className="text-2xl font-semibold mb-5">
            Document Details
          </h2>

          <div className="space-y-5">

            <input
              placeholder="Name"
              className="w-full border rounded-xl p-3"
            />

            <input
              placeholder="Opponent Name"
              className="w-full border rounded-xl p-3"
            />

            <textarea
              rows={6}
              placeholder="Describe your issue..."
              className="w-full border rounded-xl p-3 resize-none"
            />

            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl transition">
              Generate Document
            </button>

          </div>

        </div>

      </div>

      {/* Generated Document */}

      <div className="bg-white rounded-2xl border shadow-sm p-8">

        <h2 className="text-2xl font-semibold mb-5">
          Generated Document
        </h2>

        <div className="min-h-[320px] rounded-xl border bg-slate-50 p-6 flex items-center justify-center">

          <p className="text-slate-500">
            Your generated legal document will appear here.
          </p>

        </div>

        <div className="flex flex-wrap gap-4 mt-6">

          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl transition">
            Download PDF
          </button>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition">
            Download DOCX
          </button>

          <button className="border px-6 py-3 rounded-xl hover:bg-slate-100 transition">
            Copy
          </button>

        </div>

      </div>

    </div>
  );
}