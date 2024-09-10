import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        <div>
          <h3 className="text-2xl font-bold">PenBrand</h3>
          <p className="mt-4">Discover the perfect pen for every occasion.</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>About Us</li>
            <li>Shop</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Follow Us</h4>
          <ul className="mt-4 space-y-2">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
      <p className="mt-8 text-center text-sm">&copy; 2024 PenBrand. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
