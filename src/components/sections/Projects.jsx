import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import { 
  SiPython, 
  SiJavascript, 
  SiReact, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb,
  SiSocketdotio
} from "react-icons/si";
import { HiMicrophone, HiChatBubbleLeftRight } from "react-icons/hi2";
import { RiRobot2Fill } from "react-icons/ri";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { BsLightning } from "react-icons/bs";

const Projects = () => {  const getIconColor = (techName) => {
    switch(techName.toLowerCase()) {
      case 'python': return 'text-yellow-500';
      case 'gemini-api': return 'text-purple-400';
      case 'uv': return 'text-[#D7FF64]';
      case 'javascript': return 'text-yellow-400';
      case 'react': return 'text-cyan-400';
      case 'tailwindcss': return 'text-cyan-500';
      case 'node.js': return 'text-green-500';
      case 'express.js': return 'text-gray-300';
      case 'socket.io': return 'text-white';
      case 'mongodb': return 'text-green-600';
      default: return 'text-gray-400';
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* project-1 */}
            <div className="flex-1 p-6 rounded-lg border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300 bg-gray-900/30 backdrop-blur-sm min-h-fit">              <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
                <HiMicrophone className="text-blue-400 text-2xl" />
                AI Voice Companion
              </h3>              <p className="text-gray-400 mb-6 leading-relaxed">
                An AI-powered virtual companion designed to engage users in natural, voice-based conversations. Listens to user speech, transcribes it to text, and responds with contextually appropriate replies in a warm, expressive voice. 
              </p>

              {/* stack */}
              <div className="flex flex-wrap gap-2 mb-6">                {[
                  { name: "Python", icon: SiPython },
                  { name: "Gemini-API", icon: RiRobot2Fill },
                  { name: "uv", icon: BsLightning }
                ].map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <div key={index} className="relative group">
                      <span className="bg-blue-500/10 text-blue-500 py-1.5 px-3 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-default flex items-center gap-1.5">
                        {IconComponent && (
                          <IconComponent 
                            size={16} 
                            className={`${getIconColor(tech.name)}`}
                          />
                        )}
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>              <div className="mt-auto">
                <a
                  href="https://github.com/Spidy394/AI-GF.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 transition-all duration-300 font-medium px-4 py-2.5 rounded-lg border border-blue-500/20 hover:border-blue-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] group"
                >
                  <FiGithub className="text-lg group-hover:scale-110 transition-transform duration-300" />
                  <span>View Source</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>

            {/* project-2 */}
            <div className="flex-1 p-6 rounded-lg border border-white/10 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)] transition-all duration-300 bg-gray-900/30 backdrop-blur-sm min-h-fit">              <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
                <HiChatBubbleLeftRight className="text-cyan-400 text-2xl" />
                Konvo — Conversations. Simplified
              </h3>              <p className="text-gray-400 mb-6 leading-relaxed">
                A modern full-stack real-time chat application developed to demonstrate proficiency in building scalable communication platforms. Leveraging React 19 for the frontend and Node.js/Express for the backend, the application features WebSocket-powered messaging via Socket.io, JWT authentication, and MongoDB-based message persistence.
              </p>

              {/* stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { name: "JavaScript", icon: SiJavascript },
                  { name: "React", icon: SiReact },
                  { name: "TailwindCSS", icon: SiTailwindcss },
                  { name: "Node.js", icon: SiNodedotjs },
                  { name: "Express.js", icon: SiExpress },
                  { name: "Socket.io", icon: SiSocketdotio },
                  { name: "MongoDB", icon: SiMongodb }
                ].map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <div key={index} className="relative group">
                      <span className="bg-cyan-500/10 text-cyan-400 py-1.5 px-3 rounded-full text-sm font-medium hover:bg-cyan-500/20 hover:shadow-[0_2px_8px_rgba(34,211,238,0.1)] transition-all cursor-default flex items-center gap-1.5">
                        {IconComponent && (
                          <IconComponent 
                            size={16} 
                            className={`${getIconColor(tech.name)}`}
                          />
                        )}
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>              <div className="mt-auto">
                <a
                  href="https://konvo-tme9.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/20 transition-all duration-300 font-medium px-4 py-2.5 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)] group"
                >
                  <FiExternalLink className="text-lg group-hover:scale-110 transition-transform duration-300" />
                  <span>Live Demo</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
