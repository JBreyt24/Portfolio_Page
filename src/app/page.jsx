// src/app/page.js
"use client";
import { useState } from 'react';
import Navbar from '../components/Navbar';
import BackgroundComponent from '../components/BackgroundSlider';

export default function Home() {
  return (
    <div className="relative">
      <BackgroundComponent className="absolute inset-0 z-0" />
      <div className="relative z-10">
        <Navbar />
        <main className="w-full flex flex-col items-center justify-center flex-1 px-20 text-center mt-20">
          <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-secondary w-full py-20 text-white obelisk">
            <div className="obelisk-content">
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <p className="mt-4 text-xl max-w-4xl">Hi, I'm Josh Breytspraak. I'm a Full Stack Web Developer with experience in various technologies. I love building web applications and learning new technologies.</p>
            </div>
          </section>
          <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-secondary w-full py-20 text-white obelisk">
            <div className="obelisk-content">
              <h2 className="text-4xl font-bold mb-4">Projects</h2>
              <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                <div className="w-96 p-6 mt-6 text-left border rounded-xl bg-black text-white obelisk">
                  <h3 className="text-2xl font-bold">Project 1</h3>
                  <p className="mt-4 text-xl">Description of Project 1.</p>
                </div>
                <div className="w-96 p-6 mt-6 text-left border rounded-xl bg-black text-white obelisk">
                  <h3 className="text-2xl font-bold">Project 2</h3>
                  <p className="mt-4 text-xl">Description of Project 2.</p>
                </div>
                <div className="w-96 p-6 mt-6 text-left border rounded-xl bg-black text-white obelisk">
                  <h3 className="text-2xl font-bold">Project 3</h3>
                  <p className="mt-4 text-xl">Description of Project 3.</p>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-secondary w-full py-20 text-white obelisk">
            <div className="obelisk-content">
              <h2 className="text-4xl font-bold mb-4">Contact</h2>
              <p className="mt-4 text-xl max-w-4xl">Feel free to get in touch with me via email or phone.</p>
              <form className="mt-8 space-y-4 w-full max-w-md">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                  <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-black text-white" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                  <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-black text-white" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
                  <textarea id="message" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-black text-white" rows="4"></textarea>
                </div>
                <div>
                  <button type="submit" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">Submit</button>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
