// src/pages/Layout.jsx
import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path to access Navbar
import Footer from '../components/Footer'; // Adjust the path to access Footer

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
