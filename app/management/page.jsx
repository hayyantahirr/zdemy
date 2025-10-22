import Pagination from "@/components/Pagination";
import TeacherCard from "@/components/managementComponents/TeacherCard";
import FounderSection from "@/components/managementComponents/FounderSection";
import React from "react";
import axios from "axios";

const Page = async () => {
  let teachersForOlevel = [];

  try {
    const res = await axios.get(
      "https://zdemy-xi.vercel.app/api/teachersForOlevels"
    );
    // Ensure we have an array, handle different response structures
    teachersForOlevel = Array.isArray(res.data)
      ? res.data
      : Array.isArray(res.data.teachers)
      ? res.data.teachers
      : Array.isArray(res.data.data)
      ? res.data.data
      : [];
  } catch (error) {
    console.error("Error fetching teachers for O-level:", error);
    teachersForOlevel = []; // Fallback to empty array
  }

  console.log(teachersForOlevel); // (prints on the server, not browser)

  // helper function to group teachers by subject
  const groupTeachersBySubject = (teachers) => {
    // Add safety check to ensure teachers is an array
    if (!Array.isArray(teachers)) {
      console.warn("Teachers data is not an array:", teachers);
      return {};
    }

    const subjectMap = {};
    teachers.forEach((teacher) => {
      // Add safety check for teacher.subjects
      if (teacher && Array.isArray(teacher.subjects)) {
        teacher.subjects.forEach((subject) => {
          if (!subjectMap[subject]) subjectMap[subject] = [];
          subjectMap[subject].push(teacher);
        });
      }
    });
    return subjectMap;
  };

  const oLevelSubjects = groupTeachersBySubject(teachersForOlevel);

  return (
    <>
      <Pagination currentRoute="Management" />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Our Management Team
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet the dedicated professionals who lead our institution with
              passion and expertise.
            </p>
          </div>

          {/* Founder Section */}
          <FounderSection />

          {/* O-level Faculty Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our Faculty for O-level & IGCSE
            </h1>
          </div>

          {/* Loop through each subject */}
          <div className="space-y-10">
            {Object.entries(oLevelSubjects).map(([subject, teachers]) => (
              <div key={subject}>
                <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center">
                  {subject}
                </h2>
                <div className="space-y-6">
                  {teachers.map((teacher, index) => (
                    <TeacherCard
                      key={index}
                      teacher={teacher}
                      delay={0.2 + index * 0.1}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
