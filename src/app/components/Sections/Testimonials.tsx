'use client';

import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Theresa Jordan',
      role: 'Traveler',
      text: 'I think this is the best camping service I have ever tried and I recommend it to you.',
      rating: 5,
      image: '/images/avatar-1.png',
    },
    {
      name: 'James Wilson',
      role: 'Climber',
      text: 'Campty helps me a lot in finding interesting camping destinations.',
      rating: 5,
      image: '/images/avatar-2.webp',
    },
    {
      name: 'Jhon Tosan',
      role: 'Adventurer',
      text: 'Fun, from the city of waters not too far. Beautiful views, pretty and cool.',
      rating: 5,
      image: '/images/avatar-3.png',
    },
    {
      name: 'Emma Stone',
      role: 'Hiker',
      text: 'A great experience for families, with clean and safe camping spots.',
      rating: 4,
      image: '/images/avatar-1.png',
    },
    {
      name: 'Michael Brown',
      role: 'Explorer',
      text: 'This platform helped me discover hidden gems for my outdoor adventures.',
      rating: 5,
      image: '/images/avatar-2.webp',
    },
    {
      name: 'Sophia White',
      role: 'Nature Lover',
      text: 'Highly recommend for a hassle-free camping experience.',
      rating: 4,
      image: '/images/avatar-3.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(3); // Default for large screens

  useEffect(() => {
    const updateTestimonialsPerPage = () => {
      if (window.innerWidth < 768) {
        setTestimonialsPerPage(1); // One testimonial for small screens
      } else {
        setTestimonialsPerPage(3); // Three testimonials for larger screens
      }
    };

    updateTestimonialsPerPage(); // Run once on mount
    window.addEventListener('resize', updateTestimonialsPerPage);

    return () => {
      window.removeEventListener('resize', updateTestimonialsPerPage);
    };
  }, []);

  const currentTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + testimonialsPerPage
  );

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + testimonialsPerPage) % testimonials.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? testimonials.length - testimonialsPerPage
        : prevIndex - testimonialsPerPage
    );
  };

  // Animation trigger on scroll into view
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="blog"
      ref={sectionRef}
      className={`bg-gray-100 py-16 transition-all duration-700 transform ${sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight">
          Satisfied Customers <br />
          <span className="text-blue-500">Are Our Best Ads.</span>
        </h2>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-between items-center px-8 md:px-20 mb-8">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full border border-gray-300 hover:bg-gray-200 transition"
        >
          <FiChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="p-3 rounded-full border border-gray-300 hover:bg-gray-200 transition"
        >
          <FiChevronRight size={20} />
        </button>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {currentTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`flex flex-col items-start text-left space-y-4 bg-gray-100 p-6 transition-all duration-700 transform ${sectionInView
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
              }`}
            style={{
              transitionDelay: sectionInView ? `${(index + 1) * 100}ms` : '0ms',
            }}
          >
            {/* Quotation Marks */}
            <div className="text-blue-500 text-6xl font-bold leading-none">“</div>

            {/* Testimonial Text */}
            <p className="text-gray-700 text-lg italic leading-relaxed">
              {testimonial.text}
            </p>

            {/* User Details and Ratings */}
            <div className="flex items-center space-x-4">
              {/* User Image */}
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={64}
                height={64}
                className="rounded-full w-16 h-16 sm:w-24 sm:h-24" // Responsive sizes
              />
              {/* User Name, Role, and Ratings */}
              <div className="flex flex-col">
                <h4 className="font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <div className="flex space-x-1 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
