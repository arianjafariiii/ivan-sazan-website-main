import { useState, useEffect } from 'react';
import masjed1 from '../assets/masjed1.JPG';
import masjed2 from '../assets/masjed2.JPG';
import masjed3 from '../assets/masjed3.JPG';
import amoozesh1 from '../assets/amoozesh1.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  const images = [masjed1, masjed2, masjed3, amoozesh1];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-60 md:h-96 relative overflow-hidden">
      {/* Slideshow Background */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Static Content - Centered */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center  text-white px-4">
      <div className="hidden md:block">
          <h1 className="text-4xl font-bold mb-4 md:text-5xl">
            فرقی ندارد کوچک یا بزرگ
          </h1>
          <p className="text-lg mb-8 max-w-2xl md:text-xl">
            پروژه های خود را با خیالی راحت به ما بسپارید.
          </p>
      </div>
        <div className="flex gap-4">
          <Link to={"/projects"} className="bg-pyellow text-black px-6 py-2  font-medium hover:bg-yellow-500 transition">
            پروژه ها
          </Link>
          <button className="border-2 border-white px-6 py-2  font-medium hover:bg-white/10 transition">
            ارتباط با ما
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-pyellow' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;