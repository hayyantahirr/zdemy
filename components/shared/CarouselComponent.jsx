"use client";
import React, { useState, useEffect } from "react";

const CarouselComponent = ({ 
  children, 
  itemsToShow = 1,
  autoRotate = true,
  interval = 3000,
  totalItems,
  renderIndicators = true,
  className = "",
  indicatorColor = "currentColor"
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate carousel
  useEffect(() => {
    if (!autoRotate) return;
    
    const autoRotateInterval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, interval);
    
    return () => clearInterval(autoRotateInterval);
  }, [autoRotate, interval, totalItems]);
  
  // Get visible items based on active index
  const getVisibleItems = () => {
    const visibleItems = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (activeIndex + i) % totalItems;
      if (React.Children.toArray(children)[index]) {
        visibleItems.push(React.Children.toArray(children)[index]);
      }
    }
    return visibleItems;
  };
  
  return (
    <div className={`carousel-container ${className}`}>
      <div className="carousel-items-container">
        {itemsToShow === 1 ? (
          // Single item display with transform
          <div 
            className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {children}
          </div>
        ) : (
          // Multiple items display
          <div className="flex flex-wrap justify-center transition-all duration-500">
            {getVisibleItems()}
          </div>
        )}
      </div>
      
      {renderIndicators && (
        <div className={`flex justify-center mt-8 ${itemsToShow === 1 ? 'absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20' : ''}`}>
          <div className="flex gap-4">
            {Array.from({ length: totalItems }).map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 rounded-full border ${
                  activeIndex === index ? "flex items-center justify-center" : ""
                }`}
                style={{ borderColor: 'white' }}
                aria-label={`Go to slide ${index + 1}`}
              >
                {activeIndex === index && (
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselComponent;