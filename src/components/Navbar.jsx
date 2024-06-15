
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import Link from 'next/link';
import React from 'react';
import { AlignJustify } from 'lucide-react'; // import this for the hamburger icon



export default function Navbar() {
    return (
        <>

            {/* Desktop Navbar */}

            <nav className="hidden lg:flex fixed top-0 left-0 bg-red-black-gradient p-4 z-50 w-full justify-center">
                <ul className="flex justify-center space-x-8 text-white">
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
            </nav>

            {/* Mobile Navbar */}

            <nav className="lg:hidden flex fixed top-0 left-0 bg-red-black-gradient p-4 z-50 w-full justify-left">
                <ul className="flex justify-center space-x-8 text-white">
                    <div className="relative group">
                        <a className="text-md active:font-bold hover:text-blue-400 text-lg text-center w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1" >
                        <AlignJustify />
                        </a>
                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                            <div className="px-2 pt-2 pb-4 bg-red-200 shadow-lg">
                                <div className="dropdown-menu">
                                    <ul>
                                        <li><a href="#home" className=" dropdown-item">Home </a></li>
                                        <li><a href="#about" className=" dropdown-item">About </a></li>
                                        <li><a href="#projects" className=" dropdown-item">Projects </a></li>
                                        <li><a href="#contact" className=" dropdown-item">Contact </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
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
            </nav>
        </>
    );
}
