"use client";
import React, { useState } from "react";
import Image from "next/image";
import AnimateOnScroll from "../AnimateOnScroll";

const TeacherCard = ({ teacher, delay = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageVisible, setImageVisible] = useState(true);

  const handleArrowClick = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      // Fade out image when expanding
      setImageVisible(false);
    } else {
      // Fade in image when collapsing
      setTimeout(() => setImageVisible(true), 300);
    }
  };

  return (
    <AnimateOnScroll animation="fadeInUp" duration={1} delay={delay}>
      <div className="w-[95%] sm:w-[80%] mx-auto mb-6">
        {/* Main Card */}
        <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-visible">
          <div className="flex items-center justify-between p-4 sm:p-6 h-16 sm:h-20">
            {/* Left side - Name and Arrow */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={handleArrowClick}
                className={`text-gray-600 hover:text-gray-800 transition-all duration-300 transform cursor-pointer ${
                  isExpanded ? "rotate-180" : "rotate-0"
                }`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="sm:w-5 sm:h-5 transition-transform duration-300"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 tracking-wide">
                {teacher.name}
              </h3>
            </div>

            {/* Right side - Image with 50% outside */}
            <div
              className={`transition-opacity duration-500 ${
                imageVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="w-16 h-24 sm:w-24 sm:h-40">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dropdown Section */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded
              ? "max-h-[600px] md:max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-gray-50 rounded-2xl shadow-inner p-4 sm:p-5">
            {/* Mobile Layout - Column (Image first, then description) */}
            <div className="flex flex-col sm:hidden space-y-4">
              {/* Mobile Image */}
              <div className="flex justify-center">
                <div className="w-40 h-55 relative">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    width={150}
                    height={150}
                    className="mx-auto object-cover "
                  />
                </div>
              </div>

              {/* Mobile Description */}
              <div className="text-center ">
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  {teacher.name}
                </h4>
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  <span className="text-[#FF725E]"> {teacher.experience}</span>{" "}
                  + Years of Proffesional teaching experience
                </h4>
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  <span className="text-[#FF725E]"> Batch A </span>
                  {teacher.schedule.map((t) => {
                    return (
                      <span key={t._id} className="flex flex-col gap-4">
                        {t.day} = {t.startTime} - {t.endTime}
                      </span>
                    );
                  })}
                </h4>
                <div className="flex justify-center items-center space-x-4">
                  <div className="flex items-center">
                    <span className="font-semibold text-[#FF725E] text-lg">
                      A*:
                    </span>
                    <p className="ml-2 text-lg">{teacher.aGrade || "0"}+</p>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-[#FF725E] text-lg">
                      A:
                    </span>
                    <p className="ml-2 text-lg">{teacher.aStar || "0"}+</p>
                  </div>
                </div>
                <div className="flex gap-6 justify-center mt-5">
                  <a
                    href={teacher.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.116 0-3.472.012-4.695.068-2.61.12-3.832 1.343-3.952 3.952-.056 1.223-.067 1.578-.067 4.695s.011 3.472.067 4.695c.12 2.61 1.342 3.832 3.952 3.952 1.223.056 1.578.067 4.695.067s3.472-.011 4.695-.067c2.61-.12 3.832-1.342 3.952-3.952.056-1.223.067-1.578.067-4.695s-.011-3.472-.067-4.695c-.12-2.61-1.342-3.832-3.952-3.952-1.223-.056-1.578-.067-4.695-.067zM12 6.837c-2.835 0-5.163 2.328-5.163 5.163s2.328 5.163 5.163 5.163 5.163-2.328 5.163-5.163-2.328-5.163-5.163-5.163zm0 8.482c-1.833 0-3.319-1.486-3.319-3.319s1.486-3.319 3.319-3.319 3.319 1.486 3.319 3.319-1.486 3.319-3.319 3.319zm4.332-6.605c-.624 0-1.13.506-1.13 1.13s.506 1.13 1.13 1.13 1.13-.506 1.13-1.13-.506-1.13-1.13-1.13z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href={teacher.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Row (Description left, Image right) */}
            <div className="hidden sm:flex items-start justify-between">
              {/* Left side - Description */}
              <div className="flex flex-col justify-center  w-[70%]">
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  {teacher.name}
                </h4>
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  <span className="text-[#FF725E]">
                    {teacher.experience}{" "}
                    <span className="text-black">
                      + Years of Profesional Teaching Experience
                    </span>
                  </span>{" "}
                </h4>
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  <span className="text-[#FF725E]"> Batch A </span>
                  {teacher.schedule.map((t) => {
                    return (
                      <span key={t._id} className="flex flex-col gap-4">
                        {t.day} = {t.startTime} - {t.endTime}
                      </span>
                    );
                  })}
                </h4>

                <p className="text-gray-600 leading-relaxed text-base mb-2">
                  {teacher.description}
                </p>
                <div className="flex items-center mb-5">
                  <span className="font-semibold text-[#FF725E] text-2xl">
                    A*:
                  </span>
                  <p className="ml-5 text-xl">{teacher.aGrade || "0"}+</p>
                  <span className="font-semibold text-[#FF725E] ml-5 text-2xl">
                    A:
                  </span>
                  <p className="ml-5 text-xl">{teacher.a || "0"}+</p>
                </div>

                {/* Social Links */}
                <div className="flex gap-6">
                  <a
                    href={teacher.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.116 0-3.472.012-4.695.068-2.61.12-3.832 1.343-3.952 3.952-.056 1.223-.067 1.578-.067 4.695s.011 3.472.067 4.695c.12 2.61 1.342 3.832 3.952 3.952 1.223.056 1.578.067 4.695.067s3.472-.011 4.695-.067c2.61-.12 3.832-1.342 3.952-3.952.056-1.223.067-1.578.067-4.695s-.011-3.472-.067-4.695c-.12-2.61-1.342-3.832-3.952-3.952-1.223-.056-1.578-.067-4.695-.067zM12 6.837c-2.835 0-5.163 2.328-5.163 5.163s2.328 5.163 5.163 5.163 5.163-2.328 5.163-5.163-2.328-5.163-5.163-5.163zm0 8.482c-1.833 0-3.319-1.486-3.319-3.319s1.486-3.319 3.319-3.319 3.319 1.486 3.319 3.319-1.486 3.319-3.319 3.319zm4.332-6.605c-.624 0-1.13.506-1.13 1.13s.506 1.13 1.13 1.13 1.13-.506 1.13-1.13-.506-1.13-1.13-1.13z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href={teacher.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
                {/* Instagram */}
              </div>

              {/* Right side - Full Image */}
              <div className="">
                <div className="w-48 h-32 relative">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    width={150}
                    height={150}
                    className="object-cover "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

export default TeacherCard;
