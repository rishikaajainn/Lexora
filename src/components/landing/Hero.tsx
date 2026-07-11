export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="flex-1">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            AI Powered Communication
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-6 leading-tight">
            Communicate
            <span className="text-blue-700"> Smarter </span>
            with AI
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8 max-w-xl">
            Lexora helps students and professionals improve emails,
            presentations, interviews, conversations, and everyday
            communication using powerful AI assistance.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-blue-700 text-white px-7 py-4 rounded-xl hover:bg-blue-800 transition">
              Get Started
            </button>

            <button className="border border-blue-700 text-blue-700 px-7 py-4 rounded-xl hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex justify-center">
          <div className="w-[420px] h-[420px] rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold text-center">
              AI Assistant
            </h2>
          </div>
        </div>

      </div>
    </section>
  );
}