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

  const projects = [
    {
      title: 'ClimaTrack Weather App',
      description: 'A weather tracking application with real-time updates and forecasts that utilizes OpenWeather API and can be tailored to user-specific locations.',
      image: '/ClimaTrack Logo.png',
      video: '/ClimaTrack-Demo.mp4',
      details: 'Built with full stack MERN, ClimaTrack provides detailed weather information and forecasts via locations the user specifies. Also utilizes JSON Web Tokens for user authentication.',
      link: '#',
    },
    {
      title: 'Hospital Manager App',
      description: 'A patient managing app designed to help optimize and streamline patient management systems and medical record entry in a hospital or clinical setting.',
      image: '/hospital.png',
      video: '/',
      details: 'Built in full stack MERN. Hospital Manager features full CRUD functionality, as well as log-in and log-out functionality using JSON Web Tokens (JWT) authentication.',
      link: '#',
    },
    {
      title: 'Magazine Sharing App',
      description: 'A social app designed to allow users to create and share magazines with other users, while also allowing the users to make changes to their profile information.',
      image: '/Magazines-app.png',
      video: '/',
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
                  words={["Hi, I'm Josh Breytspraak", "Welcome to my Portfolio Site!"]}
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
                I’m a Full Stack Developer based in Jonesboro, AR, with a passion for building functional, user-centered web applications. My journey into tech began through a love for video games and music production, evolving into a drive to create and code with purpose.

                In 2024, I completed the Full-Stack Web Development program at Colorado Technical University, where I gained hands-on experience in modern web technologies including JavaScript, Python, React.js, and Next.js.

                I specialize in developing responsive front-end interfaces and scalable back-end systems, with a growing focus on clean code, performance optimization, and intuitive UI/UX. I’m constantly exploring new frameworks and best practices to deepen my skills and stay current in the ever-evolving tech landscape.

                Whether collaborating on a team or leading a project, I bring a blend of creative problem-solving, technical know-how, and real-world management experience. I’m excited to build innovative software solutions that make a difference.
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

          <div className="flex flex-wrap justify-center gap-10 max-w-6xl mt-6 py-10">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Card */}
                <div
                  className="p-4 md:p-6 text-center border rounded-xl bg-black text-white transition-transform transform hover:scale-105"
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

                {/* Button outside the card */}
                <button
                  onClick={() => openModal(project)}
                  className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  View Demo
                </button>
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

{/* Project Viewer Modal */}
{modalOpen && currentProject && (
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
        {currentProject.video && (
          <video
            src={currentProject.video}
            controls
            className="w-full md:max-w-7xl h-auto object-cover rounded-md mb-4"
          />
        )}
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
                src="/resume.pdf"
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
