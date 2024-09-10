import React from 'react';
import { useState } from 'react';

const testimonials = [
  { id: 1, name: 'John Doe', review: 'Great quality pens!' },
  { id: 2, name: 'Jane Smith', review: 'Beautiful and elegant design!' },
  { id: 3, name: 'Michael Lee', review: 'Amazing writing experience.' },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonials bg-neutral-100 p-10 text-center">
      <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
      <div className="relative">
        <p className="italic">"{testimonials[currentIndex].review}"</p>
        <h3 className="mt-4 font-semibold">{testimonials[currentIndex].name}</h3>
        <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-slate-800 px-4 py-2">&larr; Prev</button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-slate-900 px-4 py-2">Next &rarr;</button>
      </div>
    </div>
  );
};

export default Testimonials;
