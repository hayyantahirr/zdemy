import React from "react";
import HeroSection from "@/components/home/Carousel";
import ActivitiesSection from "@/components/home/ActivitiesSection";
import TeamSection from "@/components/home/TeamSection";
import OurGallerySec from "@/components/home/OurGallerySec";
import axios from "axios";

const Page = async () => {
  let teachersForOlevel = [];

  try {
    const res = await axios.get("http://localhost:4000/teachersForOlevels/");
    // Ensure we have an array, handle different response structures
    teachersForOlevel = Array.isArray(res.data)
      ? res.data
      : Array.isArray(res.data.teachers)
      ? res.data.teachers
      : Array.isArray(res.data.data)
      ? res.data.data
      : [];
  } catch (error) {
    console.error("Error fetching teachers for O-level:", error);
    teachersForOlevel = []; // Fallback to empty array
  }

  console.log(teachersForOlevel); // (prints on the server, not browser)

  return (
    <main className="min-h-screen">
      <HeroSection />
      <ActivitiesSection />

      <TeamSection teacher={teachersForOlevel} />

      <OurGallerySec />
    </main>
  );
};

export default Page;
