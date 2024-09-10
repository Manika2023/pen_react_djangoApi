import React from 'react';
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-primary text-white p-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        <div>
          <h3 className="text-2xl font-bold">Aroma</h3>
          <p className="mt-4">Discover the perfect pen for every occasion.</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
            <Link to={'/about'} className='cursor-pointer'>About Us</Link>
            </li>
            <li>
            <Link to={'/shop'}  className='cursor-pointer'>Shop</Link>
            </li>
            <li>
            <Link to={'/faq'} className='cursor-pointer'>FAQ</Link>
            </li>
            <li>
            <Link to={'/contact'} className='cursor-pointer'>Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Follow Us</h4>
          <ul className="mt-4 space-y-2">
            <li className='cursor-pointer'>Facebook</li>
            <li className='cursor-pointer'>Instagram</li>
            <li className='cursor-pointer'>Twitter</li>
            <li className='cursor-pointer'>LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className="">
      <p className="mt-8 text-center text-sm">&copy; 2024 Aroma. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
