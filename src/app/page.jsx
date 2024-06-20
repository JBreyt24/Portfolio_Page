"use client";

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import './globals.css';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Project Cards
  const projects = [
    {
      title: 'ClimaTrack Weather App',
      description: 'A weather tracking application with real-time updates and forecasts that utilizes OpenWeather API and can be tailored to user-specific locations.',
      image: '/ClimaTrack-Forecast.png',
      details: 'Built with full stack MERN, ClimaTrack provides detailed weather information and forecasts via locations the user specifies. Also utilizes JSON Web Tokens for user authentication.',
      link: '#',
    },
    {
      title: 'Hospital Manager App',
      description: 'A patient managing app designed to help optimize and streamline patient management systems and medical record entry in a hospital or clinical setting.',
      image: '/Patients-app.png',
      details: 'Built in full stack MERN. Hospital Manager features full CRUD functionality, as well as log-in and log-out functionality using JSON Web Tokens (JWT) authentication.',
      link: '#',
    },
    {
      title: 'Magazine Sharing App',
      description: 'A social app designed to allow users to create and share magazines with other users, while also allowing the users to make changes to their profile information.',
      image: '/Magazines-app.png',
      details: 'Built using Python/Flask, this app features full CRUD functionality, as well as utilizing Session to allows users to securely login and out, and make changes to user profiles and creations.',
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

  const openResumeModal = () => {
    setResumeModalOpen(true);
  };

  const closeResumeModal = () => {
    setResumeModalOpen(false);
  };

  // Cube animation
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

      for (let i = 0; i < 20; i++) {
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
        <main className="w-full flex flex-col items-center justify-center flex-1 px-4 md:px-20 text-center mt-20">

          {/* Home Section */}

          <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-secondary py-20 text-white obelisk">
            <div className="obelisk-content">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                <Typewriter
                  words={['Hi, I am Josh Breytspraak', 'Welcome to my Portfolio Site!']}
                  loop={false}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <p className="mt-6 md:mt-20 text-lg md:text-xl max-w-4xl">
                I&apos;m a Full Stack Web Developer with a passion for building web applications and exploring new technologies.
              </p>
              <div className="mt-6 md:mt-20">
                <a href="#projects" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-red-700 transition duration-300">
                  Explore My Work
                </a>
              </div>
            </div>
          </section>

          {/* About Section */}

          <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-secondary py-20 text-white obelisk">
            <div className="obelisk-content">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-20">About Me</h2>
              <p className="mt-4 text-lg md:text-xl max-w-4xl">
                I&apos;m an Entry-Level Full Stack Developer based in Jonesboro, AR, embarking on a unique path into the world of technology. 
                My journey began with a passion for video games and music production, which sparked my interest in technology. 
                With 16 years of experience as a guitarist and a Bachelor&apos;s degree in Music Performance from Arkansas State University, I&apos;ve cultivated a strong foundation in creativity and problem-solving.

                In 2023, I enrolled in the Colorado Technical University Accelerated Web Development Program and earned my Full-Stack Web Development certification in April 2024. 
                Throughout this immersive program, I&apos;ve sharpened my skills in JavaScript, Python, React.js, Next.js, Flask, Bootstrap, and Tailwind. 
                I&apos;m dedicated to mastering the craft of building intuitive interfaces and leveraging effective data management techniques.

                I thrive on the challenges of creating and problem-solving, constantly pushing myself to explore new tools and technologies. 
                I&apos;m excited to integrate my diverse background in music and management with my newfound expertise in web development to innovate and deliver impactful software solutions.
              </p>
              <h3 className="text-3xl md:text-4xl font-bold mt-6 md:mt-20 mb-6 md:mb-20">Check out my Resume!</h3>
              <div className="mt-8">
                <button
                  onClick={openResumeModal}
                  className="px-6 py-3 bg-primary text-white rounded-md hover:bg-red-700 transition duration-300"
                >
                  View Resume
                </button>
              </div>
            </div>
          </section>

          {/* Projects Section */}

          <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-secondary py-20 text-white obelisk">
            <div className="obelisk-content">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
              <div className="flex flex-wrap justify-center max-w-6xl mt-6 py-10">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="p-4 md:p-6 mx-2 md:mx-4 text-center border rounded-xl bg-black text-white cursor-pointer transition-transform transform hover:scale-105"
                    onClick={() => openModal(project)}
                    style={{ minWidth: '280px', maxWidth: '320px' }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={320}
                      height={180}
                      className="object-cover rounded-md mb-4 transition-transform transform hover:scale-110"
                    />
                    <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                    <p className="mt-2">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}

          <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-secondary py-20 text-white obelisk">
            <div className="obelisk-content text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-20 transition-all duration-300 hover:text-primary hover:text-5xl">
                Let&#39;s Connect!
              </h2>
              <p className="text-lg md:text-xl max-w-md mb-8">
                Feel free to reach out to me via email or connect with me on social media:
              </p>
              <div className="flex flex-col space-y-4 items-center">
                <a href="mailto:jbreytdev@gmail.com" className="text-primary underline text-xl md:text-2xl mb-8 transition-all duration-300 hover:text-blue-700">
                  jbreytdev@gmail.com
                </a>
                <div className="flex space-x-4">
                  <a href="https://github.com/JBreyt24" target="_blank" rel="noopener noreferrer" className="text-primary text-4xl md:text-5xl transition-all duration-300 hover:text-green-700">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/josh-breytspraak-251624b0/" target="_blank" rel="noopener noreferrer" className="text-primary text-4xl md:text-5xl transition-all duration-300 hover:text-blue-500">
                    <FaLinkedin />
                  </a>
                  <a href="https://discordapp.com/users/279118126027898890" target="_blank" rel="noopener noreferrer" className="text-primary text-4xl md:text-5xl transition-all duration-300 hover:text-purple-600">
                    <FaDiscord />
                  </a>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>

      {/* Project Viewer */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-dark bg-opacity-75 text-center">
          <div className="relative bg-red-900 p-8 rounded-lg max-w-7xl w-full mx-4">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentProject.title}</h2>
            <div className="flex justify-center">
              <img src={currentProject.image} alt={currentProject.title} className="w-full md:max-w-7xl h-auto object-cover rounded-md mb-4" />
            </div>
            <p className="text-lg">{currentProject.details}</p>
          </div>
        </div>
      )}

      {/* Resume Viewer */}
      {resumeModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-dark bg-opacity-75 text-center">
          <div className="relative bg-red-900 p-8 rounded-lg max-w-7xl w-full mx-4">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeResumeModal}
            >
              &times;
            </button>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h2>
            <div className="flex justify-center">
              <iframe
                src="/dev-resume.pdf"
                title="Resume"
                className="w-full h-96 md:h-[80vh]"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
