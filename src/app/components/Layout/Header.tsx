"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isBrowser, setIsBrowser] = useState(false); // to ensure client-side rendering

    useEffect(() => {
        setIsBrowser(true); // Set the flag to true after the component is mounted
    }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const navVariants = {
        hidden: { x: '100%', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
    };

    const logoVariants = {
        hidden: { x: '-100%', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
    };

    // Return early if not client-side
    if (!isBrowser) {
        return null; // or return a loading state
    }

    return (
        <header className="flex justify-between items-center py-4 px-10 bg-gray-100 shadow-md relative">
            {/* Logo Section */}
            <motion.div
                className="text-2xl font-extrabold text-blue-600 flex gap-2 mr-6"
                initial="hidden"
                animate="visible"
                variants={logoVariants}
            >
                {/* Replace any apostrophes with &apos; or &#39; */}
                <span className="text-blue-600 font-bold text-lg bg-white rounded-full w-10 h-10 flex items-center justify-center">C</span>
                <Link to="/"> Camply<span className="text-black">.</span></Link>
            </motion.div>

            {/* Toggle Button for Mobile */}
            <div className="md:hidden text-2xl cursor-pointer" onClick={toggleNavbar}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Navigation Links */}
            <motion.nav
                initial="hidden"
                animate="visible"
                variants={navVariants}
                className={`${isOpen ? 'flex-col absolute top-full left-0 w-full bg-gray-300' : 'hidden'
                    } md:static md:flex md:flex-row md:w-auto md:space-x-8 md:items-center transition duration-300 ease-in-out bg-gray-300 md:bg-gray-100`}
            >
                <ul className="flex flex-col md:flex-row md:space-x-8 text-gray-700 font-medium w-full md:w-auto">
                    {['Home', 'About', 'Pricing', 'Blog', 'Contact'].map((item, index) => (
                        <li key={index} className="text-center py-2 md:py-0">
                            {/* Use Link from react-scroll */}
                            <Link
                                to={item.toLowerCase()} // Ensure the section id matches the link
                                smooth={true}
                                duration={500}
                                className="hover:text-blue-500 transition text-sm md:text-base cursor-pointer"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center mt-4 md:mt-0">
                    <Button
                        text="Login"
                        className="bg-black text-white px-4 py-2 rounded-full text-sm md:text-base hover:bg-gray-800"
                    />
                    <Button
                        text="Register"
                        className="bg-gray-100 text-black px-4 py-2 border border-black rounded-full text-sm md:text-base hover:bg-gray-200"
                    />
                </div>
            </motion.nav>
        </header>
    );
};

export default Header;
