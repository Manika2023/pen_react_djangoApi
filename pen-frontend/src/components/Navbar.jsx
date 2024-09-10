import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Hook to get the current path

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path ? 'text-red-500' : '';

  return (
    <div className="bg-slate-600">
      <nav className="bg-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link to="/" className={isActive('/')}>Aroma</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`hover:text-red-500 font-bold ${isActive('/')}`}>Home</Link>
            <div className="relative">
              <Link to="/shop"
                onClick={() => setIsOpen(!isOpen)}
                className={`hover:text-red-500 font-bold ${isActive('/shop')}`}
              >
                Shop
              </Link>
              {isOpen && (
                <ul className="absolute top-10 left-0 bg-white text-black shadow-md rounded p-4">
                  <Link to="/shop/gel" className="block hover:bg-gray-100 p-2">Gel Pens</Link>
                  <Link to="/shop/eco" className="block hover:bg-gray-100 p-2">Eco-Friendly(ball) Pens</Link>
                  <Link to="/shop/corporate" className="block hover:bg-gray-100 p-2">Corporate Pens</Link>
                </ul>
              )}
            </div>
            <Link to="/about" className={`hover:text-red-500 font-bold ${isActive('/about')}`}>About Us</Link>
            <Link to="/contact" className={`hover:text-red-500 font-bold ${isActive('/contact')}`}>Contact</Link>
            <Link to="/contact" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              Buy Now
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-primary">
            <Link to="/" className={`block py-2 px-4 hover:bg-blue-700 ${isActive('/')}`}>Home</Link>
            <div className="relative">
              <Link to="/shop"
                onClick={() => setIsOpen(!isOpen)}
                className={`block py-2 px-4 hover:bg-blue-700 font-bold ${isActive('/shop')}`}
              >
                Shop
              </Link>
              {isOpen && (
                <ul className="bg-white text-black shadow-md rounded p-4">
                  <Link to="/shop/gel" className="block hover:bg-gray-100 p-2">Gel Pens</Link>
                  <Link to="/shop/eco" className="block hover:bg-gray-100 p-2">Eco-Friendly(Ball) Pens</Link>
                  <Link to="/shop/corporate" className="block hover:bg-gray-100 p-2">Corporate Pens</Link>
                </ul>
              )}
            </div>
            <Link to="/about" className={`block py-2 px-4 hover:bg-blue-700 ${isActive('/about')}`}>About Us</Link>
            <Link to="/contact" className={`block py-2 px-4 hover:bg-blue-700 ${isActive('/contact')}`}>Contact</Link>
            <button className="block w-full text-left bg-yellow-500 text-white py-2 px-4 mt-2 hover:bg-yellow-600">
              Buy Now
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
