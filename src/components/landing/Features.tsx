import { features } from "@/data/features";

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <p className="text-blue-700 font-semibold uppercase tracking-wider">
            Features
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Everything You Need For Legal Guidance
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
            Lexora combines AI, legal intelligence, and multilingual support
            to simplify complex legal processes for everyone.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 p-8 hover:shadow-xl transition duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <Icon className="text-blue-700" size={28} />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}