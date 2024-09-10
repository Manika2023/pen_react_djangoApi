import React from 'react';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: 'Why Pens Matter in the Digital Age',
      date: 'August 25, 2024',
      description: 'Even in the digital era, pens hold a special place in our lives. Whether it’s jotting down notes, signing important documents, or expressing creativity through drawing, pens are essential tools that connect us to the physical world. Unlike typing, writing with a pen creates a deeper cognitive connection, making it easier to remember and internalize information. Pens offer a tactile experience that digital devices simply cannot replicate, reminding us of the importance of slowing down and being present in the moment.'
    },

    {
      id: 2,
      title: 'Eco-Friendly Pens: A Sustainable Choice',
      date: 'July 15, 2024',
      description: 'Discover the benefits of using eco-friendly pens in a world that’s increasingly aware of environmental issues. Eco-friendly pens are made from sustainable materials such as recycled paper, bamboo, and biodegradable plastics. These pens help reduce waste and minimize the carbon footprint of writing tools. With more companies adopting green practices, choosing eco-friendly pens is not only a responsible decision for the planet but also a step towards promoting sustainability in everyday life. Whether you\'re a student, professional, or artist, you can make a difference by choosing pens that align with your values.'
    }
  ];

  return (
    <div className="blog-section p-10 bg-neutral-200">
      <h2 className="text-3xl font-bold text-center mb-8">From Our Blog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4">{blog.title}</h3>
            <p className="text-gray-600 mb-4">{blog.date}</p>
            <p>{blog.description}</p>
            <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-secondary">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
