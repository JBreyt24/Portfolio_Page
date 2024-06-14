// src/components/Navbar.js

import Link from 'next/link';
import React from 'react';


export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 left-0 bg-red-black-gradient p-4 z-50">
            <ul className="flex justify-center space-x-8 text-white">
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
        </nav>
    );
}
