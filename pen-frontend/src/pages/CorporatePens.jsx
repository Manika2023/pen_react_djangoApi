// src/pages/CorporatePens.jsx
import React from 'react';
import corporatePen1 from '../assets/corporate1.png'
import corporatePen2 from '../assets/corporate2.png'
import corporatePen3 from '../assets/corporate3.png'


const CorporatePens = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Corporate Pens</h1>
      <p className="text-lg mb-4">Elevate your corporate gifting with our premium selection of pens. Designed to make a lasting impression, these pens are perfect for branding, client gifts, and executive use.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow-lg">
          <img src={corporatePen3} alt="Corporate Pen 1" className="w-full h-40 object-cover rounded mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Executive Class</h2>
          <p className="text-gray-600 mb-4">A sophisticated pen that embodies professionalism, making it a perfect gift for executives and clients.</p>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">Learn More</button>
        </div>
        <div className="bg-white p-6 rounded shadow-lg">
          <img src={corporatePen2} alt="Corporate Pen 2" className="w-full h-40 object-cover rounded mb-4" />
          <h2 className="text-2xl font-semibold mb-2">The Signature Series</h2>
          <p className="text-gray-600 mb-4">Featuring custom engraving options, this pen is designed to enhance your brand's identity with a touch of elegance.</p>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">Learn More</button>
        </div>
        <div className="bg-white p-6 rounded shadow-lg">
          <img src={corporatePen1} alt="Corporate Pen 3" className="w-full h-40 object-cover rounded mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Corporate Prestige</h2>
          <p className="text-gray-600 mb-4">A high-end pen designed for important occasions and high-profile clients, offering unparalleled luxury and style.</p>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default CorporatePens;
