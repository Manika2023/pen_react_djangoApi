import React, { useState, useEffect } from 'react';
import aboutImage from '../assets/about-image.jpeg'; // Replace with actual image path
import ballPen1 from '../assets/ball1.png'
import carporatePen1 from '../assets/corporate1.png'
import imgPen1 from '../assets/gel1.png'
import FAQSection from './FAQSection'
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, image: ballPen1, title: 'Discover Your Perfect Pen', description: 'Elegance in every stroke' },
    { id: 2, image: carporatePen1, title: 'Innovative Designs', description: 'Unleash creativity with every pen' },
    { id: 3, image: imgPen1, title: 'Write with Excellence', description: 'Find the pen that fits your style' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="w-full h-full flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map(slide => (
            <div
              key={slide.id}
              className="flex-shrink-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="flex items-center justify-center h-full text-center text-white p-8 bg-gray-900 bg-opacity-50">
                <div>
                  <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-lg mb-8">{slide.description}</p>
                  <div>
                    <a href="/shop" className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 rounded">Shop Now</a>
                    <a href="/shop" className="bg-accent text-white border border-yellow-500 px-6 py-3 rounded ml-4 hover:bg-yellow-600">Explore More &rarr;</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
