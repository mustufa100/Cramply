'use client';

import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

const FAQSection: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-gray-100 py-12 px-6 sm:px-10 lg:px-24 flex flex-col md:flex-row items-center justify-between"
    >
      {/* Left Side - Title, Subtitle, and Email Input */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 transition-all duration-700 ease-out transform ${sectionInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          style={{ transitionDelay: sectionInView ? "100ms" : "0ms" }}
        >
          Got A Question <br />
          For Campty<span className="text-orange-500">?</span>
        </h2>
        <p
          className={`text-gray-600 text-sm sm:text-base lg:text-lg mb-6 transition-all duration-700 ease-out transform ${sectionInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          style={{ transitionDelay: sectionInView ? "100ms" : "0ms" }}
        >
          If there are questions you want to ask, <br className="hidden sm:block" /> we will answer
          all your questions.
        </p>
        <div
          className={`flex items-center bg-white rounded-full border border-gray-300 p-1 shadow-md max-w-md transition-all duration-700 ease-out transform ${sectionInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          style={{ transitionDelay: sectionInView ? "100ms" : "0ms" }}
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 px-4 py-2 outline-none rounded-l-full text-gray-700 text-sm sm:text-base"
          />
          {/* Submit Button with Left-to-Right Animation */}
          <button
            className={`bg-black text-white px-4 sm:px-6 py-2 rounded-full font-semibold text-sm sm:text-base transition-all duration-700 ease-out transform ${sectionInView ? "translate-x-0" : "-translate-x-full"
              }`}
            style={{ transitionDelay: sectionInView ? "100ms" : "0ms" }}
          >
            Submit
          </button>
        </div>
      </div>

      {/* Right Side - FAQ List */}
      <div className="md:w-1/2 md:pl-6 lg:pl-12">
        <p
          className={`text-gray-600 text-sm sm:text-base lg:text-lg mb-6 transition-all duration-700 ease-out transform ${sectionInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          style={{ transitionDelay: sectionInView ? "100ms" : "0ms" }}
        >
          Maybe your question has been answered, check this out.
        </p>
        <ul className="space-y-4">
          {["What is Campty?", "How to book tickets?", "What kind of service will I get?"].map(
            (faq, index) => (
              <li
                key={index}
                className={`flex items-center justify-between py-3 border-b border-gray-300 transition-all duration-700 ease-out transform ${sectionInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  }`}
                style={{ transitionDelay: sectionInView ? `${800 + index * 100}ms` : "0ms" }}
              >
                <span className="text-gray-800 font-medium text-sm sm:text-base lg:text-lg">
                  {faq}
                </span>
                <FiArrowRight className="text-blue-500 text-xl sm:text-2xl" />
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default FAQSection;
