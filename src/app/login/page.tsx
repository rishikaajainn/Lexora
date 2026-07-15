"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";



export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Login successful!");

        // We'll store user/JWT later
        router.push("/dashboard");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Server error.");
    }

    setLoading(false);
  };
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10">

        {/* Logo & Heading */}
        <div className="text-center">

          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-800 flex items-center justify-center text-white text-3xl">
            ⚖️
          </div>

          <h1 className="mt-6 text-3xl font-bold text-slate-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-500">
            Sign in to continue to Lexora
          </p>

        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >

          {/* Email */}
          <div>

            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-700"
            />

          </div>

          {/* Password */}
          <div>

            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-700"
            />

          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">

            <button
              type="button"
              className="text-sm text-blue-700 hover:underline"
            >
              Forgot Password?
            </button>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-800 text-white py-4 rounded-xl hover:bg-blue-900 transition font-semibold"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {message && (
            <p className="text-center mt-4 text-sm font-medium">
              {message}
            </p>
          )}

        </form>

        {/* Signup Link */}
        <p className="text-center mt-8 text-gray-500">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-700 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>

    </main>
  );
}