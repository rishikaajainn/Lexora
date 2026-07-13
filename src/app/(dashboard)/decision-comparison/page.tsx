import countries from "@/constants/countries";
import languages from "@/constants/languages";
import { legalCategories } from "@/constants/legalCategories";

export default function DecisionComparisonPage() {
  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>

        <h1 className="text-4xl font-bold text-slate-900">
          Decision Comparison
        </h1>

        <p className="text-slate-600 mt-2">
          Compare multiple legal options and understand which one is best for your situation.
        </p>

      </div>

      {/* Input Section */}

      <div className="bg-white rounded-2xl border shadow-sm p-6 space-y-5">

        <textarea
          rows={5}
          placeholder="Describe your legal issue..."
          className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
        />

        <div className="grid md:grid-cols-4 gap-4">

          <select className="border rounded-xl p-3">

            <option>Select Country</option>

            {countries.map((country) => (
              <option key={country}>
                {country}
              </option>
            ))}

          </select>

          <input
            type="text"
            placeholder="Location / State"
            className="border rounded-xl p-3"
          />

          <select className="border rounded-xl p-3">

            <option>Legal Category</option>

            {legalCategories.map((category) => (
              <option key={category}>
                {category}
              </option>
            ))}

          </select>

          <select className="border rounded-xl p-3">

            <option>Language</option>

            {languages.map((language) => (
              <option key={language}>
                {language}
              </option>
            ))}

          </select>

        </div>

        <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-xl transition">
          Compare Options
        </button>

      </div>

      {/* Comparison */}

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Option 1 */}

        <div className="bg-white rounded-2xl border shadow-sm p-6">

          <h2 className="text-2xl font-bold">
            Option 1
          </h2>

          <h3 className="text-blue-700 font-semibold mt-3">
            Send Legal Notice
          </h3>

          <p className="mt-4 text-gray-600">
            Send a formal legal notice requesting resolution before filing a case.
          </p>

          <div className="mt-6 space-y-2">

            <p>
              <strong>Estimated Time:</strong> 7 Days
            </p>

            <p>
              <strong>Estimated Cost:</strong> ₹1,000
            </p>

            <p>
              <strong>Difficulty:</strong> Easy
            </p>

          </div>

        </div>

        {/* Option 2 */}

        <div className="bg-white rounded-2xl border shadow-sm p-6">

          <h2 className="text-2xl font-bold">
            Option 2
          </h2>

          <h3 className="text-blue-700 font-semibold mt-3">
            File Consumer Complaint
          </h3>

          <p className="mt-4 text-gray-600">
            Initiate proceedings before the appropriate consumer forum.
          </p>

          <div className="mt-6 space-y-2">

            <p>
              <strong>Estimated Time:</strong> 30 Days
            </p>

            <p>
              <strong>Estimated Cost:</strong> ₹500
            </p>

            <p>
              <strong>Difficulty:</strong> Medium
            </p>

          </div>

        </div>

      </div>

      {/* Recommendation */}

      <div className="bg-green-50 border border-green-200 rounded-2xl p-6">

        <h2 className="text-2xl font-bold text-green-700">
          Recommended Option
        </h2>

        <p className="mt-3 text-slate-700">
          <strong>Option:</strong> Send Legal Notice
        </p>

        <p className="mt-3 text-gray-700">
          <strong>Reason:</strong> It is faster, more cost-effective and often resolves disputes without requiring court proceedings.
        </p>

      </div>

    </div>
  );
}