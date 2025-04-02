import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16 md:pt-20"
    >
      <RevealOnScroll>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm Shubhodeep
          </h1>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-lg mx-auto px-4">
            A passionate developer with expertise in building scalable web
            applications and crafting innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-2.5 sm:py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] text-sm sm:text-base"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-2.5 sm:py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 text-sm sm:text-base"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
