import Pagination from "@/components/Pagination";
import TeacherCard from "@/components/managementComponents/TeacherCard";
import FounderSection from "@/components/managementComponents/FounderSection";
import React from "react";

const Page = () => {
  const teachersForOlevel = [
    {
      name: "Jennifer Florenzo",
      image: "/images/teacher-2-transparent-bg.png",
      description:
        "A dedicated educator with 10 years of experience in teaching mathematics and physics. Jennifer brings innovative teaching methods and a passion for helping students achieve their academic goals. She holds a Master's degree in Mathematics Education and has been recognized for her outstanding contribution to student development.",
      aGrade: 100,
      a: 50,
      socialLinks: [
        {
          name: "Facebook",
          facebookLink: "https://www.facebook.com/",
        },
        {
          name: "X",
          xLink: "https://x.com/",
        },
        {
          name: "LinkedIn",
          linkedInLink: "https://www.linkedin.com/",
        },
      ],
    },
  ];
  const teachersForAlevel = [
    {
      name: "Boakye Oluwafemi",
      image: "/images/teacher-3-transparent-bg.png",
      description:
        "Mr.Boakye a dedicated teacher for A-level Mathematics and Physics.Teacher with 6 years of experience in teaching A-level Mathematics and Physics.",
      aGrade: 150,
      a: 60,
      socialLinks: [
        {
          name: "Facebook",
          facebookLink: "https://www.facebook.com/",
        },
        {
          name: "X",
          xLink: "https://x.com/",
        },
        {
          name: "LinkedIn",
          linkedInLink: "https://www.linkedin.com/",
        },
      ],
    },
  ];

  return (
    <>
      <Pagination currentRoute="Management" />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div className="container mx-auto px-6">
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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our Faculty for O-level & IGCSE
            </h1>
          </div>

          <div className="space-y-6">
            {teachersForOlevel.map((teacher, index) => (
              <TeacherCard key={index} teacher={teacher} />
            ))}
          </div>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our Faculty for A-levels
            </h1>
          </div>

          <div className="space-y-6">
            {teachersForAlevel.map((teacher, index) => (
              <TeacherCard key={index} teacher={teacher} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
