import Pagination from "@/components/Pagination";
import React from "react";

const page = () => {
  return (
    <>
      <Pagination currentRoute="Careers" />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start gap-6 mb-10">
          <h1 className="text-4xl font-bold text-[#6b6b47]">JOIN US!</h1>
          <p className="text-lg">
            Our customer support team on the other side is swift,
            <br />
            feel free to send your questions.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First row */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 p-3 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Address"
                className="w-full border border-gray-300 p-3 focus:outline-none"
              />
            </div>

            {/* Second row */}
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 p-3 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border border-gray-300 p-3 focus:outline-none"
              />
            </div>

            {/* Third row */}
            <div>
              <input
                type="email"
                placeholder="E-mail Address"
                className="w-full border border-gray-300 p-3 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Position"
                className="w-full border border-gray-300 p-3 focus:outline-none"
              />
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
              className="bg-[#F2811D] text-white py-3 px-8 hover:bg-[#e07718] transition-colors"
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
