import React from "react";
import Image from "next/image";
import AnimateOnScroll from "../AnimateOnScroll";

const ActivityCard = ({ title, description, imageSrc, delay = 0 }) => {
  return (
    <AnimateOnScroll animation="fadeInUp" duration={1} delay={delay}>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <div className="w-full md:w-1/2 lg:w-2/5 max-w-[240px] md:max-w-none">
          <div className="relative w-full aspect-square rounded-full overflow-hidden">
            <Image src={imageSrc} alt={title} fill className="object-cover" />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left">
          <h3 className="text-xl md:text-3xl font-bold text-[#FF725E] mb-4">
            {title}
          </h3>
          <p className="text-[#FF725E] text-sm md:text-lg">{description}</p>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

const ActivitiesSection = () => {
  const activities = [
    {
      title: "GCSE (aka OLevels)",
      description:
        "We have varity of qualified teachers certified by cambridge for your child to help them in their GCSE examinations.",
      imageSrc: "/images/gcse.jpg",
    },
    {
      title: "IGCSE",
      description:
        "We have varity of qualified teachers certified by cambridge for your child to help them in their IGCSE examinations.",
      imageSrc: "/images/igcse.png",
    },
    {
      title: "A-Levels",
      description:
        "We have varity of qualified teachers certified by cambridge for your child to help them in their A-Levels examinations.",
      imageSrc: "/images/alevels.jpeg",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <AnimateOnScroll animation="fadeInUp" duration={1} delay={0.2}>
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FF725E] mb-4">
              <span className="text-black">What do we </span>Offer ?
            </h2>
            <div className=" w-48 h-5 ">
              <div className="w-48 h-1 bg-black mb-1 opacity-80 rounded "></div>
              <div className="ml-15 w-48 h-1 bg-[#FF725E] opacity-80 rounded"></div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Activities */}
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24 ">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              title={activity.title}
              description={activity.description}
              imageSrc={activity.imageSrc}
              delay={0.4 + index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
