// src/pages/LuxuryPens.jsx
import React from 'react';
import gelPen2 from '../assets/gel2.png'
import gelPen3 from '../assets/gel3.png'
import gelPen4 from '../assets/gel4.png'
import gelPen5 from '../assets/gel5.png'
import gelPen6 from '../assets/gel6.png'

const GelPens = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Premium Gel Pens</h1>
      <p className="text-lg mb-4">Explore our premium collection of gel pens, designed to deliver a smooth and effortless writing experience. Each pen combines style and performance, featuring high-quality gel ink and a sleek design.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow-lg">
          <img src={gelPen3} alt="Premium Gel Pen 1" className="w-full h-40 object-cover rounded mb-4" />
          <h2 className="text-2xl font-semibold mb-2">The Classic Gel</h2>
          <p className="text-gray-600 mb-4">A refined design with smooth gel ink, ideal for a comfortable and precise writing experience.</p>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">Learn More</button>
        </div>
        <div className="bg-white p-6 rounded shadow-lg">
          <img src={gelPen2} alt="Premium Gel Pen 2" className="w-full h-40 object-cover rounded mb-4" />
          <h2 className="text-2xl font-semibold mb-2">The Modern Gel</h2>
          <p className="text-gray-600 mb-4">Featuring a contemporary design and vibrant colors, this gel pen is perfect for adding a touch of style to your notes.</p>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">Learn More</button>
        </div>
        <div className="bg-white p-6 rounded shadow-lg">
          <img src={gelPen5} alt="Premium Gel Pen 3" className="w-full h-40 object-cover rounded mb-4" />
          <h2 className="text-2xl font-semibold mb-2">The Ultimate Gel</h2>
          <p className="text-gray-600 mb-4">An exceptional gel pen that combines luxury and functionality, crafted for those who appreciate precision and elegance in every detail.</p>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default GelPens;
