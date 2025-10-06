"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-[60px] md:h-[90px] bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] relative">
      <div className=" h-full mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-[24px] md:text-[28px] font-semibold text-[#1F2E35] font-poppins ml-7">
            Zdemy
          </h1>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center p-2 rounded-md text-[#22343D]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block mr-15">
          <ul className="flex gap-30">
            <li>
              <Link
                href="/"
                className={`text-[18px] md:text-[20px] ${pathname === '/' ? 'font-semibold text-[#FF725E]' : 'font-normal text-[#22343D] hover:text-[#FF725E]'} font-poppins transition-colors`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`text-[18px] md:text-[20px] ${pathname === '/about' ? 'font-semibold text-[#FF725E]' : 'font-normal text-[#22343D] hover:text-[#FF725E]'} font-poppins transition-colors`}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/management"
                className={`text-[18px] md:text-[20px] ${pathname === '/management' ? 'font-semibold text-[#FF725E]' : 'font-normal text-[#22343D] hover:text-[#FF725E]'} font-poppins transition-colors`}
              >
                Management
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className={`text-[18px] md:text-[20px] ${pathname === '/news' ? 'font-semibold text-[#FF725E]' : 'font-normal text-[#22343D] hover:text-[#FF725E]'} font-poppins transition-colors`}
              >
                News & Event
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className={`text-[18px] md:text-[20px] ${pathname === '/gallery' ? 'font-semibold text-[#FF725E]' : 'font-normal text-[#22343D] hover:text-[#FF725E]'} font-poppins transition-colors`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className={`text-[18px] md:text-[20px] ${pathname === '/contact-us' ? 'font-semibold text-[#FF725E]' : 'font-normal text-[#22343D] hover:text-[#FF725E]'} font-poppins transition-colors`}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-[60px] left-0 right-0 bg-white shadow-md md:hidden z-50">
            <ul className="flex flex-col py-4">
              <li className="px-4 py-2">
                <Link
                  href="/"
                  className={`block text-[18px] ${pathname === '/' ? 'font-semibold text-[#FF725E]' : 'font-normal text-[#22343D] hover:text-[#FF725E]'} font-poppins transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="px-4 py-2">
                <Link
                  href="/about"
                  className={`block text-[18px] ${pathname === '/about' ? 'font-semibold text-[#FF725E]' : 'font-normal text-[#22343D] hover:text-[#FF725E]'} font-poppins transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About us
                </Link>
              </li>
              <li className="px-4 py-2">
                <Link
                  href="/management"
                  className={`block text-[18px] ${pathname === '/management' ? 'font-semibold text-[#FF725E]' : 'font-normal text-[#22343D] hover:text-[#FF725E]'} font-poppins transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Management
                </Link>
              </li>
              <li className="px-4 py-2">
                <Link
                  href="/news"
                  className={`block text-[18px] ${pathname === '/news' ? 'font-semibold text-[#FF725E]' : 'font-normal text-[#22343D] hover:text-[#FF725E]'} font-poppins transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  News & Event
                </Link>
              </li>
              <li className="px-4 py-2">
                <Link
                  href="/gallery"
                  className="block text-[18px] font-normal text-[#22343D] font-poppins hover:text-[#FF725E] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
              </li>
              <li className="px-4 py-2">
                <Link
                  href="/contact"
                  className="block text-[18px] font-normal text-[#22343D] font-poppins hover:text-[#FF725E] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
