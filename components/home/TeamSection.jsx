import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "../AnimateOnScroll";

// Social media icon components
const FacebookIcon = () => (
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
);

const TwitterIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 3.799C19.251 4.125 18.455 4.341 17.644 4.445C18.5 3.9 19.141 3.049 19.447 2.025C18.642 2.543 17.761 2.914 16.842 3.117C16.216 2.448 15.418 2 14.539 1.84C13.659 1.68 12.753 1.818 11.948 2.232C11.144 2.646 10.478 3.315 10.047 4.143C9.617 4.97 9.44 5.916 9.539 6.852C7.97 6.773 6.435 6.367 5.029 5.66C3.622 4.954 2.374 3.962 1.363 2.747C1.048 3.291 0.879 3.91 0.88 4.54C0.879 5.132 1.022 5.716 1.299 6.241C1.575 6.767 1.977 7.219 2.47 7.56C1.868 7.54 1.279 7.375 0.75 7.077V7.128C0.75 8.077 1.068 8.998 1.652 9.741C2.236 10.484 3.05 10.999 3.96 11.206C3.404 11.359 2.823 11.383 2.257 11.276C2.526 12.094 3.038 12.809 3.728 13.324C4.418 13.839 5.253 14.131 6.113 14.16C4.653 15.32 2.829 15.947 0.95 15.944C0.632 15.944 0.316 15.925 0 15.886C1.906 17.113 4.127 17.762 6.396 17.76C14.075 17.76 18.262 11.387 18.262 5.86C18.262 5.68 18.257 5.5 18.249 5.32C19.051 4.7 19.737 3.94 20.25 3.08L20 3.799Z"
      fill="#1DA1F2"
    />
  </svg>
);

const InstagramIcon = () => (
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
);

const WhatsappIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.05 2.91C16.128 1.982 15.042 1.246 13.85 0.749C12.658 0.253 11.385 0.003 10.1 0C4.6 0 0.1 4.5 0.1 10C0.1 11.8 0.6 13.5 1.5 15L0 20L5.1 18.5C6.6 19.3 8.3 19.8 10.1 19.8C15.6 19.8 20.1 15.3 20.1 9.8C20.1 7.2 19 4.7 17.05 2.91ZM10.1 18.1C8.6 18.1 7.1 17.7 5.8 16.9L5.5 16.7L2.4 17.6L3.3 14.6L3.1 14.3C2.22 12.9699 1.75555 11.4177 1.75 9.83C1.75 5.4 5.5 1.8 10 1.8C12.2 1.8 14.2 2.6 15.8 4.2C16.6 5 17.2 5.9 17.7 6.9C18.1 7.9 18.3 9 18.3 10.1C18.4 14.5 14.6 18.1 10.1 18.1ZM14.7 12.1C14.4 12 13.3 11.4 13.1 11.3C12.9 11.2 12.7 11.2 12.5 11.5C12.3 11.8 11.8 12.3 11.7 12.5C11.6 12.7 11.4 12.7 11.2 12.6C10.4 12.2 9.79999 11.8 9.19999 11.3C8.69999 10.8 8.19999 10.2 7.79999 9.6C7.69999 9.4 7.79999 9.2 7.89999 9.1C7.99999 9 8.09999 8.8 8.29999 8.7C8.39999 8.6 8.49999 8.4 8.49999 8.3C8.59999 8.2 8.59999 8 8.49999 7.9C8.39999 7.8 7.89999 6.7 7.69999 6.2C7.49999 5.7 7.29999 5.8 7.09999 5.8H6.69999C6.49999 5.8 6.19999 5.9 5.99999 6.1C5.79999 6.3 5.19999 6.9 5.19999 8C5.19999 9.1 5.99999 10.2 6.09999 10.4C6.19999 10.6 7.89999 13.2 10.4 14.2C12.9 15.2 12.9 14.8 13.4 14.8C13.9 14.8 14.8 14.2 15 13.6C15.2 13 15.2 12.5 15.1 12.4C15 12.3 14.9 12.2 14.7 12.1Z"
      fill="#25D366"
    />
  </svg>
);

// TeamCard component
const TeamCard = ({ image, position, name, description, delay = 0 }) => {
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
          <p className="text-[#FF725E] text-sm md:text-base">{position}</p>
          <h3 className="text-[#FF725E] text-xl md:text-[22px] font-semibold">
            {name}
          </h3>
          <p className="text-[#FF725E] text-sm md:text-base">{description}</p>

          <div className="flex gap-3 md:gap-4 mt-2">
            <div className="w-6 h-6 flex items-center justify-center hover:opacity-70 cursor-pointer">
              <FacebookIcon />
            </div>
            <div className="w-6 h-6 flex items-center justify-center hover:opacity-70 cursor-pointer">
              <WhatsappIcon />
            </div>
            <div className="w-6 h-6 flex items-center justify-center hover:opacity-70 cursor-pointer">
              <InstagramIcon />
            </div>
            <div className="w-6 h-6 flex items-center justify-center hover:opacity-70 cursor-pointer">
              <TwitterIcon />
            </div>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

// Main TeamSection component
const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      image: "/images/teacher-1.jpg",
      position: "Maths Teacher",
      name: "Sir. John Doe",
      description:
        "Consectur orem ipsum dor amet, adipiscing elit, sed do eiusmod tem.",
    },
    {
      id: 2,
      image: "/images/teacher-2.jpg",
      position: "Computer Science Teacher",
      name: "Ms. Jane Doe",
      description:
        "Consectur orem ipsum dor amet, adipiscing elit, sed do eiusmod tem.",
    },
    {
      id: 3,
      image: "/images/teacher-3.jpg",
      position: "Urdu Teacher",
      name: "Sir. James Doe",
      description:
        "Consectur orem ipsum dor amet, adipiscing elit, sed do eiusmod tem.",
    },
  ];

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
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.id}
              image={member.image}
              position={member.position}
              name={member.name}
              description={member.description}
              delay={0.4 + index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
