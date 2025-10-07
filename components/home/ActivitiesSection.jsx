import React from 'react';
import Image from 'next/image';

const ActivityCard = ({ title, description, imageSrc }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
      <div className="w-full md:w-1/2 lg:w-2/5">
        <div className="relative w-full aspect-square rounded-full overflow-hidden">
          <Image 
            src={imageSrc} 
            alt={title} 
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-bold text-[#FF725E] mb-4">{title}</h3>
        <p className="text-[#FF725E] text-base md:text-lg">{description}</p>
      </div>
    </div>
  );
};

const ActivitiesSection = () => {
  const activities = [
    {
      title: "Painting",
      description: "Painting is the expression or application of human creative skill and imagination, typically in a visual form.",
      imageSrc: "/images/painting-activity.jpg"
    },
    {
      title: "Sport",
      description: "Sports are games such as football and basketball and other competitive leisure activities which need physical effort and skill.",
      imageSrc: "/images/sport-activity.jpg"
    },
    {
      title: "Entertainment",
      description: "Entertainment is a form of activity that holds the attention and interest of an audience or gives pleasure and delight.",
      imageSrc: "/images/entertainment-activity.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF725E] mb-4">Our Activities</h2>
          <div className="flex w-48 h-2 relative">
            <div className="w-full h-full bg-[#22343D] rounded-md"></div>
            <div className="absolute left-0 w-16 h-full bg-[#FF725E] rounded-md"></div>
          </div>
        </div>
        
        {/* Activities */}
        <div className="flex flex-col gap-16 md:gap-24">
          {activities.map((activity, index) => (
            <ActivityCard 
              key={index}
              title={activity.title}
              description={activity.description}
              imageSrc={activity.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;