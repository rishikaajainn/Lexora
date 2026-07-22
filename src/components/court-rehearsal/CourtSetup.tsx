"use client";

import { countries } from "@/constants/countries";
import { languages } from "@/constants/languages";

type CourtSetupProps = {
  onStart: () => void;
};

export default function CourtSetup({
  onStart,
}: CourtSetupProps) {
  return (
    <div className="max-w-5xl mx-auto space-y-8">

      {/* Heading */}

      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Court Rehearsal
        </h1>

        <p className="text-slate-600 mt-2">
          Practice your case with an AI Judge before appearing in court.
        </p>
      </div>

      {/* Setup Card */}

      <div className="bg-white rounded-2xl border shadow-sm p-8">

        <div className="grid md:grid-cols-2 gap-6">

          {/* Country */}

          <div>

            <label className="block text-sm font-medium mb-2">
              Country
            </label>

            <select className="w-full border rounded-xl p-3">

              {countries.map((country) => (

                <option
                  key={country}
                  value={country}
                >
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

                <option
                  key={language}
                  value={language}
                >
                  {language}
                </option>

              ))}

            </select>

          </div>

          {/* Role */}

          <div>

            <label className="block text-sm font-medium mb-2">
              Role
            </label>

            <select className="w-full border rounded-xl p-3">

              <option>Plaintiff</option>

              <option>Defendant</option>

              <option>Witness</option>

            </select>

          </div>

          {/* Case Type */}

          <div className="md:col-span-2">

            <label className="block text-sm font-medium mb-2">
              Case Type
            </label>

            <select className="w-full border rounded-xl p-3">

              <option>Property Dispute</option>

              <option>Family Law</option>

              <option>Consumer Complaint</option>

              <option>Employment Issue</option>

              <option>Criminal Case</option>

            </select>

          </div>

        </div>

        {/* Case Summary */}

        <div className="mt-8">

          <label className="block text-sm font-medium mb-2">
            Case Summary
          </label>

          <textarea
            rows={6}
            placeholder="Briefly describe your case..."
            className="w-full border rounded-xl p-4 resize-none"
          />

        </div>

        {/* Button */}

        <div className="mt-8">

          <button
            onClick={onStart}
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-xl transition"
          >
            Start Court Session
          </button>

        </div>

      </div>

    </div>
  );
}