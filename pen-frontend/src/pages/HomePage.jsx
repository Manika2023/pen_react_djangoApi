import React from 'react';
import Hero from './Hero';
import FAQSection from './FAQSection';
import Newsletter from './Newsletter';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* FAQ Section */}
      <div className="bg-gray-900 text-white py-16">
        <FAQSection />
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default HomePage;
