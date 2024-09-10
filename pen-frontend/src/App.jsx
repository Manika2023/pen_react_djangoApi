// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout'; // Import the Layout component
import Hero from './pages/Hero';
import Shop from './pages/Shop'; // Main Shop component
import GelPens from './pages/GelPens'; // Gel Pens component
import EcoPens from './pages/EcoPens'; // Eco-Friendly Pens component
import CorporatePens from './pages/CorporatePens'; // Corporate Pens component
import About from './pages/About'; // About component
import ContactForm from './pages/ContactForm'; // Contact component
import BlogSection from './pages/BlogSection'; // Blog section component
import FAQSection from './pages/FAQSection'; // FAQ section component
import Newsletter from './pages/Newsletter'; // Newsletter component
import Testimonials from './pages/Testimonials'; // Testimonials component
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/gel" element={<GelPens />} />
          <Route path="/shop/eco" element={<EcoPens />} />
          <Route path="/shop/corporate" element={<CorporatePens />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/faq" element={<FAQSection />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
