"use client";
import Pagination from "@/components/Pagination";
import axios from "axios";
import React, { useRef, useState } from "react";

const page = () => {
  const user_name = useRef(null);
  const user_email = useRef(null);
  const user_address = useRef(null);
  const mobile_number = useRef(null);
  const position_name = useRef(null);

  // State for validation errors
  const [errors, setErrors] = useState({});

  const currentDate = new Date().toLocaleDateString();

  // Simple validation function - returns true if valid, false if invalid
  const validateForm = () => {
    // Reset errors
    const newErrors = {};

    // Name validation - required
    if (!user_name.current?.value?.trim()) {
      newErrors.user_name = "Name is required";
    }

    // Email validation - required and format check
    if (!user_email.current?.value?.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_email.current.value)) {
      newErrors.user_email = "Invalid email format";
    }

    // Address validation - required
    if (!user_address.current?.value?.trim()) {
      newErrors.user_address = "Address is required";
    }

    // Mobile validation - required and number check
    if (!mobile_number.current?.value?.trim()) {
      newErrors.mobile_number = "Mobile number is required";
    } else if (
      !/^\d{10,}$/.test(mobile_number.current.value.replace(/\D/g, ""))
    ) {
      newErrors.mobile_number = "Enter at least 10 digits";
    }

    // Position validation - required
    if (!position_name.current?.value?.trim()) {
      newErrors.position_name = "Position is required";
    }

    // Update error state
    setErrors(newErrors);

    // Form is valid if no errors
    return Object.keys(newErrors).length === 0;
  };

  // Move data object inside the submit handler where refs are available
  async function handleSubmit(e) {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return; // Stop if validation fails
    }

    // Create data object here where refs are guaranteed to be initialized
    const data = {
      service_id: "service_51rdiyg", // from EmailJS
      template_id: "template_a2ehwjs", // your auto reply template ID
      user_id: "weOrWij0wVzYHCqoz", // from EmailJS account
      template_params: {
        user_name: user_name.current?.value || "",
        user_email: user_email.current?.value || "",
        user_address: user_address.current?.value || "",
        position_name: position_name.current?.value || "",
        submission_date: currentDate,
        currentYear: new Date().getFullYear(),
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log("EmailJS Response:", res.data);
      alert("Your application was submitted successfully!");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
    }
  }
  return (
    <>
      <Pagination currentRoute="Careers" />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start gap-6 mb-10">
          <h1 className="text-4xl font-bold text-[#6b6b47]">JOIN US!</h1>
          <p className="text-md opacity-40">
            Our customer support team on the other side is swift,
            <br />
            feel free to send your questions.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First row */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className={`w-full border ${
                  errors.user_name ? "border-red-500" : "border-gray-300"
                } p-3 focus:outline-none`}
                ref={user_name}
              />
              {errors.user_name && (
                <p className="text-red-500 text-xs mt-1">{errors.user_name}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Address"
                className={`w-full border ${
                  errors.user_address ? "border-red-500" : "border-gray-300"
                } p-3 focus:outline-none`}
                ref={user_address}
              />
              {errors.user_address && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.user_address}
                </p>
              )}
            </div>

            {/* Second row */}
            <div>
              <input
                type="tel"
                placeholder="Mobile Number"
                className={`w-full border ${
                  errors.mobile_number ? "border-red-500" : "border-gray-300"
                } p-3 focus:outline-none`}
                ref={mobile_number}
              />
              {errors.mobile_number && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.mobile_number}
                </p>
              )}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Mobile number 2 (optional)"
                className="w-full border border-gray-300 p-3 focus:outline-none"
              />
            </div>

            {/* Third row */}
            <div>
              <input
                type="email"
                placeholder="E-mail Address"
                className={`w-full border ${
                  errors.user_email ? "border-red-500" : "border-gray-300"
                } p-3 focus:outline-none`}
                ref={user_email}
              />
              {errors.user_email && (
                <p className="text-red-500 text-xs mt-1">{errors.user_email}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Position"
                className={`w-full border ${
                  errors.position_name ? "border-red-500" : "border-gray-300"
                } p-3 focus:outline-none`}
                ref={position_name}
              />
              {errors.position_name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.position_name}
                </p>
              )}
            </div>
          </div>

          {/* File uploads */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <label className="text-gray-600">CV:</label>
              <input
                type="file"
                className="file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-gray-100 hover:file:bg-gray-200"
              />
            </div>
            <div className="flex items-center gap-3">
              <label className="text-gray-600">Cover Letter:</label>
              <input
                type="file"
                className="file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-gray-100 hover:file:bg-gray-200"
              />
            </div>
          </div>

          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="bg-[#FF725E] text-white py-3 px-8 hover:bg-[#ff715eb5] transition-colors"
            >
              Click to Apply
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
