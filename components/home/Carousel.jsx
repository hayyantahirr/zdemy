
import Image from "next/image";
import Link from "next/link";
import CarouselComponent from "../shared/CarouselComponent";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: "/images/carousel-1.jpg",
      alt: "Slide 1"
    },
    {
      id: 2,
      image: "/images/carousel-2.jpg",
      alt: "Slide 2"
    },
    {
      id: 3,
      image: "/images/carousel-3.jpg",
      alt: "Slide 3"
    }
  ];

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <CarouselComponent
        itemsToShow={1}
        autoRotate={true}
        interval={3000}
        totalItems={slides.length}
        renderIndicators={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-full flex-shrink-0">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={slide.id === 1}
            />
          </div>
        ))}
      </CarouselComponent>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FF725E] opacity-65"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              The One Stop Solution
              <br />
              Who said Olevels is tough?
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Zdemy is karachi's most trusted academy for Olevels and IGCSE.
              With more than 1000 students, we have been helping kids to achieve
              their goals for more than 10 years.
            </p>
            <div className="flex items-center">
              <Link
                className="bg-white text-[#22343D] px-6 py-3 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors cursor-pointer"
                href={"/about"}
              >
                More info
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z"
                    fill="#22343D"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
