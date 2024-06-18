
"use client";

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Typewriter } from 'react-simple-typewriter';
import './globals.css';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      title: 'ClimaTrac Weather App',
      description: 'A weather tracking application with real-time updates and forecasts.',
      image: '/images/climatrac.png',
      details: 'Built with React and Node.js, ClimaTrac provides detailed weather information and forecasts.',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2.',
      image: '/images/project2.png',
      details: 'Detailed information about Project 2.',
      link: '#',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3.',
      image: '/images/project3.png',
      details: 'Detailed information about Project 3.',
      link: '#',
    },
  ];

  const openModal = (project) => {
    setCurrentProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProject(null);
  };

  useEffect(() => {
    const createBackgroundAnimation = () => {
      const container = document.querySelector('.background-container');
      const occupiedPositions = [];

      const isOverlap = (pos, size = 100) => {
        for (let i = 0; i < occupiedPositions.length; i++) {
          const other = occupiedPositions[i];
          const xDist = pos.x - other.x;
          const yDist = pos.y - other.y;
          const distance = Math.sqrt(xDist * xDist + yDist * yDist);
          if (distance < size) {
            return true;
          }
        }
        return false;
      };

      for (let i = 0; i < 12; i++) {
        const cube = document.createElement('div');
        cube.className = 'animated-cube';

        for (let j = 0; j < 6; j++) {
          const face = document.createElement('div');
          face.className = 'face';
          cube.appendChild(face);
        }

        let position;
        do {
          position = {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          };
        } while (isOverlap(position));

        occupiedPositions.push(position);
        cube.style.left = `${position.x}px`;
        cube.style.top = `${position.y}px`;

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
              <h1 className="text-5xl font-bold mb-4">
                <Typewriter
                  words={['Hi, I\'m Josh Breytspraak', 'Welcome to my Portfolio Site!']}
                  loop={false}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <p className="mt-4 text-xl max-w-4xl">
                I am a Full Stack Web Developer with a passion for building web applications and exploring new technologies.
              </p>
              <div className="mt-8">
                <a href="#projects" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-red-700 transition duration-300">
                  Explore My Work
                </a>
              </div>
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
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="p-6 mt-6 text-left border rounded-xl bg-black text-white w-72 cursor-pointer transition-transform transform hover:scale-105"
                    onClick={() => openModal(project)}
                  >
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4 transition-transform transform hover:scale-110" />
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="mt-2">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          
          <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-secondary py-20 text-white obelisk">
            <div className="obelisk-content">
              <h2 className="text-4xl font-bold mb-4">Let's Connect!</h2>
              <form className="flex flex-col items-center justify-center mt-8 space-y-4 w-full max-w-md">
                <div className="w-full">
                  <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                  <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-black text-white" />
                </div>
                <div className="w-full">
                  <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                  <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-black text-white" />
                </div>
                <div className="w-full">
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
      
      {/* Project Viewer */}

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="relative bg-white p-6 rounded-lg max-w-lg w-full">
            <button
              className="absolute top-4 right-4 text-black text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{currentProject.title}</h2>
            <img src={currentProject.image} alt={currentProject.title} className="w-full h-64 object-cover rounded-md mb-4" />
            <p className="text-lg">{currentProject.details}</p>
          </div>
        </div>
      )}

    </div>
  );
}
