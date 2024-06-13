// src/components/Navbar.js

import Link from 'next/link';
import React from 'react';


export default function Navbar() {
    return (
        <nav className="fixed w-full bg-white shadow">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="text-xl font-bold">My Portfolio</div>
                <div className="flex space-x-4">
                    <Link href="#about" className="hover:text-blue-500">About</Link>
                    <Link href="#projects" className="hover:text-blue-500">Projects</Link>
                    <Link href="#contact" className="hover:text-blue-500">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

