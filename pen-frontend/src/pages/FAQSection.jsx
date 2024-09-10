import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: 'What is your return policy?', answer: 'We offer a 7-day return policy on all pens.' },
    { question: 'Do you offer Sate shipping?', answer: 'Yes, we ship to most states.' },
  ];

  return (
    <div className="faq-section bg-neutral-200 p-10">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-left bg-neutral-100 text-gray-800 p-4 rounded-lg focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="bg-white text-gray-800 p-4 rounded-b-lg border-t">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
