import Link from "next/link";

export default function RoleSelectionPage() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

      <div className="w-full max-w-5xl">

        {/* Heading */}

        <div className="text-center mb-12">

          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-800 flex items-center justify-center text-white text-3xl">
            ⚖️
          </div>

          <h1 className="mt-6 text-4xl font-bold text-slate-900">
            Choose Your Role
          </h1>

          <p className="mt-3 text-gray-600">
            Select how you want to continue with Lexora.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8">

          {/* User */}

          <Link
            href="/dashboard"
            className="bg-white rounded-3xl shadow-lg border p-8 hover:shadow-xl transition cursor-pointer"
          >
            <div className="text-6xl">👤</div>

            <h2 className="mt-6 text-2xl font-bold">
              Citizen / User
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Get AI legal guidance, analyze legal documents,
              compare legal options, generate legal documents,
              find lawyers and prepare for court.
            </p>

            <div className="mt-8 text-blue-700 font-semibold">
              Continue as User →
            </div>

          </Link>

          {/* Lawyer */}

          <Link
            href="/lawyer-registration"
            className="bg-white rounded-3xl shadow-lg border p-8 hover:shadow-xl transition cursor-pointer"
          >
            <div className="text-6xl">👨‍⚖️</div>

            <h2 className="mt-6 text-2xl font-bold">
              Lawyer / Advocate
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Register yourself as a verified advocate,
              manage your professional profile and connect
              with people seeking legal assistance.
            </p>

            <div className="mt-8 text-blue-700 font-semibold">
              Continue as Lawyer →
            </div>

          </Link>

        </div>

      </div>

    </main>
  );
}