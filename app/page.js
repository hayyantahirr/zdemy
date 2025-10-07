import React from "react";
import HeroSection from "@/components/home/Carousel";
import ActivitiesSection from "@/components/home/ActivitiesSection";
import BlogSection from "@/components/home/BlogSection";

const Page = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ActivitiesSection />
      <BlogSection />
    </main>
  );
};

export default Page;
