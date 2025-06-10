import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
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
            <div className="flex-1 p-6 rounded-lg border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300 bg-gray-900/30 backdrop-blur-sm min-h-fit">
              <h3 className="text-xl font-bold mb-3 text-white">
                {/* project title */} AI Voice Companion.
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {/* description */} An AI-powered virtual companion designed to engage users in natural, voice-based conversations. Listens to user speech, transcribes it to text, and responds with contextually appropriate replies in a warm, expressive voice. 
              </p>

              {/* stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Python", "Gemini-API", "uv"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1.5 px-3 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <a
                  href="https://github.com/Spidy394/AI-GF.git"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  GitHub →
                </a>
              </div>
            </div>

            {/* project-2 */}
            <div className="flex-1 p-6 rounded-lg border border-white/10 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)] transition-all duration-300 bg-gray-900/30 backdrop-blur-sm min-h-fit">
              <h3 className="text-xl font-bold mb-3 text-white">
                {/* project title */} Konvo — Conversations. Simplified..
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A modern full-stack real-time chat application developed to demonstrate proficiency in building scalable communication platforms. Leveraging React 19 for the frontend and Node.js/Express for the backend, the application features WebSocket-powered messaging via Socket.io, JWT authentication, and MongoDB-based message persistence.
              </p>

              {/* stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["JavaScript", "React", "TailwindCSS", "Node.js", "Express.js", "Socket.io", "MongoDB" ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-cyan-500/10 text-cyan-400 py-1.5 px-3 rounded-full text-sm font-medium hover:bg-cyan-500/20 hover:shadow-[0_2px_8px_rgba(34,211,238,0.1)] transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <a
                  href="https://konvo-tme9.onrender.com/"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  View →
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
