import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('http://127.0.0.1:8000/api/subscribe/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();

    if (response.ok) {
      setMessage(result.message);
      setEmail('');
    } else {
      setMessage(result.message || 'Something went wrong.');
    }
  };

  return (
    <div className="newsletter bg-neutral-200 text-black p-10 text-center">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">Stay Updated!</h2>
      <p className="mb-6">
        Subscribe to our newsletter to receive the latest updates on new
        products and offers.
      </p>
      <form className="flex justify-center space-x-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded text-black"
          required
        />
        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Subscribe
        </button>
      </form>
      {message && <p className="mt-4 text-lg">{message}</p>}
    </div>
  );
};

export default Newsletter;
