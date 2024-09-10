import React from 'react';
// import aboutImage from '../assets/about-image.jpeg'; // Replace with actual image path
import aboutImage from '../assets/gel1.png'
import Testimonials from './Testimonials';

const About = () => {
  return (
    <>
      <div className="p-6 sm:p-8 md:p-10 lg:p-12 bg-neutral-200">
        <h2 className="text-4xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-yellow-700 font-sans">About Us</h2>
        <div className="flex flex-col items-center">
          <img 
            src={aboutImage} 
            alt="Aroma Pen" 
            className="w-full h-auto rounded-lg mb-6 lg:hidden"
          />
          <div className="lg:flex lg:flex-row lg:items-start lg:space-x-6">
            <div className="hidden lg:block lg:w-1/2">
              <img 
                src={aboutImage} 
                alt="Aroma Pen" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 px-4 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-blue-700 font-sans">
                Crafting Inspiration with Every Stroke
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                In the busy streets of Delhi, where dreams are big and ambitions run high, we discovered a simple truth: the right tools can make all the difference in a student’s journey. Every word written, every idea captured, starts with a single stroke of a pen. But not just any pen—one that feels like an extension of your thoughts, smooth and effortless.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                At <span className="font-semibold text-blue-600">Aroma</span>, we didn’t just want to create another pen; we wanted to craft something that students can connect with on a deeper level. Our journey began with understanding what students need in their everyday lives: focus, comfort, and a little bit of motivation. That’s why we infused our pens with a gentle vanilla scent—known for its calming and stress-relieving properties. This subtle aroma is designed to help students stay relaxed and focused, even during the most stressful study sessions or exams.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                Writing is more than just putting words on paper; it’s about expressing ideas, planning for the future, and capturing moments of inspiration. <span className="font-semibold text-blue-600">Aroma</span> pens are designed to be more than just a tool—they’re a companion in your journey. Whether you’re taking notes in class, solving complex equations, or simply doodling in your notebook, Aroma is with you every step of the way, and the vanilla scent adds a touch of comfort to every moment.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                We know that every student’s journey is unique, full of challenges, breakthroughs, and growth. That’s why we made sure Aroma pens aren’t just comfortable to hold but also stylish and reliable, reflecting the creativity and energy of today’s youth. We wanted a design that stands out without distracting—something sleek, modern, and effortlessly cool.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                As you write with Aroma, we hope you feel more than just the ink on the page. We want you to feel confident, focused, and inspired to keep pushing forward. And with each stroke, the calming vanilla scent is there to remind you to breathe, relax, and keep moving towards your goals. Because in every student, there’s a story waiting to be written, and at Aroma, we’re here to help you write yours.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold text-blue-600">Aroma</span> isn’t just a pen; it’s a reminder that the little things can make a big difference. It’s for the students who never give up, who dream big, and who know that every goal starts with the first line. Whether you’re in Delhi or anywhere across India, Aroma is here to support you in every exam, every idea, and every challenge you face.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Your dreams are powerful. Let us be the pen that helps you bring them to life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <Testimonials />
      </div>
    </>
  );
};

export default About;
