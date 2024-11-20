import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-12 w-full">
      <div className="container mx-auto px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-sm">

        {/* Logo and Description */}
        <div className="md:col-span-2 max-w-xs">
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

        {/* Company Links */}
        <div className="max-w-[150px]">
          <h3 className="text-lg font-medium mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Features</li>
            <li>News</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Resources Links */}
        <div className="max-w-[150px]">
          <h3 className="text-lg font-medium mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>Events</li>
            <li>Promo</li>
            <li>Req Demo</li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="max-w-[150px]">
          <h3 className="text-lg font-medium mb-4">Support</h3>
          <ul className="space-y-2">
            <li>Account</li>
            <li>Support Center</li>
            <li>Feedback</li>
            <li>Contact Us</li>
            <li>Accessibility</li>
          </ul>
        </div>

        {/* Contact Info and Social Media Icons */}
        <div className="max-w-[150px]">
          <h3 className="text-lg font-medium mb-4">Contact Info</h3>
          <p>Camply@gmail.com</p>
          <div className="flex space-x-4 mt-4">
            <FaInstagram className="text-white text-2xl" />
            <FaFacebook className="text-white text-2xl" />
            <FaTwitter className="text-white text-2xl" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-400 mt-8 pt-4 text-center text-gray-200 text-xs">
        Copyright © 2022 Camply. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
