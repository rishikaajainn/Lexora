
"use client";

import { useState } from "react";
import { legalCategories } from "@/constants/legalCategories";

export default function LawyerRegistrationPage() {

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile_number: "",
    office_address: "",
    state_bar_council: "",
    bar_council_enrolment_number: "",
    years_of_experience: "",
    primary_practice_area: "",
  });

  const [files, setFiles] = useState({
    bar_council_id_card: null as File | null,
    certificate_of_practice: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setFiles({
      ...files,
     [e.target.name]: file,
   });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const data = new FormData();

    data.append("full_name", formData.full_name);
    data.append("email", formData.email);
    data.append("mobile_number", formData.mobile_number);
    data.append("office_address", formData.office_address);
    data.append("state_bar_council", formData.state_bar_council);
    data.append(
      "bar_council_enrolment_number",
      formData.bar_council_enrolment_number
    );
    data.append(
      "years_of_experience",
      formData.years_of_experience
    );
    data.append(
      "primary_practice_area",
      formData.primary_practice_area
    );

    if (files.bar_council_id_card) {
      data.append(
        "bar_council_id_card",
        files.bar_council_id_card
      );
    }

    if (files.certificate_of_practice) {
      data.append(
        "certificate_of_practice",
        files.certificate_of_practice
      );
    }

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/lawyers/register",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      alert(result.message);

    } catch (error) {

      alert("Registration failed.");

      console.error(error);

    }
  };

  return (
    <main className="min-h-screen bg-slate-100 py-10 px-6">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        {/* Heading */}

        <div className="text-center mb-10">

          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-800 text-white flex items-center justify-center text-3xl">
            ⚖️
          </div>

          <h1 className="text-4xl font-bold mt-6">
            Lawyer Registration
          </h1>

          <p className="text-gray-500 mt-2">
            Complete your professional verification to join Lexora.
          </p>

        </div>

        <form 
          onSubmit={handleSubmit}
          className="space-y-10"
        >
          

          {/* ================= PERSONAL INFORMATION ================= */}

          <section>

            <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Full Name"
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              />

              <input
                type="tel"
                name="mobile_number"
                value={formData.mobile_number}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              />

            </div>

          </section>

          {/* ================= PRACTICE INFORMATION ================= */}

          <section>

            <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
              Practice Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                name="state_bar_council"
                value={formData.state_bar_council}
                onChange={handleChange}
                placeholder="State Bar Council"
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              />

              <input
                type="text"
                name="bar_council_enrolment_number"
                value={formData.bar_council_enrolment_number}
                onChange={handleChange}
                placeholder="Bar Council Enrollment Number"
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              />

              

              <input
                type="number"
                name="years_of_experience"
                value={formData.years_of_experience}
                onChange={handleChange}
                placeholder="Years of Experience"
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              />

              <select
                name="primary_practice_area"
                value={formData.primary_practice_area}
                onChange={handleChange}
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
>
                <option value="">Select Primary Practice Area</option>

                {legalCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
               ))}
              </select>

              <input
                type="text"
                name="office_address"
                value={formData.office_address}
                onChange={handleChange}
                placeholder="Office Address"
                className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-700"
              />

            </div>
          </section>

      
          {/* ================= VERIFICATION DOCUMENTS ================= */}

          <section>

            <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
              Verification Documents
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="border-2 border-dashed rounded-2xl p-6">
                <p className="font-semibold">
                  Upload Bar Council ID
                </p>
                <input
                  type="file"
                  name="bar_council_id_card"
                  onChange={handleFileChange}
                  className="mt-4"
                />
              </div>

              <div className="border-2 border-dashed rounded-2xl p-6">
                <p className="font-semibold">
                  Upload Certificate of Practice
                </p>
                <input
                  type="file"
                  name="certificate_of_practice"
                  onChange={handleFileChange}
                  className="mt-4"
                />
              </div>

            </div>

          </section>

          {/* ================= DECLARATION ================= */}

          <section className="space-y-6">

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1"
              />
              <span className="text-gray-700">
                I hereby declare that all the information provided is true and correct.
                I understand that Lexora may verify my advocate credentials before
                approving my account.
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-900 text-white py-4 rounded-xl text-lg font-semibold transition"
            >
              Submit Verification
            </button>

          </section>

        </form>

      </div>

    </main>
  );
}