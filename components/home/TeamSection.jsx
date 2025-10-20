import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "../AnimateOnScroll";

// TeamCard component
const TeamCard = ({
  image,
  position,
  name,
  experience,
  facebook,
  instagram,
  delay = 0,
}) => {
  return (
    <AnimateOnScroll animation="fadeInUp" duration={1} delay={delay}>
      <div className="bg-[#FfFfFf] rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:z-10 w-[70%] max-w-sm mx-auto">
        <div className="h-[300px]  md:h-[250px] lg:h-[280px] relative">
          <Image
            src={image}
            alt={name}
            fill
            optimized="true"
            className="object-cover object-top rounded-t-lg"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="p-4 md:p-5">
          <p className="text-[#FF725E] text-sm md:text-base">
            {position.join(" & ")}
          </p>
          <h3 className="text-[#FF725E] text-xl md:text-[22px] font-semibold">
            {name}
          </h3>
          <h4 className="text-lg font-medium text-gray-800 mb-3">
            <span className="text-[#FF725E]"> {experience}</span> + Years of
            Proffesional teaching experience
          </h4>

          <div className="flex gap-3 md:gap-4 mt-2">
            <div className="w-6 h-6 flex items-center justify-center hover:opacity-70 cursor-pointer">
              <a href={facebook}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.896 0H1.104C0.494 0 0 0.494 0 1.104V18.896C0 19.506 0.494 20 1.104 20H10.682V12.255H8.076V9.237H10.682V7.01C10.682 4.427 12.26 3.02 14.565 3.02C15.669 3.02 16.617 3.102 16.894 3.139V5.839H15.296C14.042 5.839 13.8 6.436 13.8 7.309V9.237H16.789L16.4 12.255H13.8V20H18.896C19.506 20 20 19.506 20 18.896V1.104C20 0.494 19.506 0 18.896 0Z"
                    fill="#035B81"
                  />
                </svg>
              </a>
            </div>

            <div className="w-6 h-6 flex items-center justify-center hover:opacity-70 cursor-pointer">
              <a href={instagram}>
                {" "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1.8C12.67 1.8 12.987 1.812 14.041 1.86C15.016 1.906 15.545 2.067 15.897 2.204C16.367 2.387 16.697 2.602 17.047 2.952C17.398 3.302 17.614 3.632 17.796 4.102C17.933 4.454 18.094 4.983 18.14 5.958C18.188 7.013 18.2 7.33 18.2 10C18.2 12.67 18.188 12.987 18.14 14.041C18.094 15.016 17.933 15.545 17.796 15.897C17.614 16.367 17.398 16.697 17.047 17.047C16.697 17.398 16.367 17.614 15.897 17.796C15.545 17.933 15.016 18.094 14.041 18.14C12.987 18.188 12.67 18.2 10 18.2C7.33 18.2 7.013 18.188 5.959 18.14C4.984 18.094 4.455 17.933 4.103 17.796C3.633 17.614 3.303 17.398 2.953 17.047C2.602 16.697 2.386 16.367 2.204 15.897C2.067 15.545 1.906 15.016 1.86 14.041C1.812 12.987 1.8 12.67 1.8 10C1.8 7.33 1.812 7.013 1.86 5.959C1.906 4.984 2.067 4.455 2.204 4.103C2.386 3.633 2.602 3.303 2.953 2.953C3.303 2.602 3.633 2.386 4.103 2.204C4.455 2.067 4.984 1.906 5.959 1.86C7.013 1.812 7.33 1.8 10 1.8ZM10 0C7.284 0 6.944 0.012 5.877 0.06C4.813 0.11 4.086 0.278 3.45 0.525C2.792 0.779 2.234 1.123 1.678 1.678C1.123 2.234 0.779 2.792 0.525 3.45C0.278 4.086 0.11 4.813 0.06 5.877C0.012 6.944 0 7.284 0 10C0 12.716 0.012 13.056 0.06 14.123C0.11 15.187 0.278 15.914 0.525 16.55C0.779 17.208 1.123 17.766 1.678 18.322C2.234 18.877 2.792 19.221 3.45 19.475C4.086 19.722 4.813 19.89 5.877 19.94C6.944 19.988 7.284 20 10 20C12.716 20 13.056 19.988 14.123 19.94C15.187 19.89 15.914 19.722 16.55 19.475C17.208 19.221 17.766 18.877 18.322 18.322C18.877 17.766 19.221 17.208 19.475 16.55C19.722 15.914 19.89 15.187 19.94 14.123C19.988 13.056 20 12.716 20 10C20 7.284 19.988 6.944 19.94 5.877C19.89 4.813 19.722 4.086 19.475 3.45C19.221 2.792 18.877 2.234 18.322 1.678C17.766 1.123 17.208 0.779 16.55 0.525C15.914 0.278 15.187 0.11 14.123 0.06C13.056 0.012 12.716 0 10 0Z"
                    fill="#E4405F"
                  />
                  <path
                    d="M10 4.865C7.165 4.865 4.865 7.165 4.865 10C4.865 12.835 7.165 15.135 10 15.135C12.835 15.135 15.135 12.835 15.135 10C15.135 7.165 12.835 4.865 10 4.865ZM10 13.333C8.159 13.333 6.667 11.841 6.667 10C6.667 8.159 8.159 6.667 10 6.667C11.841 6.667 13.333 8.159 13.333 10C13.333 11.841 11.841 13.333 10 13.333Z"
                    fill="#E4405F"
                  />
                  <path
                    d="M16.538 4.662C16.538 5.325 16 5.862 15.338 5.862C14.675 5.862 14.138 5.325 14.138 4.662C14.138 4 14.675 3.462 15.338 3.462C16 3.462 16.538 4 16.538 4.662Z"
                    fill="#E4405F"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

// Main TeamSection component
const TeamSection = ({ teacher }) => {
  return (
    <section className="bg-[#F2F2F2] py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fadeInUp" duration={1} delay={0.2}>
          <div className="flex flex-col items-center justify-center mb-5">
            <h2 className="text-black text-2xl lg:text-3xl font-medium text-center">
              Meet Our <span className="text-[#FF725E]">Management</span>
            </h2>

            <div className=" w-48 h-5 ">
              <div className="w-48 h-1 bg-black mb-1 opacity-80 rounded "></div>

              <div className="ml-15 w-48 h-1 bg-[#FF725E] opacity-80 rounded"></div>
            </div>
            <div className="mt-4">
              <Link
                href="/management"
                className="text-[#FF725E] font-medium hover:underline"
              >
                View Management Team →
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-10">
          {teacher.slice(0, 3).map((member, index) => (
            <TeamCard
              key={member._id}
              image={member.image}
              position={member.subjects}
              name={member.name}
              delay={0.4 + index * 0.2}
              facebook={member.facebook}
              instagram={member.instagram}
              experience={member.experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
