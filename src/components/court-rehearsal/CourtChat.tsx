"use client";

import CourtSidebar from "./CourtSidebar";

type CourtChatProps = {
  onFinish: () => void;
};

export default function CourtChat({
  onFinish,
}: CourtChatProps) {
  return (
    <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-140px)]">

      {/* Chat Area */}

      <div className="lg:col-span-3 bg-white rounded-2xl border shadow-sm flex flex-col">

        {/* Header */}

        <div className="border-b p-5">

          <h2 className="text-2xl font-bold">
            AI Judge
          </h2>

          <p className="text-gray-500 mt-1">
            Answer each question clearly and honestly.
          </p>

        </div>

        {/* Messages */}

        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">

          {/* Judge */}

          <div className="max-w-2xl bg-white border rounded-2xl p-5 shadow-sm">

            <h3 className="font-semibold text-blue-700">
              AI Judge
            </h3>

            <p className="mt-2">
              Good morning.
              <br /><br />
              Please introduce yourself to the court.
            </p>

          </div>

          {/* User */}

          <div className="flex justify-end">

            <div className="max-w-2xl bg-blue-700 text-white rounded-2xl p-5">

              <h3 className="font-semibold">
                You
              </h3>

              <p className="mt-2">
                My name is Ash and I am the tenant in this property dispute.
              </p>

            </div>

          </div>

          {/* Judge */}

          <div className="max-w-2xl bg-white border rounded-2xl p-5 shadow-sm">

            <h3 className="font-semibold text-blue-700">
              AI Judge
            </h3>

            <p className="mt-2">
              Thank you.
              <br /><br />
              When did the incident happen?
            </p>

          </div>

        </div>

        {/* Fixed Input */}

        <div className="border-t p-4">

          <div className="flex gap-3">

            <input
              type="text"
              placeholder="Type your response..."
              className="flex-1 border rounded-xl px-4 py-3 outline-none"
            />

            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 rounded-xl transition">
              Send
            </button>

            <button
              onClick={onFinish}
              className="border rounded-xl px-5 hover:bg-slate-100 transition"
            >
              Finish
            </button>

          </div>

        </div>

      </div>

      {/* Sidebar */}

      <CourtSidebar />

    </div>
  );
}