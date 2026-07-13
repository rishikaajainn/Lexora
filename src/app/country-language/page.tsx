import Link from "next/link";

export default function CountryLanguagePage() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-xl">

        <h1 className="text-4xl font-bold text-slate-900 text-center">
          Set Up Your Legal Workspace
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Select your location and preferred language.
        </p>

        <div className="mt-10 space-y-6">

          <div>
            <label className="block mb-2 font-semibold">
              Country
            </label>

            <select className="w-full border rounded-xl px-4 py-3">
              <option>India</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Australia</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              State / Region
            </label>

            <input
              placeholder="Enter your state"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Preferred Language
            </label>

            <select className="w-full border rounded-xl px-4 py-3">
              <option>English</option>
              <option>हिन्दी</option>
              <option>தமிழ்</option>
              <option>తెలుగు</option>
              <option>বাংলা</option>
            </select>
          </div>

          <Link href="/dashboard">
            <button className="w-full bg-blue-800 hover:bg-blue-900 text-white py-4 rounded-xl font-semibold transition">
              Continue
            </button>
          </Link>

        </div>

      </div>

    </main>
  );
}