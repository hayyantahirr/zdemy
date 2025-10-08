import React from "react";
import Pagination from "@/components/managementComponents/Pagination";
import Image from "next/image";
import GalleryPagination from "@/components/galleryComponents/GalleryPagination";

// Array to store image routes with relevant names for alt tags
const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/pic-1.jpg",
    alt: "Students working on science project",
  },
  {
    id: 2,
    src: "/images/gallery/pic-2.jpg",
    alt: "School sports day activities",
  },
  {
    id: 3,
    src: "/images/gallery/pic-3.jpg",
    alt: "Art exhibition by students",
  },
  {
    id: 4,
    src: "/images/gallery/pic-4.jpg",
    alt: "Music performance in school hall",
  },
  {
    id: 5,
    src: "/images/gallery/pic-5.jpg",
    alt: "Classroom learning environment",
  },
  {
    id: 6,
    src: "/images/gallery/pic-6.jpg",
    alt: "School library and reading session",
  },
  {
    id: 7,
    src: "/images/gallery/pic-7.jpg",
    alt: "Technology and computer lab",
  },
  {
    id: 8,
    src: "/images/gallery/pic-8.jpg",
    alt: "School outdoor playground",
  },
  {
    id: 9,
    src: "/images/gallery/pic-9.jpg",
    alt: "School annual day celebration",
  },
  {
    id: 10,
    src: "/images/gallery/pic-10.jpg",
    alt: "Parent-teacher meeting",
  },
  {
    id: 11,
    src: "/images/gallery/pic-11.jpg",
    alt: "School cultural event",
  },
  {
    id: 12,
    src: "/images/gallery/pic-12.jpg",
    alt: "School field trip",
  },
  {
    id: 13,
    src: "/images/gallery/pic-13.jpg",
    alt: "School sports day activities",
  },
];

// Server component for the gallery page
const GalleryPage = async ({ searchParams }) => {
  // ✅ Await searchParams itself once at the top
  const params = await searchParams;
  const page = params?.page ? parseInt(params.page) : 1;

  const imagesPerPage = 6;
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  const indexOfLastImage = page * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = galleryImages.slice(
    indexOfFirstImage,
    indexOfLastImage
  );

  const showPrevButton = page > 1;

  return (
    <>
      <Pagination currentRoute="Gallery" />

      {/* Gallery Container */}
      <div className="relative w-full bg-white py-16">
        {/* Title Section */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-[30px] font-bold text-[#FF725E] text-center">
            {" "}
            <span className="text-4xl text-black">Our</span> Gallery
          </h2>
          <div className=" w-48 h-5 ">
            <div className="w-48 h-1 bg-black mb-1 opacity-80 rounded "></div>
            <div className="ml-15 w-48 h-1 bg-[#FF725E] opacity-80 rounded"></div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="w-[80%] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {currentImages.map((image) => (
              <div
                className="relative h-[250px] w-full overflow-hidden rounded-[5px]"
                key={image.id}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Component */}
        <GalleryPagination
          currentPage={page}
          totalPages={totalPages}
          showPrevButton={showPrevButton}
        />
      </div>
    </>
  );
};

export default GalleryPage;
