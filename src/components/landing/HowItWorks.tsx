import { steps } from "@/data/howItWorks";

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <p className="text-blue-700 font-semibold uppercase tracking-wider">
            How It Works
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Legal Guidance in Four Simple Steps
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Lexora simplifies complex legal procedures into an easy,
            guided experience for every citizen.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl transition hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Icon className="text-blue-700" size={30} />
                </div>

                <span className="absolute top-6 right-6 text-5xl font-black text-slate-100">
                  {index + 1}
                </span>

                <h3 className="text-2xl font-bold mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}