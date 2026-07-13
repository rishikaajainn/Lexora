import countries from "@/constants/countries";
import languages from "@/constants/languages";
import { legalCategories } from "@/constants/legalCategories";

export default function FindLawyerPage() {
  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>

        <h1 className="text-4xl font-bold text-slate-900">
          Find a Lawyer
        </h1>

        <p className="text-gray-500 mt-2">
          Search verified advocates by specialization, country, city and preferred language.
        </p>

      </div>

      {/* Filters */}

      <div className="bg-white border rounded-2xl shadow-sm p-6">

        <div className="grid lg:grid-cols-5 gap-4">

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
            placeholder="City / Location"
            className="border rounded-xl p-3"
          />

          <select className="border rounded-xl p-3">

            <option>Specialization</option>

            {legalCategories.map((category) => (
              <option key={category}>
                {category}
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

          <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-xl px-5">
            Search
          </button>

        </div>

      </div>

      {/* Recommended Lawyers */}

      <div>

        <h2 className="text-2xl font-bold mb-5">
          Recommended Lawyers
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">

          <LawyerCard
            name="Rahul Sharma"
            specialization="Rental Law"
            city="Delhi"
            languages={["English", "Hindi"]}
            experience={10}
            fee="₹500"
            rating={4.9}
          />

          <LawyerCard
            name="Priya Verma"
            specialization="Family Law"
            city="Mumbai"
            languages={["English", "Hindi", "Marathi"]}
            experience={8}
            fee="₹700"
            rating={4.8}
          />

        </div>

      </div>

    </div>
  );
}

function LawyerCard({
  name,
  specialization,
  city,
  languages,
  experience,
  fee,
  rating,
}: {
  name: string;
  specialization: string;
  city: string;
  languages: string[];
  experience: number;
  fee: string;
  rating: number;
}) {
  return (
    <div className="bg-white border rounded-2xl shadow-sm p-6">

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-2xl font-bold">
            {name}
          </h2>

          <p className="text-blue-700 font-medium mt-1">
            {specialization}
          </p>

        </div>

        <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold">
          ⭐ {rating}
        </div>

      </div>

      <div className="mt-6 space-y-3 text-gray-700">

        <p>
          <strong> City:</strong> {city}
        </p>

        <p>
          <strong> Languages:</strong> {languages.join(", ")}
        </p>

        <p>
          <strong> Experience:</strong> {experience} Years
        </p>

        <p>
          <strong> Consultation Fee:</strong> {fee}
        </p>

      </div>

      <div className="mt-8 flex gap-3">

        <button className="flex-1 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl transition">
          View Profile
        </button>

        <button className="flex-1 border border-blue-700 text-blue-700 hover:bg-blue-50 py-3 rounded-xl transition">
          Consult Now
        </button>

      </div>

    </div>
  );
}