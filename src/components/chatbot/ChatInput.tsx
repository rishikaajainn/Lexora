"use client";

import { useRef, useState } from "react";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);

  const recognitionRef = useRef<any>(null);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setMessage(transcript);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
    recognitionRef.current = recognition;
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const handleSend = () => {
    if (!message.trim()) return;

    console.log("User Message:", message);

    // Backend API will be connected here later.

    setMessage("");
  };

  return (
    <div className="border-t p-4">

      <div className="flex gap-3">

        <input
          type="text"
          placeholder="Describe your legal issue..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-700"
        />

        <button
          type="button"
          onClick={isListening ? stopListening : startListening}
          className={`px-5 rounded-xl text-white transition ${
            isListening
              ? "bg-red-600 hover:bg-red-700"
              : "bg-gray-700 hover:bg-gray-800"
          }`}
        >
          {isListening ? "⏹" : "🎤"}
        </button>

        <button
          type="button"
          onClick={handleSend}
          className="bg-blue-700 text-white px-6 rounded-xl hover:bg-blue-800 transition"
        >
          Send
        </button>

      </div>

      {isListening && (
        <p className="mt-3 text-red-600 font-medium animate-pulse">
          🎤 Listening...
        </p>
      )}

    </div>
  );
}