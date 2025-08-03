import React, { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import Masonry from "react-masonry-css";
import { motion, AnimatePresence } from "motion/react";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";
import { HiMicrophone, HiChatBubbleLeftRight } from "react-icons/hi2";
import { RiNextjsFill } from "react-icons/ri";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { BsLightning } from "react-icons/bs";
import {
  getCardHoverClasses,
  getTechBadgeClasses,
  getButtonClasses,
} from "../../utils/colorSchemes";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Masonry breakpoints for responsive layout
  const breakpointColumnsObj = {
    default: 2,
    768: 1,
  };
  const getIconColor = (techName) => {
    switch (techName.toLowerCase()) {
      case "uv":
        return "text-[#D7FF64]";
      case "javascript":
        return "text-yellow-400";
      case "typescript":
        return "text-blue-500";
      case "react":
        return "text-cyan-400";
      case "next.js":
        return "text-gray-100";
      case "tailwindcss":
        return "text-cyan-500";
      case "shadcn ui":
        return "text-gray-100";
      case "node.js":
        return "text-green-500";
      case "express.js":
        return "text-gray-300";
      case "socket.io":
        return "text-white";
      case "mongodb":
        return "text-green-600";
      default:
        return "text-gray-400";
    }
  };

  // Project data array for better organization
  const projects = [
    {
      id: 1,
      title: "AI Voice Companion",
      icon: HiMicrophone,
      iconColor: "text-blue-400",
      description:
        "An AI-powered virtual companion designed to engage users in natural, voice-based conversations. Listens to user speech, transcribes it to text, and responds with contextually appropriate replies in a warm, expressive voice.",
      previewImage: "/portfolio/rupa-review.png",
      technologies: [
        {
          name: "Python",
          icon: () => (
            <img
              src="https://docs.python.org/3/_static/py.svg"
              alt="Python"
              className="w-4 h-4"
            />
          ),
        },
        {
          name: "Gemini API",
          icon: () => (
            <img
              src="https://brandlogo.org/wp-content/uploads/2024/06/Gemini-Icon.png.webp"
              alt="Gemini API"
              className="w-5 h-5"
            />
          ),
        },
        { name: "uv", icon: BsLightning },
      ],
      colorScheme: "indigo",
      githubUrl: "https://github.com/Spidy394/AI-GF.git",
      type: "github",
    },
    {
      id: 2,
      title: "Konvo — Conversations. Simplified",
      icon: HiChatBubbleLeftRight,
      iconColor: "text-cyan-400",
      description:
        "A modern full-stack real-time chat application developed to demonstrate proficiency in building scalable communication platforms. Leveraging React 19 for the frontend and Node.js/Express for the backend, the application features WebSocket-powered messaging via Socket.io, JWT authentication, and MongoDB-based message persistence.",
      previewImage: "/portfolio/konvo-preview.png",
      technologies: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "React", icon: SiReact },
        { name: "TailwindCSS", icon: SiTailwindcss },
        {
          name: "daisyUI",
          icon: () => (
            <img
              src="https://img.daisyui.com/images/daisyui/mark-rotating.svg"
              alt="daisyUI"
              className="size-4"
            />
          ),
        },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "Socket.io", icon: SiSocketdotio },
        { name: "MongoDB", icon: SiMongodb },
      ],
      colorScheme: "teal",
      githubUrl: "https://github.com/Spidy394/Konvo.git",
      liveUrl: "https://konvo-tme9.onrender.com/",
      type: "both",
    },
    {
      id: 3,
      title: "AmarVoice - Raise It. Share It. Amplify It",
      icon: () => (
        <img
          src="https://amar-voice.vercel.app/logo.png"
          alt="AmarVoice"
          className="w-10 h-8 rounded"
        />
      ),
      iconColor: "text-purple-400",
      description:
        "A full-stack platform built to empower the people with transparent, AI-driven complaint submission and resolution. Users can raise voice or text-based complaints, track them in real time, and engage with the community. Features include Gemini-powered categorization, ai powered transcription and translation.",
      previewImage: "/portfolio/amarVoice-preview.png",
      technologies: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "Next.js", icon: RiNextjsFill },
        { name: "React", icon: SiReact },
        { name: "TailwindCSS", icon: SiTailwindcss },
        { name: "Shadcn UI", icon: SiShadcnui },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "Socket.io", icon: SiSocketdotio },
        {
          name: "Civic Auth",
          icon: () => (
            <img
              src="https://auth.civic.com/content/a964adf0-66cb-45eb-9cff-e8b8a2b43ed7/862fb34a-63b0-47d5-bd16-a2d6c6db0b0a.svg"
              alt="Civic Auth"
              className="w-4 h-4"
            />
          ),
        },
        {
          name: "Gemini API",
          icon: () => (
            <img
              src="https://brandlogo.org/wp-content/uploads/2024/06/Gemini-Icon.png.webp"
              alt="Gemini API"
              className="w-5 h-5"
            />
          ),
        },
        { name: "MongoDB", icon: SiMongodb },
      ],
      colorScheme: "pink",
      githubUrl: "https://github.com/Spidy394/AmarVoice.git",
      liveUrl: "https://amar-voice.vercel.app/",
      type: "both",
    },
    {
      id: 4,
      title: "Nexora - AI-Powered Content Creation",
      icon: () => (
        <img
          src="https://nexora-delta-three.vercel.app/favicon.svg"
          alt="AmarVoice"
          className="w-10 h-8 rounded"
        />
      ),
      iconColor: "text-purple-400",
      description:
        "A comprehensive AI content creation platform designed to revolutionize your workflow. Features include AI article writing, blog title generation, image creation, background removal, object removal, and resume reviewing. Built with cutting-edge AI technology to help creators produce high-quality content faster and more efficiently.",
      previewImage: "/portfolio/nexora-preview.png",
      technologies: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "React", icon: SiReact },
        { name: "TailwindCSS", icon: SiTailwindcss },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        {
          name: "Clerk",
          icon: () => (
            <img
              src="https://cdn.brandfetch.io/idGrtLvNcI/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"
              alt="clerk"
              className="size-5 rounded-full"
            />
          ),
        },
        {
          name: "Gemini API",
          icon: () => (
            <img
              src="https://brandlogo.org/wp-content/uploads/2024/06/Gemini-Icon.png.webp"
              alt="Gemini API"
              className="w-5 h-5"
            />
          ),
        },
        {
          name: "Neon",
          icon: () => (
            <img
              src="https://console.neon.tech/favicon/favicon.ico"
              alt="neon"
              className="w-4 h-4"
            />
          ),
        },
        {
          name: "Clipdrop APIs",
          icon: () => (
            <img
              src="https://static.clipdrop.co/web/apis/company-logos/favicon.ico"
              alt="Clipdrop APIs"
              className="w-4 h-4"
            />
          ),
        },
        {
          name: "Cloudinary",
          icon: () => (
            <img
              src="https://cloudinary-res.cloudinary.com/image/upload/docsite/brand-assets/cloudinary_favicon_apple-touch-icon-57x57.png"
              alt="Cloudinary"
              className="w-4 h-4"
            />
          ),
        },
      ],
      colorScheme: "emerald",
      githubUrl: "https://github.com/Spidy394/Nexora",
      liveUrl: "https://nexora-delta-three.vercel.app/",
      type: "both",
    },
    {
      id: 5,
      title: "JobFit - Smart Resume Optimization",
      icon: () => (
        <img
          src="https://job-fit-tau.vercel.app/favicon.ico"
          alt="JobFit"
          className="size-8 rounded"
        />
      ),
      iconColor: "text-red-400",
      description:
        "An AI-powered platform that helps job seekers optimize their resumes for specific job postings. Features intelligent keyword matching, ATS compatibility scoring, personalized suggestions, and resume formatting tools. Built to bridge the gap between candidate qualifications and employer expectations using advanced AI algorithms.",
      previewImage: "/portfolio/JobFit-preview.png",
      technologies: [
        { name: "TypeScript", icon: SiTypescript },
        { name: "React", icon: SiReact },
        {
          name: "React Router",
          icon: () => (
            <img
              src="https://reactrouter.com/favicon-dark.png"
              alt="react-router"
              className="size-5"
            />
          ),
        },
        { name: "TailwindCSS", icon: SiTailwindcss },
        {
          name: "Puter.js",
          icon: () => (
            <img
              src="https://developer.puter.com/favicons/favicon-32x32.png"
              alt="puterjs"
              className="size-5"
            />
          ),
        },
      ],
      colorScheme: "red",
      githubUrl: "https://github.com/Spidy394/JobFit",
      liveUrl: "https://job-fit-tau.vercel.app/",
      type: "both",
    },
  ];
  const renderProjectCard = (project) => {
    const isHovered = hoveredProject === project.id;
    
    return (
      <motion.div
        key={project.id}
        className={`project-card p-8 rounded-lg border border-white/10 transition-all duration-300 bg-gray-900/30 backdrop-blur-sm break-inside-avoid ${getCardHoverClasses(
          project.colorScheme
        )}`}
        onHoverStart={() => setHoveredProject(project.id)}
        onHoverEnd={() => setHoveredProject(null)}
        whileHover={{ y: -8 }}
        layout
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Project Title */}
        <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
          {typeof project.icon === "function" ? (
            <div
              className={`${project.iconColor} flex items-center justify-center`}
            >
              <project.icon />
            </div>
          ) : (
            <project.icon className={`${project.iconColor} text-2xl`} />
          )}
          {project.title}
        </h3>

        {/* Expandable Preview Section */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden mb-6"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="relative rounded-lg overflow-hidden"
              >
                <img
                  src={project.previewImage}
                  alt={`${project.title} preview`}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent rounded-lg" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Description */}
        <p className="text-gray-400 mb-8 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div key={index} className="relative group">
                <span
                  className={`py-2 px-4 rounded-full text-sm font-medium transition-all cursor-default flex items-center gap-2 ${getTechBadgeClasses(
                    project.colorScheme
                  )}`}
                >
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

        {/* Action Buttons */}
        <div className="mt-auto">
          {project.type === "both" ? (
            <div className="flex gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 transition-all duration-300 font-medium px-4 py-2.5 rounded-lg group ${getButtonClasses(
                  project.colorScheme
                )}`}
              >
                <FiGithub className="text-lg group-hover:scale-110 transition-transform duration-300" />
                <span>Source</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 transition-all duration-300 font-medium px-4 py-2.5 rounded-lg group ${getButtonClasses(
                  project.colorScheme
                )}`}
              >
                <FiExternalLink className="text-lg group-hover:scale-110 transition-transform duration-300" />
                <span>Live Demo</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
          ) : (
            <a
              href={
                project.type === "github" ? project.githubUrl : project.liveUrl
              }
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 transition-all duration-300 font-medium px-4 py-2.5 rounded-lg group ${getButtonClasses(
                project.colorScheme
              )}`}
            >
              {project.type === "github" ? (
                <FiGithub className="text-lg group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <FiExternalLink className="text-lg group-hover:scale-110 transition-transform duration-300" />
              )}
              <span>
                {project.type === "github" ? "View Source" : "Live Demo"}
              </span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          )}
        </div>
      </motion.div>
    );
  };
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-24"
    >
      {" "}
      <RevealOnScroll>
        <div className="max-w-5xl xl:max-w-6xl mx-auto px-6 lg:px-8 xl:px-12">
          <h2 className="text-3xl font-bold mb-16 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid-column"
          >
            {projects.map((project) => renderProjectCard(project))}
          </Masonry>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
