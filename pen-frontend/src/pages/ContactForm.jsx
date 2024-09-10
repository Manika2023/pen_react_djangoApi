import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/contacts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        console.error('Error submitting the form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="contact-section p-10 bg-neutral-100">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full text-white bg-blue-500 hover:bg-blue-600 p-3 rounded"
            >
              Send Message
            </button>
          </form>

          {submitted && (
            <p className="text-green-500 mt-4">Thank you for contacting us! We will get back to you soon.</p>
          )}
        </div>

        {/* Address Section */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-2xl font-semibold mb-4">Our Address</h3>
            <p className="mb-2">
              <strong>Location:</strong> RZ-81A, Gali No-2, Main Sagarpur, New Delhi
            </p>
            <p className="mb-2">
              <strong>Mobile:</strong> +9990147462
            </p>
            <p className="mb-2">
              <strong>WhatsApp:</strong> +9990147462
            </p>
            <p className="mb-2">
              <strong>Email:</strong> manikak220@gmail.com
            </p>
            <p className="mb-2">
              <strong>Working Hours:</strong> Mon - Fri: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
