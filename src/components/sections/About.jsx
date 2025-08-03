import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiPostman,
  SiFastapi,
  SiDocker,
  SiNextdotjs,
  SiVite,
  SiGithubactions,
  SiVercel,
  SiRender,
  SiRailway,
} from "react-icons/si";
import {
  HiCode,
  HiDesktopComputer,
  HiServer,
  HiCog,
  HiDatabase,
  HiCloud,
} from "react-icons/hi";
import { FaHtml5 } from "react-icons/fa";
import {
  getCardHoverClasses,
  getTechBadgeClasses,
  getColorScheme,
} from "../../utils/colorSchemes";

const skillsData = {
  languages: {
    title: "Languages",
    titleIcon: HiCode,
    skills: [
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      {
        name: "Python",
        icon: () => (
          <img
            src="https://docs.python.org/3/_static/py.svg"
            alt="Python"
            className="w-6 h-6"
          />
        ),
      },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  frontend: {
    title: "Frontend",
    titleIcon: HiDesktopComputer,
    skills: [
      { name: "React", icon: SiReact },
      {
        name: "Vite",
        icon: () => (
          <img src="https://vite.dev/logo.svg" alt="Vite" className="w-6 h-6" />
        ),
      },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TailwindCSS", icon: SiTailwindcss },
    ],
  },
  backend: {
    title: "Backend",
    titleIcon: HiServer,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi },
    ],
  },
  database: {
    title: "Database",
    titleIcon: HiDatabase,
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
      {
        name: "Neon",
        icon: () => (
          <img
            src="https://console.neon.tech/favicon/favicon.ico"
            alt="Neon"
            className="w-6 h-6"
          />
        ),
      },
    ],
  },
  devops: {
    title: "DevOps & Tools",
    titleIcon: HiCog,
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Postman", icon: SiPostman },
    ],
  },
  cloud: {
    title: "Cloud & Hosting",
    titleIcon: HiCloud,
    skills: [
      { name: "Vercel", icon: SiVercel },
      {
        name: "Render",
        icon: () => (
          <img
            src="https://camo.githubusercontent.com/690209768f1f7633fcb72b194e6bb3aae80c381680a660841cec9cc7c638b4fa/68747470733a2f2f736b696c6c732e73797669786f722e636f6d2f6170692f69636f6e733f693d72656e646572"
            alt="Render"
            className="w-6 h-6"
          />
        ),
      },
      {
        name: "Railway",
        icon: () => (
          <img
            src="https://railway.com/favicon-96x96.png"
            alt="Railway"
            className="size-6 rounded-full"
          />
        ),
      },
    ],
  },
};

