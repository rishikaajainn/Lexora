export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-800 text-white flex items-center justify-center font-bold text-xl">
            ⚖️
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Lexora
            </h1>

            <p className="text-xs text-gray-500">
              AI Legal Assistant
            </p>
          </div>
        </div>

        {/* Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-slate-700 font-medium">

          <li className="cursor-pointer hover:text-blue-800 transition">
            Features
          </li>

          <li className="cursor-pointer hover:text-blue-800 transition">
            How It Works
          </li>

          <li className="cursor-pointer hover:text-blue-800 transition">
            Explore
          </li>

          <li className="cursor-pointer hover:text-blue-800 transition">
            Resources
          </li>

        </ul>

        {/* Right */}
        <div className="flex items-center gap-4">

          <button className="text-slate-700 hover:text-blue-800">
            🌐 Language
          </button>

          <button className="text-slate-700 hover:text-blue-800">
            Login
          </button>

          <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-xl transition font-medium shadow-md">
            Get Started
          </button>

        </div>

      </div>
    </nav>
  );
}