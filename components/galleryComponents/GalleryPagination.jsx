"use client";
import React from 'react';
import Link from 'next/link';

const GalleryPagination = ({ currentPage, totalPages, showPrevButton }) => {
  return (
    <div className="flex justify-between container mx-auto px-4 mt-12">
      {/* Previous Button - Only shown after clicking next */}
      {showPrevButton && (
        <Link href={`/gallery?page=${currentPage - 1}`}>
          <button 
            className="flex items-center gap-5 bg-[#FF725E] text-white py-5 px-8 rounded-[5px] hover:bg-[#e65a46]"
          >
            <svg width="16" height="5" viewBox="0 0 16 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 2.5H15M15 2.5L13 0.5M15 2.5L13 4.5" stroke="white" strokeWidth="1" />
            </svg>
            <span className="text-[20px]">Previous page</span>
          </button>
        </Link>
      )}
      
      {/* Spacer div when previous button is not shown */}
      {!showPrevButton && <div></div>}
      
      {/* Next Button - Always shown if not on last page */}
      {currentPage < totalPages && (
        <Link href={`/gallery?page=${currentPage + 1}`}>
          <button 
            className="flex items-center gap-5 bg-[#FF725E] text-white py-5 px-8 rounded-[5px] hover:bg-[#e65a46]"
          >
            <span className="text-[20px]">Next page</span>
            <svg width="16" height="5" viewBox="0 0 16 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 2.5H15M15 2.5L13 0.5M15 2.5L13 4.5" stroke="white" strokeWidth="1" />
            </svg>
          </button>
        </Link>
      )}
    </div>
  );
};

export default GalleryPagination;