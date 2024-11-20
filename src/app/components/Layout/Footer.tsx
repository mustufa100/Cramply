'use client';

import React, { useRef } from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const Footer: React.FC = () => {
  // Create refs for each animated section
  const logoRef = useRef(null);
  const companyRef = useRef(null);
  const resourcesRef = useRef(null);
  const contactRef = useRef(null);
  const copyrightRef = useRef(null);

  // Use the useInView hook for scroll detection
  const isLogoInView = useInView(logoRef, { once: true });
  const isCompanyInView = useInView(companyRef, { once: true });
  const isResourcesInView = useInView(resourcesRef, { once: true });
  const isContactInView = useInView(contactRef, { once: true });
  const isCopyrightInView = useInView(copyrightRef, { once: true });

  return (
    <footer className="bg-blue-600 text-white py-8 w-full">
      {/* Desktop Footer */}
      <div
        className="hidden sm:grid container mx-auto px-4 gap-6 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-6"
      >
        {/* Logo and Description */}
        <motion.div
          ref={logoRef}
          initial={{ x: -100, opacity: 0 }}
          animate={isLogoInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="md:col-span-2"
        >
          <div className="flex items-center mb-4">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">C</span>
            </div>
            <h1 className="ml-2 text-2xl font-semibold">Camply.</h1>
          </div>
          <p className="text-gray-200 leading-relaxed">
            We always make our customer happy by providing as many choices as possible.
          </p>
        </motion.div>

        {/* Company Links */}
        <motion.div
          ref={companyRef}
          initial={{ y: 100, opacity: 0 }}
          animate={isCompanyInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="max-w-full"
        >
          <h3 className="text-lg font-medium mb-2">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Features</li>
            <li>News</li>
            <li>FAQ</li>
          </ul>
        </motion.div>

        {/* Resources Links */}
        <motion.div
          ref={resourcesRef}
          initial={{ y: 100, opacity: 0 }}
          animate={isResourcesInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="max-w-full"
        >
          <h3 className="text-lg font-medium mb-2">Resources</h3>
          <ul className="space-y-2">
            <li>Events</li>
            <li>Promo</li>
            <li>Req Demo</li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          ref={contactRef}
          initial={{ y: 100, opacity: 0 }}
          animate={isContactInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="max-w-full"
        >
          <h3 className="text-lg font-medium mb-2">Contact Info</h3>
          <p>Camply@gmail.com</p>
          <div className="flex space-x-4 mt-4">
            <FaInstagram className="text-white text-xl" />
            <FaFacebook className="text-white text-xl" />
            <FaTwitter className="text-white text-xl" />
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        ref={copyrightRef}
        initial={{ x: 100, opacity: 0 }}
        animate={isCopyrightInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
        className="hidden sm:block border-t border-gray-400 mt-6 pt-4 text-center text-gray-200 text-xs"
      >
        Copyright © 2022 Camply. All rights reserved.
      </motion.div>

      {/* Small Screens Footer (Static) */}
      <div className="block sm:hidden container mx-auto px-4">
  <div className="flex flex-col space-y-6 pb-0">
    {/* Logo */}
    <div className="mb-4">
      <div className="flex items-center mb-4">
        <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
          <span className="text-blue-600 font-bold text-lg">C</span>
        </div>
        <h1 className="ml-2 text-2xl font-semibold">Camply.</h1>
      </div>
      <p className="text-gray-200 leading-relaxed">
        We always make our customer happy by providing as many choices as possible.
      </p>
    </div>

    {/* Footer Links */}
    <div className="flex flex-col space-y-6">
      <div className="grid grid-cols-2 gap-x-4 gap-y-6">
        {/* Adjust each section */}
        <div>
          <h3 className="text-lg font-medium mb-2">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Features</li>
            <li>News</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Resources</h3>
          <ul className="space-y-2">
            <li>Events</li>
            <li>Promo</li>
            <li>Req Demo</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Support</h3>
          <ul className="space-y-2">
            <li>Account</li>
            <li>Support Center</li>
            <li>Feedback</li>
            <li>Contact Us</li>
            <li>Accessibility</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Contact</h3>
          <p>Camply@gmail.com</p>
          <div className="flex space-x-4 mt-4">
            <FaInstagram className="text-white text-xl" />
            <FaFacebook className="text-white text-xl" />
            <FaTwitter className="text-white text-xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  
    </footer>
  );
};

export default Footer;



// import React from 'react';
// import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

// const Footer: React.FC = () => {
//   return (
// <footer className="bg-blue-600 text-white py-12 w-full flex-grow">
// <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-sm">
//         {/* Logo and Description */}
//         <div className="md:col-span-2 max-w-xs">
//           <div className="flex items-center mb-4">
//             <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
//               <span className="text-blue-600 font-bold text-lg">C</span>
//             </div>
//             <h1 className="ml-2 text-2xl font-semibold">Camply.</h1>
//           </div>
//           <p className="text-gray-200 leading-relaxed">
//             We always make our customer happy by providing as many choices as possible.
//           </p>
//         </div>

//         {/* Company Links */}
//         <div className="max-w-full">
//           <h3 className="text-lg font-medium mb-4">Company</h3>
//           <ul className="space-y-2">
//             <li>About Us</li>
//             <li>Features</li>
//             <li>News</li>
//             <li>FAQ</li>
//           </ul>
//         </div>

//         {/* Resources Links */}
//         <div className="max-w-full">
//           <h3 className="text-lg font-medium mb-4">Resources</h3>
//           <ul className="space-y-2">
//             <li>Events</li>
//             <li>Promo</li>
//             <li>Req Demo</li>
//           </ul>
//         </div>

//         {/* Support Links */}
//         <div className="max-w-full">
//           <h3 className="text-lg font-medium mb-4">Support</h3>
//           <ul className="space-y-2">
//             <li>Account</li>
//             <li>Support Center</li>
//             <li>Feedback</li>
//             <li>Contact Us</li>
//             <li>Accessibility</li>
//           </ul>
//         </div>

//         {/* Contact Info and Social Media Icons */}
//         <div className="max-w-full">
//           <h3 className="text-lg font-medium mb-4">Contact Info</h3>
//           <p>Camply@gmail.com</p>
//           <div className="flex space-x-4 mt-4">
//             <FaInstagram className="text-white text-xl sm:text-2xl" />
//             <FaFacebook className="text-white text-xl sm:text-2xl" />
//             <FaTwitter className="text-white text-xl sm:text-2xl" />
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="border-t border-gray-400 mt-8 pt-4 text-center text-gray-200 text-xs">
//         Copyright © 2022 Camply. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
