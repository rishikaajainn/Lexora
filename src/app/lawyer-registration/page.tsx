import { legalCategories } from "@/constants/legalCategories";

export default function LawyerRegistrationPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-10 px-6">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        {/* Heading */}

        <div className="text-center mb-10">

          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-800 text-white flex items-center justify-center text-3xl">
            ⚖️
          </div>

          <h1 className="text-4xl font-bold mt-6">
            Lawyer Registration
          </h1>

          <p className="text-gray-500 mt-2">
            Complete your professional verification to join Lexora.
          </p>

        </div>

        <form className="space-y-10">

          {/* ================= PERSONAL INFORMATION ================= */}

          <section>

            <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Full Name"
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              />

              <select
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              >
                <option>Select Country</option>
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>

              <input
                type="text"
                placeholder="State"
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              />

              <input
                type="text"
                placeholder="City"
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              />

              <select
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              >
                <option>Preferred Language</option>
                <option>English</option>
                <option>Hindi</option>
                <option>German</option>
                <option>French</option>
              </select>

            </div>

          </section>

          {/* ================= PRACTICE INFORMATION ================= */}

          <section>

            <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
              Practice Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="State Bar Council"
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              />

              <input
                type="text"
                placeholder="Bar Council Enrollment Number"
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              />

              <input
                type="text"
                placeholder="Certificate of Practice Number"
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              />

              <input
                type="number"
                placeholder="Years of Experience"
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              />

              <select
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              >
                <option>Select Primary Practice Area</option>

                {legalCategories.map((category) => (
                  <option key={category}>
                    {category}
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Office Address"
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              />

            </div>

          </section>

          {/* ================= PROFESSIONAL INFORMATION ================= */}

          <section>

            <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
              Professional Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="number"
                placeholder="Consultation Fee (₹)"
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              />

              <input
                type="text"
                placeholder="Courts You Regularly Practice In"
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              />

              <textarea
                placeholder="Professional Bio"
                rows={5}
                className="md:col-span-2 border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              />

            </div>

          </section>

          {/* ================= LANGUAGES ================= */}

          <section>

            <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
              Languages Spoken
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "English",
                "Hindi",
                "Marathi",
                "Tamil",
                "Telugu",
                "Bengali",
                "German",
                "Others",
              ].map((language) => (
                <label
                  key={language}
                  className="flex items-center gap-2 border rounded-xl p-3"
                >
                  <input type="checkbox" />
                  {language}
                </label>
              ))}
            </div>

          </section>

          {/* ================= VERIFICATION DOCUMENTS ================= */}

          <section>

            <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
              Verification Documents
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="border-2 border-dashed rounded-2xl p-6">
                <p className="font-semibold">
                  Upload Bar Council ID
                </p>
                <input
                  type="file"
                  className="mt-4"
                />
              </div>

              <div className="border-2 border-dashed rounded-2xl p-6">
                <p className="font-semibold">
                  Upload Certificate of Practice
                </p>
                <input
                  type="file"
                  className="mt-4"
                />
              </div>

              <div className="border-2 border-dashed rounded-2xl p-6">
                <p className="font-semibold">
                  Upload Government ID
                </p>
                <input
                  type="file"
                  className="mt-4"
                />
              </div>

              <div className="border-2 border-dashed rounded-2xl p-6">
                <p className="font-semibold">
                  Upload Profile Photo
                </p>
                <input
                  type="file"
                  className="mt-4"
                />
              </div>

            </div>

          </section>

          {/* ================= DECLARATION ================= */}

          <section className="space-y-6">

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1"
              />
              <span className="text-gray-700">
                I hereby declare that all the information provided is true and correct.
                I understand that Lexora may verify my advocate credentials before
                approving my account.
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-900 text-white py-4 rounded-xl text-lg font-semibold transition"
            >
              Submit Verification
            </button>

          </section>

        </form>

      </div>

    </main>
  );
}