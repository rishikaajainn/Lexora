import {
  ArrowRight,
  ShieldCheck,
  Globe,
  Scale,
  FileText,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div>

          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            <ShieldCheck size={16} />
            Trusted AI Legal Assistant
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight text-slate-900">
            Know Your Rights.
            <br />
            Understand Your Options.
          </h1>

          <p className="mt-8 text-xl text-slate-600 leading-9">
            Lexora helps citizens understand legal issues in simple language,
            analyze legal documents, prepare complaints, compare legal paths,
            and connect with lawyers—all powered by multilingual AI.
          </p>

          <div className="mt-10 flex gap-4">

            <button className="bg-blue-700 hover:bg-blue-800 transition text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2">
              Start Free
              <ArrowRight size={18} />
            </button>

            <button className="border border-slate-300 px-8 py-4 rounded-xl hover:bg-white transition">
              Explore Features
            </button>

          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">

            <div>
              <Globe className="text-blue-700 mb-2" />
              <p className="font-bold">25+</p>
              <span className="text-sm text-gray-500">
                Languages
              </span>
            </div>

            <div>
              <Scale className="text-blue-700 mb-2" />
              <p className="font-bold">Legal AI</p>
              <span className="text-sm text-gray-500">
                Rights Guidance
              </span>
            </div>

            <div>
              <FileText className="text-blue-700 mb-2" />
              <p className="font-bold">Smart Docs</p>
              <span className="text-sm text-gray-500">
                Analysis
              </span>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="bg-white rounded-3xl shadow-2xl p-8 border">

          <div className="flex justify-between items-center">

            <h2 className="text-xl font-bold">
              AI Legal Analysis
            </h2>

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              Ready
            </span>

          </div>

          <div className="mt-8 space-y-6">

            <div className="p-5 rounded-xl bg-slate-100">
              <p className="text-gray-500 text-sm">Case Type</p>
              <h3 className="font-bold mt-1">
                Property Dispute
              </h3>
            </div>

            <div className="p-5 rounded-xl bg-blue-50">
              <p className="text-gray-500 text-sm">AI Recommendation</p>
              <h3 className="font-semibold mt-1">
                Gather ownership documents and consult a property lawyer before filing.
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-slate-100 rounded-xl p-5">
                <p className="text-sm text-gray-500">
                  Estimated Timeline
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  3-6 Months
                </h2>

              </div>

              <div className="bg-slate-100 rounded-xl p-5">
                <p className="text-sm text-gray-500">
                  Success Probability
                </p>

                <h2 className="text-2xl font-bold mt-2 text-green-600">
                  91%
                </h2>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}