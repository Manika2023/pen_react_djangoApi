// src/pages/EcoPens.jsx
import React from 'react';
import gelPen5 from '../assets/gel5.png'
import ballPen3 from '../assets/ball3.png'
import gelPen6 from '../assets/gel6.png'

const EcoPens = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Eco-Friendly Pens</h1>
      <p className="text-lg mb-4">Explore our range of eco-friendly pens, designed to reduce environmental impact while providing an exceptional writing experience. Made from sustainable materials, these pens are perfect for the environmentally conscious writer.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow-lg">
          <img src={gelPen5} alt="Eco Pen 1" className="w-full h-40 object-cover rounded mb-4" />
          <h2 className="text-2xl font-semibold mb-2">The Green Writer</h2>
          <p className="text-gray-600 mb-4">Made from recycled materials, this pen combines sustainability with style, perfect for everyday use.</p>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">Learn More</button>
        </div>
        <div className="bg-white p-6 rounded shadow-lg">
          <img src={ballPen3} alt="Eco Pen 2" className="w-full h-40 object-cover rounded mb-4" />
          <h2 className="text-2xl font-semibold mb-2">The Nature's Choice</h2>
          <p className="text-gray-600 mb-4">Featuring biodegradable materials, this pen is designed for those who want to make a positive impact on the environment.</p>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">Learn More</button>
        </div>
        <div className="bg-white p-6 rounded shadow-lg">
          <img src={gelPen6} alt="Eco Pen 3" className="w-full h-40 object-cover rounded mb-4" />
          <h2 className="text-2xl font-semibold mb-2">The Eco Elite</h2>
          <p className="text-gray-600 mb-4">A premium eco-friendly pen that blends advanced technology with sustainable practices, ideal for professionals who care about the planet.</p>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default EcoPens;
