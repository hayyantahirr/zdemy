import Pagination from "@/components/managementComponents/Pagination";
import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      {/* Breadcrumb Navigation */}
      <Pagination currentRoute="About Us" />

      {/* Introduction Text Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center max-w-4xl mx-auto">
          One of the most important pages on our website is the About Us page.
          This is where we connect with you, share our story, and build the
          foundation for a meaningful educational relationship. At Zdemy, we
          believe in providing exceptional learning experiences that prepare
          students for academic success and beyond.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/carousel-1.jpg"
              alt="Our Mission"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-[#FF725E] mb-2">
                <span className="text-4xl font-bold text-black">Our</span>{" "}
                Mission
              </h2>
              <div className=" w-48 h-5 ">
                <div className="w-48 h-1 bg-black mb-1 opacity-80 rounded "></div>
                <div className="ml-15 w-48 h-1 bg-[#FF725E] opacity-80 rounded"></div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to provide high-quality education that empowers
              students to excel academically and develop into well-rounded
              individuals. We are committed to creating a supportive learning
              environment where students can discover their potential, cultivate
              critical thinking skills, and build a strong foundation for
              lifelong learning. Through innovative teaching methods and
              personalized attention, we aim to inspire curiosity, foster
              creativity, and instill a love for learning in every student. Our
              dedicated educators work tirelessly to ensure that each student
              receives the guidance and support they need to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="order-2 md:order-1">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-[#FF725E] mb-2">
                <span className="text-4xl font-bold text-black">Our</span>{" "}
                Vision
              </h2>
              <div className=" w-48 h-5 ">
                <div className="w-48 h-1 bg-black mb-1 opacity-80 rounded "></div>
                <div className="ml-15 w-48 h-1 bg-[#FF725E] opacity-80 rounded"></div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We envision being a leading educational institution that prepares
              students not just for academic excellence, but for success in all
              aspects of life. Our vision is to create global citizens who are
              equipped with the knowledge, skills, and values necessary to make
              positive contributions to society. We strive to be at the
              forefront of educational innovation, continuously adapting our
              approaches to meet the evolving needs of students in a rapidly
              changing world. By fostering a culture of excellence, respect, and
              inclusivity, we aim to help each student reach their full
              potential and become lifelong learners.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
            <Image
              src="/images/carousel-3.jpg"
              alt="Our Vision"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Life at Zdemy Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#FF725E] mb-2">
              <span className="text-4xl font-bold text-black">Life</span>{" "}
              at Zdemy
            </h2>
            <div className="mx-auto w-48 h-5 ">
                <div className="w-48 h-1 bg-black mb-1 opacity-80 rounded "></div>
                <div className="ml-15 w-48 h-1 bg-[#FF725E] opacity-80 rounded"></div>
              </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/LifeAtZdemy-1.jpg"
                  alt="Students Collaborating"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Collaborative Learning
              </h3>
              <p className="text-gray-600">
                Students engage in group projects and peer-to-peer learning,
                fostering teamwork and communication skills.
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/LifeAtZdemy-2.jpg"
                  alt="Creative Workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Creative Workshops
              </h3>
              <p className="text-gray-600">
                Regular workshops in arts, music, and technology encourage
                creativity and innovation beyond the classroom.
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/LifeAtZdemy-3.jpg"
                  alt="Outdoor Education"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Outdoor Education
              </h3>
              <p className="text-gray-600">
                Field trips and outdoor activities connect classroom learning
                with real-world experiences and nature.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
