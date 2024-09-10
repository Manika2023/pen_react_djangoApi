import React, { useState } from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, image: '/pen1.jpg', title: 'Premium Pen', price: 10, category: 'Luxury' },
  { id: 2, image: '/pen2.jpg', title: 'Eco Pen', price: 15, category: 'Eco-Friendly' },
  { id: 3, image: '/pen3.jpg', title: 'Corporate Pen', price: 20, category: 'Corporate' },
  { id: 4, image: '/pen4.jpg', title: 'Stylish Pen', price: 12, category: 'Luxury' },
];

const Products = () => {
  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All' ? products : products.filter(product => product.category === filter);

  return (
    <div className="products p-10">
      <div className="flex justify-center space-x-4 mb-8">
        <button className="hover:underline" onClick={() => setFilter('All')}>All</button>
        <button className="hover:underline" onClick={() => setFilter('Luxury')}>Luxury</button>
        <button className="hover:underline" onClick={() => setFilter('Eco-Friendly')}>Eco-Friendly</button>
        <button className="hover:underline" onClick={() => setFilter('Corporate')}>Corporate</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} image={product.image} title={product.title} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default Products;
