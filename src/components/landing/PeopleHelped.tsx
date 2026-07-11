import { stats } from "@/data/stats";

export default function PeopleHelped() {
  return (
    <section className="py-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            People We Helped
          </h2>

          <p className="mt-6 text-blue-100 text-lg max-w-3xl mx-auto">
            Lexora is designed to make legal assistance
            accessible, understandable, and available to everyone.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center"
            >

              <h3 className="text-5xl font-black">
                {item.number}
              </h3>

              <p className="mt-4 text-blue-100">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
} 