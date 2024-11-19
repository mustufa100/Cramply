"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const Features: React.FC = () => {
  const [startCounting, setStartCounting] = useState(false);
  const featuresRef = useRef<HTMLElement | null>(null);

  const stats = [
    { value: "10", label: "Years of Experience" },
    { value: "1000", label: "Camping Destinations" },
    { value: "8000", label: "Happy Customers" },
    { value: "4.2", label: "Overall Rating" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCounting(true);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={featuresRef}
      className="relative z-10 mt-20 md:mt-24 bg-gray-100"
    >
      {/* Statistics Section */}
      <div className="bg-blue-500 py-12">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <h3 className="text-4xl md:text-5xl font-extrabold">
                {startCounting ? (
                  <CountUp end={parseFloat(stat.value)} duration={2.5} />
                ) : (
                  "0"
                )}
              </h3>
              <p className="text-sm md:text-base mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
