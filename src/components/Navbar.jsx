
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import Link from 'next/link';
import React from 'react';


export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 left-0 bg-red-black-gradient p-4 z-50">
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
    );
}