const SkillCard = ({ title, titleIcon, skills }) => {
  const getColorSchemeName = (title) => {
    switch (title.toLowerCase()) {
      case "languages":
        return "blue";
      case "frontend":
        return "cyan";
      case "backend":
        return "purple";
      case "database":
        return "green";
      case "devops & tools":
        return "orange";
      case "cloud & hosting":
        return "indigo";
      default:
        return "blue";
    }
  };

  const colorSchemeName = getColorSchemeName(title);
  const colorScheme = getColorScheme(colorSchemeName);

  return (
    <div
      className={`rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 border border-white/10 bg-gray-900/30 backdrop-blur-sm ${getCardHoverClasses(
        colorSchemeName
      )} w-fit min-w-[280px] max-w-[400px] flex-1`}
    >
      <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2 whitespace-nowrap">
        {titleIcon &&
          React.createElement(titleIcon, {
            size: 24,
            className: `transition-all duration-300 hover:scale-110 ${colorScheme.text.secondary}`,
          })}
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          const getIconColor = (skillName) => {
            switch (skillName.toLowerCase()) {
              case "c":
                return "text-blue-600";
              case "c++":
                return "text-blue-700";
              case "python":
                return "text-yellow-500";
              case "javascript":
                return "text-yellow-400";
              case "typescript":
                return "text-blue-500";
              case "react":
                return "text-cyan-400";
              case "vite":
                return "text-purple-500";
              case "next.js":
                return "text-white";
              case "tailwindcss":
                return "text-cyan-500";
              case "node.js":
                return "text-green-500";
              case "express.js":
                return "text-gray-300";
              case "fastapi":
                return "text-[#05988A]";
              case "mongodb":
                return "text-green-600";
              case "postgresql":
                return "text-blue-600";
              case "prisma":
                return "text-white";
              case "neon":
                return "text-[#6366f1]";
              case "docker":
                return "text-blue-600";
              case "github actions":
                return "text-white";
              case "postman":
                return "text-orange-400";
              case "vercel":
                return "text-white";
              case "render":
                return "text-[#6B73FF]";
              case "railway":
                return "text-[#6B73FF]";
              default:
                return "text-gray-400";
            }
          };
          return (
            <div key={index} className="relative group">
              <span
                className={`p-2 rounded-full transition-all duration-300 cursor-default flex items-center justify-center ${getTechBadgeClasses(
                  colorSchemeName
                )} hover:scale-110`}
              >
                <IconComponent
                  size={24}
                  className={`transition-all duration-300 ${getIconColor(
                    skill.name
                  )}`}
                />
              </span>
              {/* Tooltip */}
              <div className="absolute -bottom-11 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-20 scale-75 group-hover:scale-100 group-hover:translate-y-1">
                <div
                  className={`bg-gray-900/95 backdrop-blur-md text-white text-sm font-medium px-4 py-2.5 rounded-xl shadow-2xl border ${colorScheme.border.primary} whitespace-nowrap relative overflow-hidden`}
                  style={{
                    boxShadow: `0 2px 8px ${
                      colorScheme.name === "blue"
                        ? "rgba(59,130,246,0.2)"
                        : colorScheme.name === "cyan"
                        ? "rgba(34,211,238,0.2)"
                        : colorScheme.name === "purple"
                        ? "rgba(168,85,247,0.2)"
                        : colorScheme.name === "green"
                        ? "rgba(34,197,94,0.2)"
                        : colorScheme.name === "orange"
                        ? "rgba(249,115,22,0.2)"
                        : colorScheme.name === "indigo"
                        ? "rgba(99,102,241,0.2)"
                        : "rgba(255,255,255,0.1)"
                    }`,
                  }}
                >
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl"></div>

                  {/* Content */}
                  <span className="relative z-10 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent font-semibold">
                    {skill.name}
                  </span>

                  {/* Subtle glow effect */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-50"
                    style={{
                      boxShadow: `inset 0 1px 0 ${
                        colorScheme.name === "blue"
                          ? "rgba(59,130,246,0.3)"
                          : colorScheme.name === "cyan"
                          ? "rgba(34,211,238,0.3)"
                          : colorScheme.name === "purple"
                          ? "rgba(168,85,247,0.3)"
                          : colorScheme.name === "green"
                          ? "rgba(34,197,94,0.3)"
                          : colorScheme.name === "orange"
                          ? "rgba(249,115,22,0.3)"
                          : colorScheme.name === "indigo"
                          ? "rgba(99,102,241,0.3)"
                          : "rgba(255,255,255,0.1)"
                      }`,
                    }}
                  ></div>

                  {/* Arrow */}
                  <div
                    className={`absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-transparent border-b-${colorScheme.primary}/50 drop-shadow-sm`}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About me
          </h2>

          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all duration-300 bg-gray-900/30 backdrop-blur-sm hover:border-blue-500/20 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]">
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              A full-stack developer passionate about building scalable,
              efficient solutions. Skilled in frontend technologies with growing
              backend expertise, I write clean, maintainable code for seamless
              user experiences. Always learning and exploring new technologies
              to create impactful applications.
            </p>{" "}
            <div className="flex flex-wrap justify-center gap-6">
              <SkillCard {...skillsData.languages} />
              <SkillCard {...skillsData.frontend} />
              <SkillCard {...skillsData.backend} />
              <SkillCard {...skillsData.database} />
              <SkillCard {...skillsData.devops} />
              <SkillCard {...skillsData.cloud} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mt-8 items-start">
            <div className="flex-1 p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] bg-gray-900/30 backdrop-blur-sm min-h-fit">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                <span className="text-2xl">🏫</span>
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-500/30 pl-4">
                  <h4 className="font-semibold text-lg text-blue-400">
                    B.Tech in Information Technology
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Govt. Collage of Engineering and Ceramic Technology
                  </p>
                  <p className="text-gray-500 text-sm">2024 - Present</p>
                </div>
                <div className="mt-6">
                  <h5 className="font-medium text-gray-300 mb-3">
                    Relevant Coursework:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures and Algorithms",
                      "Web Development",
                      "Cloud Computing",
                      "Software Engineering",
                    ].map((course, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/10 text-blue-500 py-1.5 px-3 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all cursor-default"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] bg-gray-900/30 backdrop-blur-sm min-h-fit">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                <span className="text-2xl">💼</span>
                Work Experience
              </h3>
              <div className="space-y-4 text-gray-300">
                <div className="border-l-2 border-purple-500/30 pl-4">
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4 opacity-50">🚀</div>
                    <h4 className="font-semibold text-lg text-purple-400 mb-2">
                      Ready for New Opportunities
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Currently seeking internships and entry-level positions
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Open to full-stack development, frontend, or backend roles
                      where I can contribute my skills and continue learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
