import { useState, useEffect, useCallback } from "react";
import RevealOnScroll from "../RevealOnScroll";
import TypewriterText from "../TypewriterText";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { HiMail, HiDocumentDownload } from "react-icons/hi";
import { HiEye } from "react-icons/hi2";
import { scrollToSection } from '../../utils/smoothScroll';

const Home = () => {
  const handleScrollOnClick = useCallback((e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  }, []);

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
            <span className="inline-block relative group cursor-pointer">
              <TypewriterText 
                text="Shubhodeep" 
                className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-500 transform group-hover:scale-105 group-hover:-rotate-1"
                delay={200}
                startAnimation={startAnimation}
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 group-hover:animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
            A passionate developer with expertise in building scalable
            applications and crafting innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">            <a
              href="#projects"
              onClick={(e) => handleScrollOnClick(e, "projects")}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_12px_35px_rgba(59,130,246,0.5)] text-sm sm:text-base backdrop-blur-sm group flex items-center gap-2 justify-center"
            >
              <HiEye size={20} className="relative z-20 transition-all duration-300 group-hover:scale-110" />
              <span className="relative z-20">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition-all duration-300 -z-10"></div>
            </a><a
              href="#contact"
              onClick={(e) => handleScrollOnClick(e, "contact")}
              className="border border-blue-500/50 text-blue-400 py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_35px_rgba(59,130,246,0.3)] hover:bg-blue-500/15 hover:border-blue-400 hover:text-blue-300 text-sm sm:text-base backdrop-blur-sm group relative overflow-hidden flex items-center gap-2 justify-center"
            >
              <HiMail size={20} className="transition-all duration-300 group-hover:scale-110" />
              <span className="relative z-10">Contact Me</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-blue-400/30 rounded-lg blur opacity-0 group-hover:opacity-50 transition-all duration-300 -z-10"></div>
            </a>            <a
              href="https://drive.google.com/file/d/1_KKPOyGIQEw9FiDCtFoiKNxv3SKACuSK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-500/50 text-cyan-400 py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_35px_rgba(34,211,238,0.3)] hover:bg-cyan-500/15 hover:border-cyan-400 hover:text-cyan-300 text-sm sm:text-base backdrop-blur-sm group relative overflow-hidden flex items-center gap-2 justify-center"
            >
              <HiDocumentDownload size={20} className="transition-all duration-300 group-hover:scale-110" />
              <span className="relative z-10">Download Resume</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-cyan-400/30 rounded-lg blur opacity-0 group-hover:opacity-50 transition-all duration-300 -z-10"></div>
            </a>
          </div>
          
          {/* Social Media Links */}
          <div className="mt-10 flex justify-center gap-6">
            <a 
              href="https://github.com/Spidy394" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:bg-gray-900/80 hover:border-gray-600/70 transition-all duration-300 transform hover:scale-125 hover:-rotate-6 hover:shadow-[0_8px_25px_rgba(255,255,255,0.15)] backdrop-blur-sm group relative"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-6 h-6 relative z-10" />
              <div className="absolute -inset-2 bg-gradient-to-r from-gray-600/20 to-gray-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
            </a>
            <a 
              href="https://www.linkedin.com/in/shubho-deep" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-blue-500 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-125 hover:rotate-6 hover:shadow-[0_8px_25px_rgba(0,119,181,0.4)] backdrop-blur-sm group relative"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-6 h-6 relative z-10" />
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
            </a>
            <a 
              href="https://x.com/shubho_deep_09" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:bg-black/60 hover:border-gray-500/50 transition-all duration-300 transform hover:scale-125 hover:-rotate-6 hover:shadow-[0_8px_25px_rgba(255,255,255,0.15)] backdrop-blur-sm group relative"
              aria-label="Twitter Profile"
            >
              <RiTwitterXLine className="w-6 h-6 relative z-10" />
              <div className="absolute -inset-2 bg-gradient-to-r from-gray-500/20 to-gray-300/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
