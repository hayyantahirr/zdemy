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
                <span className="text-[#FF725E]"> I Teach</span>{" "}
                {teacher.subjects.join(" & ")}
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                {teacher.description}
              </p>
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
                  <p className="ml-2 text-lg">{teacher.a || "0"}+</p>
                </div>
              </div>
              {/* Social Links */}
              {teacher.socialLinks && (
                <div className="flex items-center">
                  <div className="flex items-center gap-5 mx-auto mt-5">
                    {/* X / Twitter */}
                    {teacher.socialLinks.xLink && (
                      <a
                        href={teacher.socialLinks.xLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-600 transition-colors"
                        aria-label="Twitter/X"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    )}

                    {/* LinkedIn */}
                    {teacher.socialLinks.linkedInLink && (
                      <a
                        href={teacher.socialLinks.linkedInLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}

                    {/* Facebook */}
                    {teacher.socialLinks.facebookLink && (
                      <a
                        href={teacher.socialLinks.facebookLink}
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
                    )}
                  </div>
                </div>
              )}
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
                <span className="text-[#FF725E]"> I Teach</span>{" "}
                {teacher.subjects.join(" & ")}
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
              {teacher.socialLinks && (
                <div className="flex items-center">
                  <div className="flex items-center space-x-4">
                    {/* X / Twitter */}
                    {teacher.socialLinks.xLink && (
                      <a
                        href={teacher.socialLinks.xLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-600 transition-colors"
                        aria-label="Twitter/X"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    )}

                    {/* LinkedIn */}
                    {teacher.socialLinks.linkedInLink && (
                      <a
                        href={teacher.socialLinks.linkedInLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}

                    {/* Facebook */}
                    {teacher.socialLinks.facebookLink && (
                      <a
                        href={teacher.socialLinks.facebookLink}
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
                    )}
                  </div>
                </div>
              )}
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
