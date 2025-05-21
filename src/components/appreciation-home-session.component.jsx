import { Fragment, useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Using feather icons

import cer1 from '../assets/docs/Certificate-1.jpg';
import cer2 from '../assets/docs/Certificate-2.jpg';
import cer3 from '../assets/docs/HSE-MS.jpg';
import cer4 from '../assets/docs/Safety-Qualification-certification.jpg';
import cer5 from '../assets/docs/Special-Work-Safety-Certificate-for-Contractors.jpg';
import cer6 from '../assets/docs/MX-M502N_20250311_203536_002.jpg';

import commen1 from '../assets/docs/Commendation-1.jpg';
import commen2 from '../assets/docs/Commendation-2.jpg';
import commen3 from '../assets/docs/Commendation-3.jpg';

const Appreciation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState([
    
    { id: 2, title: "گواهینامه صلاحیت پیمانکاری", content: "Appreciation content 2", image: cer2 },
    { id: 3, title: "Certificate 3", content: "Appreciation content 3", image: cer3},
    { id: 4, title: "Certificate 4", content: "Appreciation content 4", image: cer4 },
    { id: 5, title: "Certificate 5", content: "Appreciation content 5", image: cer5 },
    { id: 5, title: "Certificate 5", content: "Appreciation content 5", image: cer6 },
    { id: 5, title: "Certificate 5", content: "Appreciation content 5", image: commen1 },
    { id: 5, title: "Certificate 5", content: "Appreciation content 5", image: commen2 },
    { id: 5, title: "Certificate 5", content: "Appreciation content 5", image: commen3 },
  ]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Fragment>
      <div className="relative bg-pgray w-full max-w-6xl mx-auto py-12 px-4 overflow-hidden mb-28">
        
        
        <div className="relative h-80">
          {/* Navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>

          {/* Slider container */}
          <div className="flex items-center justify-center h-full">
            {items.map((item, index) => {
              // Calculate position
              let position = index - currentIndex;
              if (position < -1) position += items.length;
              if (position > 1) position -= items.length;

              // Determine classes based on position
              let classes = "absolute transition-all duration-500 transform";
              let zIndex = "z-0";
              let opacity = "opacity-0";
              let scale = "scale-75";

              if (position === 0) {
                // Center item
                classes += " translate-x-0";
                zIndex = "z-20";
                opacity = "opacity-100";
                scale = "scale-100";
                
              } else if (position === -1 || position === items.length - 1) {
                // Left item
                classes += " -translate-x-64";
                zIndex = "z-10";
                opacity = "opacity-80";
              } else if (position === 1 || position === -items.length + 1) {
                // Right item
                classes += " translate-x-64";
                zIndex = "z-10";
                opacity = "opacity-80";
              }

              return (
                <div 
                  key={item.id}
                  className={`${classes} ${zIndex} ${opacity} ${scale} w-64 bg-white p-6 rounded-lg shadow-lg  `}
                >
                <img src={item.image} alt="certificate" />
                <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
                  
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-14 gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Appreciation;