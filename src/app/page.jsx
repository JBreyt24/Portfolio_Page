"use client";

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import './globals.css';

export default function Home() {
  useEffect(() => {

    const createBackgroundAnimation = () => {
      const container = document.querySelector('.background-container');

      // Create and append animated cubes
      for (let i = 0; i < 12; i++) {
        const cube = document.createElement('div');
        cube.className = 'animated-cube';
        
        // Create faces for the cube
        for (let j = 0; j < 6; j++) {
          const face = document.createElement('div');
          face.className = 'face';
          cube.appendChild(face);
        }

        // Position the cube randomly
        cube.style.right = `${Math.random() * 100}vw`;
        cube.style.left = `${Math.random() * 100}vw`;
        cube.style.top = `${Math.random() * 100}vh`;
        cube.style.bottom = `${Math.random() * 100}vh`;
        
        container.appendChild(cube);
      }
    };

    createBackgroundAnimation();

    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <div className="relative">
      <div className="background-container"></div>
      <div className="relative z-10">
        <Navbar />
        <main className="w-full flex flex-col items-center justify-center flex-1 px-20 text-center mt-20">

          {/* Home Section */}

          <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-secondary py-20 text-white obelisk">
            <div className="obelisk-content">
              <h2 className="text-4xl font-bold mb-4">Welcome to my Portfolio Website!</h2>
            </div>
          </section>

          {/* About Section */}

          <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-secondary py-20 text-white obelisk">
            <div className="obelisk-content">
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <p className="mt-4 text-xl max-w-4xl">Hi, I'm Josh Breytspraak. I'm a Full Stack Web Developer with experience in various technologies. I love building web applications and learning new technologies.</p>
            </div>
          </section>

          {/* Projects Section */}

          <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-secondary py-20 text-white obelisk">
            <div className="obelisk-content">
              <h2 className="text-4xl font-bold mb-4">Projects</h2>
              <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 py-20">
                <div className="p-6 mt-6 text-left border rounded-xl bg-black text-white project-card">
                  <h3 className="text-2xl font-bold">ClimaTrac Weather App</h3>
                  <p className="mt-4 text-xl">Description of Project 1.</p>
                </div>
                <div className="p-6 mt-6 text-left border rounded-xl bg-black text-white project-card">
                  <h3 className="text-2xl font-bold">Project 2</h3>
                  <p className="mt-4 text-xl">Description of Project 2.</p>
                </div>
                <div className="p-6 mt-6 text-left border rounded-xl bg-black text-white project-card">
                  <h3 className="text-2xl font-bold">Project 3</h3>
                  <p className="mt-4 text-xl">Description of Project 3.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}

          <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-secondary py-20 text-white obelisk">
            <div className="obelisk-content">
              <h2 className="text-4xl font-bold mb-4">Let's Connect!</h2>
              <p className="mt-4 text-xl max-w-4xl"></p>
              <form className="flex flex-col items-center justify-center mt-8 space-y-4 w-full max-w-md">
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
