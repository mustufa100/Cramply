'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../UI/Button';

const Hero: React.FC = () => {
  const textVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut', delay: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut', delay: 0.4 },
    },
  };

  return (
    <section
      id="home"
      className="bg-gray-100 min-h-[80vh] lg:min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-10 lg:py-0 text-center lg:text-left"
    >

      {/* Text Content */}
      <motion.div
        className="max-w-lg lg:max-w-xl"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-snug sm:leading-tight">
          Cabin In The Woods <br />
          <span className="text-blue-500">But In A Good Way!</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
          Now you can enjoy camping anywhere and anytime, and of course, it&#39;s safe with us.
        </p>
        <Button
          text="Get Started"
          className="shadow-lg bg-black text-white px-5 sm:px-6 py-3 rounded-full hover:bg-gray-800 text-sm sm:text-base"
        />
      </motion.div>

      {/* Image */}
      <motion.div
        className="mt-8 lg:mt-0 w-full max-w-xs sm:max-w-sm lg:max-w-lg lg:mr-10"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <Image
          src="/images/mob2.png"
          alt="Mobile App Preview"
          width={500}
          height={500}
          className="w-full drop-shadow-lg"
          priority
        />
      </motion.div>
    </section>
  );
};

export default Hero;
