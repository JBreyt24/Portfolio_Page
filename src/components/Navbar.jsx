"use client"

import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import React, { useState } from 'react';
import { AlignJustify } from 'lucide-react'; // Import this for the hamburger icon

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="flex fixed top-0 left-0 w-full bg-gradient-to-r from-red-900 to-black p-4 z-50 justify-between items-center lg:justify-center">

            {/* Desktop Navbar */}
            <ul className="hidden lg:flex space-x-8 text-white">
                <li>
                    <a href="#home" className="hover:text-primary">Home</a>
                </li>
                <li>
                    <a href="#about" className="hover:text-primary">About</a>
                </li>
                <li>
                    <a href="#projects" className="hover:text-primary">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-primary">Contact</a>
                </li>
                <li className="flex items-center space-x-4">
                    <a href="https://github.com/JBreyt24" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        <FaGithub className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/josh-breytspraak-251624b0/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href="https://discordapp.com/users/279118126027898890" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        <FaDiscord className="w-6 h-6" />
                    </a>
                </li>
            </ul>

            {/* Mobile Navbar */}
            <div className="lg:hidden flex items-center">
                {/* Hamburger Menu */}
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <AlignJustify size={24} />
                </button>

                {/* Space */}
                <div className="ml-4 flex-grow"></div>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-4">
                    <a href="https://github.com/JBreyt24" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
                        <FaGithub className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/josh-breytspraak-251624b0/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href="https://discordapp.com/users/279118126027898890" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
                        <FaDiscord className="w-6 h-6" />
                    </a>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden absolute top-full left-0 bg-red-900 w-full py-4 text-white">
                    <ul className="flex flex-col space-y-4 items-center">
                        <li>
                            <a href="#home" className="hover:text-primary">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-primary">About</a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-primary">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-primary">Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}


