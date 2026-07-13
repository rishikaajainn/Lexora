export default function SignupPage() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-10">

        <div className="text-center">

          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-800 flex items-center justify-center text-white text-3xl">
            ⚖️
          </div>

          <h1 className="mt-6 text-3xl font-bold text-slate-900">
            Create Your Account
          </h1>

          <p className="mt-2 text-gray-500">
            Join Lexora and access AI-powered legal assistance.
          </p>

        </div>

        <form className="mt-10 space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-700 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-700 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-700 outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-700 outline-none"
          />

          <select
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-700 outline-none"
          >
            <option>Select Country</option>
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Canada</option>
            <option>Australia</option>
          </select>

          <select
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-700 outline-none"
          >
            <option>Preferred Language</option>
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
            <option>Tamil</option>
            <option>Telugu</option>
            <option>Bengali</option>
            <option>German</option>
          </select>

          <label className="flex items-start gap-3 text-sm text-gray-600">
            <input
              type="checkbox"
              className="mt-1 accent-blue-700"
            />
            <span>
              I agree to the Terms & Conditions and Privacy Policy.
            </span>
          </label>

          <button className="w-full bg-blue-800 text-white py-4 rounded-xl hover:bg-blue-900 transition font-semibold">
            Continue
          </button>

        </form>

        <p className="text-center mt-8 text-gray-500">
          Already have an account?
          <span className="text-blue-700 font-semibold cursor-pointer ml-2">
            Login
          </span>
        </p>

      </div>

    </main>
  );
}