// src/app/page.js


import Navbar from './../components/Navbar';


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar />
      <main className="w-full flex flex-col items-center justify-center flex-1 px-20 text-center mt-20">
        <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 w-full">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-xl max-w-4xl">Hi, I'm Josh Breytspraak. I'm a Full Stack Web Developer.</p>
        </section>
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-white w-full">
          <h2 className="text-4xl font-bold">Projects</h2>
          <p className="mt-4 text-xl max-w-4xl">Check out some of my recent work.</p>
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <div className="w-96 p-6 mt-6 text-left border rounded-xl">
              <h3 className="text-2xl font-bold">Project 1</h3>
              <p className="mt-4 text-xl">Description of Project 1.</p>
            </div>
            <div className="w-96 p-6 mt-6 text-left border rounded-xl">
              <h3 className="text-2xl font-bold">Project 2</h3>
              <p className="mt-4 text-xl">Description of Project 2.</p>
            </div>
          </div>
        </section>
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 w-full">
          <h2 className="text-4xl font-bold">Contact</h2>
          <p className="mt-4 text-xl max-w-4xl">Get in touch with me.</p>
        </section>
      </main>
    </div>
  );
}
