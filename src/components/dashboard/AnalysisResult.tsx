"use client";

import { useState } from "react";
import languages from "@/constants/languages";

export default function AnalysisResult() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  // Dummy response (Later this will come from backend)
  const analysis = {
    documentType: "Employment Contract",
    summary:
      "This document appears to be an employment agreement outlining the responsibilities of both employer and employee. It includes salary details, notice period, confidentiality obligations, and termination conditions.",

    riskLevel: "Medium",

    confidence: 96,

    language: "English",

    processingTime: "2 Seconds",

    importantClauses: [
      "Salary & Compensation",
      "Working Hours",
      "Leave Policy",
      "Confidentiality Agreement",
    ],

    riskyClauses: [
      "90-day notice period",
      "Employer may terminate without detailed explanation",
      "Strict confidentiality obligations",
    ],

    recommendations: [
      "Review the termination clause carefully.",
      "Negotiate the notice period if possible.",
      "Consult a lawyer before signing.",
      "Keep a signed copy of the agreement.",
    ],

    legalReferences: [
      "Indian Contract Act, 1872",
      "Industrial Employment Rules",
      "Applicable Labour Laws",
    ],
  };

  const riskColor =
    analysis.riskLevel === "High"
      ? "bg-red-100 text-red-700"
      : analysis.riskLevel === "Medium"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700";

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-8 space-y-8">
      {/* Header */}

      <div>
        <h2 className="text-3xl font-bold text-slate-900">
          AI Analysis Result
        </h2>

        <p className="text-gray-500 mt-2">
          AI-generated analysis of your uploaded legal document.
        </p>
      </div>

      {/* Overview */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

        <InfoCard
          title="Document Type"
          value={analysis.documentType}
        />

        <InfoCard
          title="Confidence"
          value={`${analysis.confidence}%`}
        />

        <InfoCard
          title="Language"
          value={analysis.language}
        />

        <InfoCard
          title="Processing Time"
          value={analysis.processingTime}
        />

        <div className="rounded-xl bg-slate-50 p-5">
          <p className="text-sm text-gray-500">
            Risk Level
          </p>

          <span
            className={`inline-block mt-3 px-4 py-2 rounded-full text-sm font-semibold ${riskColor}`}
          >
            {analysis.riskLevel}
          </span>
        </div>

      </div>

      {/* Translation & Download */}

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">

        <div className="w-full lg:w-80">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Translate Document To
          </label>

          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-blue-700"
          >
            {languages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-3">
          <button
            className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
          >
            🌐 Translate
          </button>

          <button
            className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition"
          >
            ⬇ Download
          </button>
        </div>

      </div>

      {/* Summary */}

      <div>
        <h3 className="text-xl font-semibold">
          Plain Language Summary
        </h3>

        <p className="mt-3 text-gray-600 leading-7">
          {analysis.summary}
        </p>
      </div>

      {/* Important & Risky Clauses */}

      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-green-50 rounded-2xl p-6">

          <h3 className="text-xl font-semibold text-green-700">
            Important Clauses
          </h3>

          <ul className="mt-4 space-y-3">

            {analysis.importantClauses.map((item) => (
              <li
                key={item}
                className="flex gap-3"
              >
                <span>✅</span>

                <span>{item}</span>
              </li>
            ))}

          </ul>

        </div>

        <div className="bg-yellow-50 rounded-2xl p-6">

          <h3 className="text-xl font-semibold text-yellow-700">
            Risky Clauses
          </h3>

          <ul className="mt-4 space-y-3">

            {analysis.riskyClauses.map((item) => (
              <li
                key={item}
                className="flex gap-3"
              >
                <span>⚠</span>

                <span>{item}</span>
              </li>
            ))}

          </ul>

        </div>

      </div>

      {/* Recommendations */}

      <div className="bg-blue-50 rounded-2xl p-6">

        <h3 className="text-xl font-semibold text-blue-700">
          Recommendations
        </h3>

        <ul className="mt-4 space-y-3">

          {analysis.recommendations.map((item) => (
            <li
              key={item}
              className="flex gap-3"
            >
              <span>💡</span>

              <span>{item}</span>
            </li>
          ))}

        </ul>

      </div>

      {/* Legal References */}

      <div className="bg-slate-50 rounded-2xl p-6">

        <h3 className="text-xl font-semibold">
          Legal References
        </h3>

        <ul className="mt-4 space-y-3">

          {analysis.legalReferences.map((item) => (
            <li
              key={item}
              className="flex gap-3"
            >
              <span>📚</span>

              <span>{item}</span>
            </li>
          ))}

        </ul>

      </div>

      {/* Disclaimer */}

      <div className="border-t pt-5">

        <p className="text-sm text-gray-500 italic">
          This analysis is AI-generated and should not be considered a substitute
          for professional legal advice. Please consult a qualified lawyer before
          making legal decisions.
        </p>

      </div>
    </div>
  );
}

function InfoCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-5">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h3 className="mt-2 text-xl font-semibold text-slate-900">
        {value}
      </h3>
    </div>
  );
}