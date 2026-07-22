"use client";

import { useState } from "react";
import CourtSetup from "@/components/court-rehearsal/CourtSetup";
import CourtChat from "@/components/court-rehearsal/CourtChat";
import CourtResult from "@/components/court-rehearsal/CourtResult";

export default function CourtRehearsalPage() {
  const [screen, setScreen] = useState<"setup" | "chat" | "result">("setup");

  return (
    <div className="min-h-[calc(100vh-120px)]">
      {screen === "setup" && (
        <CourtSetup onStart={() => setScreen("chat")} />
      )}

      {screen === "chat" && (
        <CourtChat onFinish={() => setScreen("result")} />
      )}

      {screen === "result" && (
        <CourtResult onRestart={() => setScreen("setup")} />
      )}
    </div>
  );
}