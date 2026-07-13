import countries from "@/constants/countries";
import languages from "@/constants/languages";

export default function ProfilePage() {
  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          My Profile
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your personal information and account settings.
        </p>
      </div>

      {/* Profile Card */}

      <div className="bg-white border rounded-2xl shadow-sm p-8">

        <div className="flex flex-col md:flex-row items-center gap-6">

          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-4xl">
            
          </div>

          <div className="flex-1">

            <h2 className="text-3xl font-bold">
              Rahul Sharma
            </h2>

            <p className="text-gray-500 mt-1">
              rahul@gmail.com
            </p>

            <div className="grid md:grid-cols-2 gap-3 mt-6">

              <p>
                <strong> Phone:</strong> +91 9876543210
              </p>

              <p>
                <strong> Country:</strong> India
              </p>

              <p>
                <strong> Language:</strong> English
              </p>

              <p>
                <strong> Role:</strong> User
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Account Settings */}

      <div className="bg-white border rounded-2xl shadow-sm p-8">

        <h2 className="text-2xl font-bold mb-6">
          Account Settings
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <input
            className="border rounded-xl p-3"
            placeholder="Full Name"
            defaultValue="Rahul Sharma"
          />

          <input
            className="border rounded-xl p-3"
            placeholder="Email"
            defaultValue="rahul@gmail.com"
          />

          <input
            className="border rounded-xl p-3"
            placeholder="Phone Number"
            defaultValue="+91 9876543210"
          />

          <select className="border rounded-xl p-3">

            <option>Select Country</option>

            {countries.map((country) => (
              <option key={country}>
                {country}
              </option>
            ))}

          </select>

          <select className="border rounded-xl p-3">

            <option>Preferred Language</option>

            {languages.map((language) => (
              <option key={language}>
                {language}
              </option>
            ))}

          </select>

          <select className="border rounded-xl p-3">
            <option>User</option>
            <option>Lawyer</option>
          </select>

        </div>

        <div className="flex flex-wrap gap-4 mt-8">

          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl transition">
            Save Changes
          </button>

          <button className="border border-blue-700 text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-xl transition">
            Change Password
          </button>

          <button className="border border-red-300 text-red-600 hover:bg-red-50 px-6 py-3 rounded-xl transition">
            Logout
          </button>

        </div>

      </div>

      {/* Lawyer Information (Shown only for lawyers later) */}

      <div className="bg-white border rounded-2xl shadow-sm p-8">

        <h2 className="text-2xl font-bold mb-6">
          Lawyer Information
        </h2>

        <p className="text-gray-500 mb-6">
          This section will automatically appear for lawyer accounts after backend integration.
        </p>

        <div className="grid md:grid-cols-2 gap-5">

          <input
            className="border rounded-xl p-3"
            placeholder="Bar Council Enrollment Number"
            disabled
          />

          <input
            className="border rounded-xl p-3"
            placeholder="Legal Specialization"
            disabled
          />

          <input
            className="border rounded-xl p-3"
            placeholder="Years of Experience"
            disabled
          />

          <input
            className="border rounded-xl p-3"
            placeholder="Practice City"
            disabled
          />

          <input
            className="border rounded-xl p-3 md:col-span-2"
            placeholder="Certificate of Practice Status"
            disabled
          />

        </div>

      </div>

    </div>
  );
}