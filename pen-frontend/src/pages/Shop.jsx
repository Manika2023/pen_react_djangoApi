// src/pages/Shop.jsx
import React from 'react';
import imgPen1 from '../assets/gel1.png'
import gelPen2 from '../assets/gel2.png'
import gelPen3 from '../assets/gel3.png'
import gelPen4 from '../assets/gel4.png'
import corporatePen1 from '../assets/corporate1.png'
import corporatePen2 from '../assets/corporate2.png'
import ballPen1 from '../assets/ball1.png'


const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Aroma  Gel Pen - Smooth Write',
      price: '₹80',
      description: 'Experience the ultimate smooth writing with our Vanilo Gel Pen. Ideal for precise and effortless writing.',
      image: imgPen1,
    },
    {
      id: 2,
      name: 'Aroma  Gel Pen - Quick Dry',
      price: '₹85',
      description: 'A quick-dry gel pen that prevents smudging, perfect for fast-paced writing and note-taking.',
      image: gelPen3,
    },
    {
      id: 3,
      name: 'Aroma Eco Pen - Green Writer',
      price: '₹60',
      description: 'Made from recycled materials, this eco-friendly pen combines sustainability with style, perfect for everyday use.',
      image: ballPen1,
    },
    {
      id: 4,
      name: 'Aroma Eco Pen - Nature\'s Choice',
      price: '₹65',
      description: 'Featuring biodegradable materials, this pen is designed for those who want to make a positive impact on the environment.',
      image: ballPen1,
    },
    {
      id: 5,
      name: 'Aroma Corporate Pen - Executive Class',
      price: '₹120',
      description: 'A sophisticated pen that embodies professionalism, making it a perfect gift for executives and clients.',
      image:corporatePen1,
    },
    {
      id: 6,
      name: 'Aroma Corporate Pen - Signature Series',
      price: '₹135',
      description: 'Featuring custom engraving options, this pen is designed to enhance your brand\'s identity with a touch of elegance.',
      image:corporatePen2,
    },
  ];

  return (
    <div className="p-10 bg-neutral-100">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 font-sans">Our Pens</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-blue-600 mb-4">{product.price}</p>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
