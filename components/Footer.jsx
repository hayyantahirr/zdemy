import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      {/* First Footer Section */}
      <footer className="relative w-full h-auto min-h-[200px] sm:min-h-[250px] md:min-h-[350px] lg:h-[390px]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/carousel-1.jpg"
              alt="Footer background"
              fill
              className="object-cover rounded-[5px]"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-65"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-8 md:py-0">
          {/* Heading */}
          <div className="max-w-[706px] text-center mb-8 sm:mb-12 md:mb-20">
            <h2 className="text-[18px] sm:text-[24px] md:text-[30px] font-medium text-white leading-[1.33] font-poppins">
              A wonderful <span className="text-[#FF725E]">FIRST</span> out of
              home learning <span className="text-[#FF725E]">EXPERIENCE</span>{" "}
              For you Child.
            </h2>
          </div>

          {/* Newsletter Form */}
          <div className="w-full max-w-[900px] h-auto relative">
            <div className="w-full h-full flex flex-row">
              <input
                type="email"
                placeholder="Enter e-mail to recieve news letter"
                className="flex-1 h-12 sm:h-16 md:h-20 px-4 sm:px-5 py-3 sm:py-4 bg-transparent border-2 border-white rounded-[5px] rounded-r-none text-white text-base sm:text-lg md:text-[20px] placeholder-white focus:outline-none"
              />
              <div className="w-[60px] sm:w-[100px] h-12 sm:h-16 md:h-20 bg-[#FF725E] rounded-[5px] rounded-l-none flex items-center justify-center">
                <button
                  type="submit"
                  className="w-full h-full flex items-center justify-center"
                >
                  <svg
                    width="30"
                    height="25"
                    viewBox="0 0 44 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:w-[35px] sm:h-[30px] md:w-[44px] md:h-[37px]"
                  >
                    <path
                      d="M43.75 0.5L0 15.5L14.06 21.56L35.94 7.81L18.75 24.06L37.5 36.5L43.75 0.5Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Second Footer Section (from Figma) */}
      <footer className="w-full bg-[#22343D] py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-20">
            {/* Logo and Description */}
            <div className="mb-8 sm:mb-6 md:mb-0 ml-15">
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3 md:mb-4">
                <Image src="/Zdemy-1.png" alt="Zdemy" width={100} height={50} />
              </h3>
              <p className="text-white text-sm sm:text-base mb-4 sm:mb-6">
                Zdemy is a One stop solution for you cambridge consultation of
                IGCSE GCSE and A-Levels.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                {/* Facebook Icon */}
                <Link href="#" className="text-white hover:opacity-80">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                {/* WhatsApp Icon */}
                <Link href="#" className="text-white hover:opacity-80">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]"
                  >
                    <path d="M20.4 3.6C18.2 1.3 15.2 0 12 0 5.5 0 0.1 5.4 0.1 11.9c0 2.1 0.5 4.1 1.5 5.9l-1.6 5.8 6-1.6c1.8 1 3.8 1.5 5.8 1.5 6.5 0 11.9-5.4 11.9-11.9 0.1-3.2-1.2-6.2-3.3-8.1zm-8.4 18.3c-1.8 0-3.5-0.5-5-1.3l-0.4-0.2-3.5 0.9 0.9-3.4-0.2-0.4c-0.9-1.6-1.4-3.4-1.4-5.2 0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9 1.9 1.9 2.9 4.3 2.9 6.9 0.1 5.4-4.3 9.6-9.8 9.6zm5.4-7.3c-0.3-0.1-1.7-0.9-2-1-0.3-0.1-0.5-0.1-0.7 0.1-0.2 0.3-0.8 1-0.9 1.2-0.2 0.2-0.3 0.2-0.6 0.1-0.3-0.1-1.3-0.5-2.4-1.5-0.9-0.8-1.5-1.8-1.7-2.1-0.2-0.3 0-0.5 0.1-0.6s0.3-0.3 0.4-0.5c0.1-0.1 0.2-0.3 0.3-0.4 0.1-0.2 0-0.3 0-0.4-0.1-0.1-0.7-1.7-1-2.3-0.3-0.6-0.5-0.5-0.7-0.5-0.2 0-0.4 0-0.6 0-0.2 0-0.5 0.1-0.8 0.4-0.3 0.3-1 1-1 2.5s1.1 2.9 1.2 3.1c0.1 0.2 2.1 3.2 5.1 4.5 0.7 0.3 1.3 0.5 1.7 0.6 0.7 0.2 1.4 0.2 1.9 0.1 0.6-0.1 1.7-0.7 2-1.4 0.3-0.7 0.3-1.3 0.2-1.4-0.1-0.2-0.3-0.3-0.6-0.4z" />
                  </svg>
                </Link>
                {/* Instagram Icon */}
                <Link href="#" className="text-white hover:opacity-80">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                {/* Twitter Icon */}
                <Link href="#" className="text-white hover:opacity-80">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Links */}
            <div className="mb-8 sm:mb-6 md:mb-0 ml-15">
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3 md:mb-6">
                Links
              </h3>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                <li>
                  <Link
                    href="/"
                    className="text-white text-base sm:text-lg hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white text-base sm:text-lg hover:underline"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/management"
                    className="text-white text-base sm:text-lg hover:underline"
                  >
                    Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="text-white text-base sm:text-lg hover:underline"
                  >
                    News & Event
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="text-white text-base sm:text-lg hover:underline"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-white text-base sm:text-lg hover:underline"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Find Us */}
            <div className="mb-8 sm:mb-6 md:mb-0 ml-15">
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3 md:mb-6">
                Find Us
              </h3>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="flex items-start">
                  <div className="mr-2 mt-1 flex-shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]"
                    >
                      <path d="M12 0C7.802 0 4 3.403 4 7.602C4 11.8 7.469 16.812 12 24C16.531 16.812 20 11.8 20 7.602C20 3.403 16.199 0 12 0ZM12 11C10.343 11 9 9.657 9 8C9 6.343 10.343 5 12 5C13.657 5 15 6.343 15 8C15 9.657 13.657 11 12 11Z" />
                    </svg>
                  </div>
                  <p className="text-white text-base sm:text-lg">
                    Lorem ipsum dolor siter amet, consectetur adipising.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 mt-1 flex-shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>
                  <p className="text-white text-base sm:text-lg">
                    Info@gmail.com
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 mt-1 flex-shrink-0">
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 20 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sm:w-[19px] sm:h-[22px] md:w-[20px] md:h-[24px]"
                    >
                      <path d="M19.45 17.27l-4.66-2.02c-.44-.19-.98-.06-1.29.32l-2.07 2.53c-3.21-1.61-5.82-4.22-7.43-7.43l2.53-2.07c.38-.31.51-.85.32-1.29L4.83.65C4.63.24 4.18.01 3.73.11L.57.89C.11.99-.14 1.43.06 1.88 1.49 7.2 5.46 11.72 10.53 14.04c5.06 2.32 10.23 1.93 15.12-1.08.45-.28.59-.87.38-1.32l-2.31-4.17c-.2-.35-.64-.58-1.09-.48l-3.18.78z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-base sm:text-lg">
                      +234 805 029 1265
                    </p>
                    <p className="text-white text-base sm:text-lg">
                      +234 907 228 0656
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <p className="text-white text-base sm:text-lg opacity-50">
              Copyright © {new Date().getFullYear()}. All Right Reserved.
            </p>
          </div>
          <div className="mt-8 sm:mt-3 md:mt-5 text-center">
            <p className="text-white text-sm sm:text-xs opacity-50">
              powered by{" "}
              <a
                target="_blank"
                href="https://hayyantahirr.vercel.app/"
                className="hover:underline cursor-pointer text-[#FF725E]"
              >
                hayyantahirr
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
