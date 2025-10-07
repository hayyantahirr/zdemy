import React from 'react';
import Image from 'next/image';

const BlogCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-[#22343D]">September 10, 2021</span>
          <span className="text-sm text-[#22343D]">Headmaster</span>
        </div>
        <p className="text-[#22343D] mb-4">
          Lorem ipsum dolor sit met, consectetur cing elit, sed do abbey...
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden">
              <Image 
                src="/images/blog-author.jpg" 
                alt="Author" 
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 11L7.5 7.5" stroke="#22343D" strokeLinecap="round"/>
                <path d="M8.5 7.5L8.5 11" stroke="#22343D" strokeLinecap="round"/>
                <path d="M7.5 5.5L7.5 4.5" stroke="#22343D" strokeLinecap="round"/>
                <path d="M8.5 4.5L8.5 5.5" stroke="#22343D" strokeLinecap="round"/>
                <path d="M10 14.5H6C3.17157 14.5 1.75736 14.5 0.87868 13.6213C0 12.7426 0 11.3284 0 8.5V7.5C0 4.67157 0 3.25736 0.87868 2.37868C1.75736 1.5 3.17157 1.5 6 1.5H10C12.8284 1.5 14.2426 1.5 15.1213 2.37868C16 3.25736 16 4.67157 16 7.5V8.5C16 11.3284 16 12.7426 15.1213 13.6213C14.2426 14.5 12.8284 14.5 10 14.5Z" stroke="#22343D"/>
              </svg>
              <span className="text-sm text-[#22343D]">10</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 3H8.01" stroke="#22343D" strokeLinecap="round"/>
              <path d="M8 13C11.3137 13 14 10.3137 14 7C14 3.68629 11.3137 1 8 1C4.68629 1 2 3.68629 2 7C2 10.3137 4.68629 13 8 13Z" stroke="#22343D"/>
              <path d="M8 13V15" stroke="#22343D"/>
              <path d="M6 15H10" stroke="#22343D"/>
            </svg>
            <span className="text-sm text-[#22343D]">29</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8F8F8]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF725E] mb-4">Latest Blog</h2>
          <div className="flex w-48 h-2 relative">
            <div className="w-full h-full bg-[#22343D] rounded-md"></div>
            <div className="absolute left-0 w-16 h-full bg-[#FF725E] rounded-md"></div>
          </div>
        </div>
        
        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        
        {/* More Articles Button */}
        <div className="flex justify-center">
          <button className="bg-[#FF725E] text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-[#e66553] transition-colors">
            More Articles
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;