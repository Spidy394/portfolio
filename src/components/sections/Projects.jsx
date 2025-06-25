import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import Masonry from "react-masonry-css";
import { 
  SiJavascript, 
  SiReact, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb,
  SiSocketdotio,
  SiShadcnui,

} from "react-icons/si";
import { HiMicrophone, HiChatBubbleLeftRight } from "react-icons/hi2";
import { RiRobot2Fill, RiSpeakLine, RiNextjsFill, RiGeminiFill } from "react-icons/ri";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { BsLightning } from "react-icons/bs";

const Projects = () => {  // Masonry breakpoints for responsive layout
  const breakpointColumnsObj = {
    default: 2,
    768: 1
  };
  const getIconColor = (techName) => {
    switch(techName.toLowerCase()) {
      case 'python': return 'text-yellow-500';
      case 'gemini-api': return 'text-purple-400';
      case 'gemini api': return 'text-purple-400';
      case 'uv': return 'text-[#D7FF64]';
      case 'javascript': return 'text-yellow-400';
      case 'react': return 'text-cyan-400';
      case 'next.js': return 'text-gray-100';
      case 'tailwindcss': return 'text-cyan-500';
      case 'shadcn ui': return 'text-gray-100';
      case 'node.js': return 'text-green-500';
      case 'express.js': return 'text-gray-300';
      case 'socket.io': return 'text-white';
      case 'civic auth': return 'text-blue-400';
      case 'mongodb': return 'text-green-600';
      case 'vite': return 'text-purple-500';
      case 'html': return 'text-orange-500';
      case 'css': return 'text-blue-500';
      default: return 'text-gray-400';
    }
  };  // Project data array for better organization
  const projects = [
    {
      id: 1,
      title: "AI Voice Companion",
      icon: HiMicrophone,
      iconColor: "text-blue-400",
      description: "An AI-powered virtual companion designed to engage users in natural, voice-based conversations. Listens to user speech, transcribes it to text, and responds with contextually appropriate replies in a warm, expressive voice.",      technologies: [
        { name: "Python", icon: () => <img src="https://docs.python.org/3/_static/py.svg" alt="Python" className="w-4 h-4" /> },
        { name: "Gemini API", icon: () => <img src="https://brandlogo.org/wp-content/uploads/2024/06/Gemini-Icon.png.webp" alt="Gemini API" className="w-5 h-5" />},
        { name: "uv", icon: BsLightning }
      ],
      colorScheme: "blue",
      githubUrl: "https://github.com/Spidy394/AI-GF.git",
      type: "github"
    },
    {
      id: 2,
      title: "Konvo — Conversations. Simplified",
      icon: HiChatBubbleLeftRight,
      iconColor: "text-cyan-400",
      description: "A modern full-stack real-time chat application developed to demonstrate proficiency in building scalable communication platforms. Leveraging React 19 for the frontend and Node.js/Express for the backend, the application features WebSocket-powered messaging via Socket.io, JWT authentication, and MongoDB-based message persistence.",
      technologies: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "React", icon: SiReact },
        { name: "TailwindCSS", icon: SiTailwindcss },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "Socket.io", icon: SiSocketdotio },
        { name: "MongoDB", icon: SiMongodb }
      ],
      colorScheme: "cyan",
      githubUrl: "https://github.com/Spidy394/Konvo.git",
      liveUrl: "https://konvo-tme9.onrender.com/",
      type: "both"
    },    {
      id: 3,
      title: "AmarVoice - Raise It. Share It. Amplify It",
      icon: () => <img src="https://amar-voice.vercel.app/logo.png" alt="AmarVoice" className="w-10 h-8 rounded" />,
      iconColor: "text-purple-400",
      description: "A full-stack platform built to empower the people with transparent, AI-driven complaint submission and resolution. Users can raise voice or text-based complaints, track them in real time, and engage with the community. Features include Gemini-powered categorization, ai powered transcription and translation.",
      technologies: [
        { name: "Next.js", icon: RiNextjsFill },
        { name: "React", icon: SiReact },
        { name: "TailwindCSS", icon: SiTailwindcss },
        { name: "Shadcn UI", icon: SiShadcnui  },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "Socket.io", icon: SiSocketdotio },        { name: "Civic Auth", icon: () => <img src="https://auth.civic.com/content/a964adf0-66cb-45eb-9cff-e8b8a2b43ed7/862fb34a-63b0-47d5-bd16-a2d6c6db0b0a.svg" alt="Civic Auth" className="w-4 h-4" /> },
        { name: "Gemini API", icon: () => <img src="https://brandlogo.org/wp-content/uploads/2024/06/Gemini-Icon.png.webp" alt="Gemini API" className="w-5 h-5" /> },
        { name: "MongoDB", icon: SiMongodb },
      ],
      colorScheme: "purple",
      githubUrl: "https://github.com/Spidy394/AmarVoice.git",
      liveUrl: "https://amar-voice.vercel.app/",      type: "both"
    },
  ];const renderProjectCard = (project) => (
    <div 
      key={project.id}
      className={`project-card p-8 rounded-lg border border-white/10 hover:-translate-y-1 transition-all duration-300 bg-gray-900/30 backdrop-blur-sm break-inside-avoid ${
        project.colorScheme === 'blue' 
          ? 'hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]'
          : project.colorScheme === 'cyan'
          ? 'hover:border-cyan-500/30 hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)]'
          : project.colorScheme === 'purple'
          ? 'hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)]'
          : 'hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)]'
      }`}
    >      <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
        {typeof project.icon === 'function' ? (
          <div className={`${project.iconColor} flex items-center justify-center`}>
            <project.icon />
          </div>
        ) : (
          <project.icon className={`${project.iconColor} text-2xl`} />
        )}
        {project.title}
      </h3>
      
      <p className="text-gray-400 mb-8 leading-relaxed">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-3 mb-8">
        {project.technologies.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <div key={index} className="relative group">
              <span className={`py-2 px-4 rounded-full text-sm font-medium transition-all cursor-default flex items-center gap-2 ${
                project.colorScheme === 'blue'
                  ? 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]'
                  : project.colorScheme === 'cyan'
                  ? 'bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_2px_8px_rgba(34,211,238,0.1)]'
                  : project.colorScheme === 'purple'
                  ? 'bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(168,85,247,0.1)]'
                  : 'bg-green-500/10 text-green-400 hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(34,197,94,0.1)]'
              }`}>
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
      </div>

      {/* Action Button */}
      <div className="mt-auto">
        {project.type === 'both' ? (
          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 transition-all duration-300 font-medium px-4 py-2.5 rounded-lg group ${
                project.colorScheme === 'blue'
                  ? 'bg-blue-500/10 text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]'
                  : project.colorScheme === 'cyan'
                  ? 'bg-cyan-500/10 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/20 border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)]'
                  : project.colorScheme === 'purple'
                  ? 'bg-purple-500/10 text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)]'
                  : 'bg-green-500/10 text-green-400 hover:text-green-300 hover:bg-green-500/20 border border-green-500/20 hover:border-green-500/40 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)]'
              }`}
            >
              <FiGithub className="text-lg group-hover:scale-110 transition-transform duration-300" />
              <span>Source</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 transition-all duration-300 font-medium px-4 py-2.5 rounded-lg group ${
                project.colorScheme === 'blue'
                  ? 'bg-blue-500/10 text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]'
                  : project.colorScheme === 'cyan'
                  ? 'bg-cyan-500/10 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/20 border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)]'
                  : project.colorScheme === 'purple'
                  ? 'bg-purple-500/10 text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)]'
                  : 'bg-green-500/10 text-green-400 hover:text-green-300 hover:bg-green-500/20 border border-green-500/20 hover:border-green-500/40 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)]'
              }`}
            >
              <FiExternalLink className="text-lg group-hover:scale-110 transition-transform duration-300" />
              <span>Live Demo</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        ) : (
          <a
            href={project.type === 'github' ? project.githubUrl : project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 transition-all duration-300 font-medium px-4 py-2.5 rounded-lg group ${
              project.colorScheme === 'blue'
                ? 'bg-blue-500/10 text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]'
                : project.colorScheme === 'cyan'
                ? 'bg-cyan-500/10 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/20 border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)]'
                : project.colorScheme === 'purple'
                ? 'bg-purple-500/10 text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)]'
                : 'bg-green-500/10 text-green-400 hover:text-green-300 hover:bg-green-500/20 border border-green-500/20 hover:border-green-500/40 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)]'
            }`}
          >
            {project.type === 'github' ? (
              <FiGithub className="text-lg group-hover:scale-110 transition-transform duration-300" />
            ) : (
              <FiExternalLink className="text-lg group-hover:scale-110 transition-transform duration-300" />
            )}
            <span>{project.type === 'github' ? 'View Source' : 'Live Demo'}</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        )}
      </div>
    </div>
  );return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-24"
    >      <RevealOnScroll>
        <div className="max-w-5xl xl:max-w-6xl mx-auto px-6 lg:px-8 xl:px-12">
          <h2 className="text-3xl font-bold mb-16 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
            <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid-column"
          >
            {projects.map(project => renderProjectCard(project))}
          </Masonry>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
