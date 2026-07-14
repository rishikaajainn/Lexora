"use client";

import { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    language: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting...", formData);

    setMessage("");

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          country: formData.country,
          language: formData.language,
        }),
      });
      console.log(response);

      const data = await response.json();
      

      console.log(data);

      if (!response.ok) {
        setMessage(data.message);
        return;
      }

      setMessage("🎉 Account created successfully!");

      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        country: "",
        language: "",
      });

    } catch (error) {
      setMessage("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-10">

        <div className="text-center">

          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-800 flex items-center justify-center text-white text-3xl">
            ⚖️
          </div>

          <h1 className="mt-6 text-3xl font-bold text-slate-900">
            Create Your Account
          </h1>

          <p className="mt-2 text-gray-500">
            Join Lexora and access AI-powered legal assistance.
          </p>

        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({
                ...formData,
                confirmPassword: e.target.value,
              })
            }
            className="w-full border rounded-xl px-4 py-3"
          />

          <select
            value={formData.country}
            onChange={(e) =>
              setFormData({
                ...formData,
                country: e.target.value,
              })
            }
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-700 outline-none"
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </select>

          <select
            value={formData.language}
            onChange={(e) =>
              setFormData({
                ...formData,
                language: e.target.value,
              })
            }
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-700 outline-none"
          >
            <option value="">Preferred Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Marathi">Marathi</option>
            <option value="Tamil">Tamil</option>
            <option value="Telugu">Telugu</option>
            <option value="Bengali">Bengali</option>
            <option value="German">German</option>
          </select>

          <label className="flex items-start gap-3 text-sm text-gray-600">
            <input
              type="checkbox"
              className="mt-1 accent-blue-700"
            />
            <span>
              I agree to the Terms & Conditions and Privacy Policy.
            </span>
          </label>
          {message && (
            <p
              className={`text-center text-sm ${
                message.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-800 text-white py-4 rounded-xl hover:bg-blue-900 transition font-semibold disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Continue"}
          </button>

        </form>

        <p className="text-center mt-8 text-gray-500">
          Already have an account?
          <span className="text-blue-700 font-semibold cursor-pointer ml-2">
            Login
          </span>
        </p>

      </div>

    </main>
  );
}