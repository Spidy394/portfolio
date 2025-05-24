import React, { useState, useEffect } from "react";
import RevealOnScroll from "../RevealOnScroll";
import TypewriterText from "../TypewriterText";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { scrollToSection } from '../../utils/smoothScroll';

const Home = () => {

  const handleScrollOnClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  }


  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Wait for the loading screen to disappear and then add an additional 1 second delay
    // The loading screen has a 1 second delay after completion, so we add 1 more second
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 2500); // 1 second for loading screen completion + 1 second additional delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16 md:pt-20"
    >
      <RevealOnScroll>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
            Hi, I'm{" "}
            <TypewriterText 
              text="Shubhodeep" 
              className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
              delay={200}
              startAnimation={startAnimation}
            />
          </h1>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-lg mx-auto px-4">
            A passionate developer with expertise in building scalable web
            applications and crafting innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
            <a
              href="#projects"
              onClick={(e) => handleScrollOnClick(e, "projects")}
              className="bg-blue-500 text-white py-2.5 sm:py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] text-sm sm:text-base"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollOnClick(e, "contact")}
              className="border border-blue-500/50 text-blue-500 py-2.5 sm:py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 text-sm sm:text-base"
            >
              Contact Me
            </a>
          </div>
          
          {/* Social Media Links */}
          <div className="mt-8 flex justify-center gap-6">
            <a 
              href="https://github.com/Spidy394" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-10 h-7" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shubho-deep" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-10 h-7" />
            </a>
            <a 
              href="https://x.com/shubho_deep_09" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <RiTwitterXLine className="w-10 h-7" />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
