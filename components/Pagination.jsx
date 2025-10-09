import Link from "next/link";
import React from "react";

const Pagination = ({ currentRoute }) => {
  return (
    <div
      className="relative w-full h-55 bg-cover bg-center bg-no-repeat mx-auto flex items-center justify-center px-4 sm:px-6"
      style={{ backgroundImage: `url('/images/carousel-1.jpg')` }}
    >
      {/* BLACK OVERLAY */}
      <div className="absolute inset-0 bg-black opacity-65"></div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 flex flex-col items-center space-x-2 text-md text-[#f2f2f2]">
        <div>
          <h1 className="text-5xl">{currentRoute.toUpperCase()}</h1>
        </div>
        <div className="mt-5">
          <Link href={"/"} className="hover:underline cursor-pointer">
            Home
          </Link>
          <span className="mx-2">→</span>
          <span className="font-semibold"> {currentRoute}</span>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
