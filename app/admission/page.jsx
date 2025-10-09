import Pagination from "@/components/Pagination";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const AdmissionPage = () => {
  const admissionRules = [
    {
      index: 1,
      text: "Copy of Applicant's Nadra's Smart Card/B-Form",
    },
    {
      index: 2,
      text: "Four passport size photographs (with white background)",
    },
    {
      index: 3,
      text: "School Leaving Certificate",
    },
    {
      index: 4,
      text: "CNIC copy of both parents",
    },
    {
      index: 5,
      text: "Schools previous result ",
    },
  ];
  return (
    <>
      <Pagination currentRoute="Admissions" />

      <div className=" mx-auto px-4 py-16 w-[75%]">
        {/* How to Apply Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-[42px] font-bold mb-8 text-center opacity-60">
            <span className="text-[#FF725E]">HOW</span> TO APPLY
          </h1>

          <p className="text-gray-700 text-center mb-15  mx-auto">
            Applicants can directly apply by visiting our office reception with
            the following requirments . The applicants can visit our campus in
            office hours to submit their application form and required
            documents. Do bring your parent's/Guardian's along with you for
            legal purposes.
          </p>

          {/* Required Documents List */}
          <div className="space-y-4 mx-auto mb-6">
            {admissionRules.map((rule) => (
              <div className="flex items-start" key={rule.index}>
                <span className="text-xl font-bold mr-2 opacity-50">{`${rule.index} -`}</span>
                <span className="text-xl opacity-50">{rule.text}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-start mb-6 font-extrabold">
            Applicants can also apply by clicking the following link to fill out
            the application form online.
          </p>

          {/* Apply Now Button */}
          <div className="flex justify-start">
            <button className="bg-[#FF725E] hover:bg-[#FF725E] text-white font-bold py-4 px-8 rounded-md flex items-center cursor-pointer">
              <svg
                className="w-6 h-6 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12L19 12M19 12L12 5M19 12L12 19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              APPLY NOW
            </button>
          </div>
          <p className="text-gray-700 text-start my-6">
            After students have taken their admission test, our admissions team
            will be contacting them within three weeks to announce the results.
          </p>
        </div>
      </div>
    </>
  );
};

export default AdmissionPage;
