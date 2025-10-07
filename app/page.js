import React from "react";
import HeroSection from "@/components/home/Carousel";
import ActivitiesSection from "@/components/home/ActivitiesSection";
import TeamSection from "@/components/home/TeamSection";
import OurGallerySec from "@/components/home/OurGallerySec";


const Page = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ActivitiesSection />
      <TeamSection />
      <OurGallerySec />
    </main>
  );
};

export default Page;
