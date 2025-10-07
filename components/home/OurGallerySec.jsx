import React from "react";
import Image from "next/image";
import Link from "next/link";

const OurGallerySec = () => {
  const galleryImages = [
    { id: 1, src: "/images/carousel-1.jpg", alt: "Gallery Image 1" },
    { id: 2, src: "/images/carousel-2.jpg", alt: "Gallery Image 2" },
    { id: 3, src: "/images/carousel-3.jpg", alt: "Gallery Image 3" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-black text-2xl md:text-3xl font-medium text-center">
            Our <span className="text-[#FF725E]">Gallery</span>
          </h2>
         <div className=" w-48 h-5 ">
            <div className="w-48 h-1 bg-black mb-1 opacity-80 rounded "></div>

            <div className="ml-15 w-48 h-1 bg-[#FF725E] opacity-80 rounded"></div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 mx-20">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative h-64 md:h-72  overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-lg font-semibold mb-2">
                    School Activities
                  </p>
                  <p className="text-sm mb-4">
                    View our school activities and events
                  </p>
                  <Link
                    href="/gallery"
                    className="inline-block px-4 py-2 bg-[#FF725E] text-white rounded-md hover:bg-[#e56553] transition-colors"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center px-6 py-3 bg-[#FF725E] text-white rounded-md hover:bg-[#e56553] transition-colors"
          >
            View More
            <svg
              className="ml-2"
              width="16"
              height="8"
              viewBox="0 0 16 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurGallerySec;
