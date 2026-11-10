import { lazy, Suspense } from "react";
import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import SkillCard from "../SkillCard";
import { useCustomIcons } from "../../hooks/useCustomIcons";
import { getSkillsData } from "../../data/skills";
import { useIconColor } from "../../hooks/useIconColor";
import {
  educationData,
  workExperience,
  achievementsData,
} from "../../data/about";
import {
  SiTypescript,
  SiNextdotjs,
  SiFastapi,
  SiPostgresql,
  SiPrisma,
  SiGithubactions,
  SiExpress,
  SiBun,
  SiDocker,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiMongodb,
  SiRedis,
  SiNodedotjs,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const GithubContributions = lazy(() => import("../GithubContributions"));

const About = () => {
  const customIcons = useCustomIcons();
  const skillsData = getSkillsData(customIcons);
  const { getIconColor } = useIconColor();

  // Map skill names to their icon components for the work experience section
  const workSkillIcons = {
    TypeScript: SiTypescript,
    "Next.js": SiNextdotjs,
    FastAPI: SiFastapi,
    PostgreSQL: SiPostgresql,
    Prisma: SiPrisma,
    "GitHub Actions": SiGithubactions,
    Puppeteer: customIcons.Puppeteer,
    "Express.js": SiExpress,
    Bun: SiBun,
    Docker: SiDocker,
    Python: customIcons.Python,
    Redis: SiRedis,
    React: SiReact,
    "React Native": SiReact,
    TailwindCSS: SiTailwindcss,
    Expo: customIcons.Expo,
    Supabase: customIcons.Supabase,
    Git: SiGit,
    Firebase: customIcons.Firebase,
    MongoDB: SiMongodb,
    "Node.js": SiNodedotjs,
    GitHub: FaGithub,
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4"
    >
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About me
        </h2>

        <RevealOnScroll>
          <div className="rounded-xl p-4 sm:p-6 md:p-8 border border-white/10 transition-all duration-300 bg-gray-900/30 backdrop-blur-[2px] sm:backdrop-blur-sm hover:border-blue-500/20 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]">
            <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
              A full-stack developer passionate about building scalable,
              efficient solutions. Skilled in frontend technologies with growing
              backend expertise, I write clean, maintainable code for seamless
              user experiences. Always learning and exploring new technologies
              to create impactful applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <SkillCard {...skillsData.languages} />
              <SkillCard {...skillsData.frontend} />
              <SkillCard {...skillsData.backend} />
              <SkillCard {...skillsData.database} />
              <SkillCard {...skillsData.cloud} />
              <SkillCard {...skillsData.devops} />
            </div>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-8">
          <RevealOnScroll>
            <div className="flex-1 p-4 sm:p-6 rounded-xl border border-white/10 transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] bg-gray-900/30 backdrop-blur-[2px] sm:backdrop-blur-sm min-h-fit">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2 text-white">
                <span className="text-xl sm:text-2xl">🏫</span>
                Education
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-blue-500/30 pl-3 sm:pl-4"
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      {edu.logo && (
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg bg-white/5 p-1 flex-shrink-0"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-base sm:text-lg text-blue-400">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-400 text-xs sm:text-sm break-words">
                          {edu.institution}
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm">
                          {edu.details}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="flex-1 p-4 sm:p-6 rounded-xl border border-white/10 transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] bg-gray-900/30 backdrop-blur-[2px] sm:backdrop-blur-sm min-h-fit">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2 text-white">
                <span className="text-xl sm:text-2xl">💼</span>
                Work Experience
              </h3>
              <div className="space-y-5 sm:space-y-6 text-gray-300">
                {workExperience.map((experience) => {
                  const isActive =
                    experience.current ||
                    experience.dates.toLowerCase().includes("present");

                  return (
                    <div
                      key={`${experience.company}-${experience.role}`}
                      className="border-l-2 border-purple-500/30 pl-3 sm:pl-4"
                    >
                      {/* Header row */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2 sm:gap-3">
                          {experience.companyLogo && (
                            <img
                              src={experience.companyLogo}
                              alt={experience.company}
                              className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-lg bg-white/5 p-1 flex-shrink-0"
                            />
                          )}
                          <div className="flex flex-col gap-0.5">
                            <h4 className="font-semibold text-base sm:text-lg text-purple-400 flex items-center gap-2">
                              <span>{experience.role}</span>
                              {isActive && (
                                <span
                                  className="relative flex h-2 w-2"
                                  title="Active Role"
                                >
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                              )}
                            </h4>
                            <p className="text-gray-300 text-sm sm:text-base font-medium">
                              {experience.company}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-0.5 shrink-0">
                          <p className="text-gray-500 text-xs sm:text-sm">{experience.dates}</p>
                          <p className="text-gray-500 text-xs sm:text-sm">{experience.location}</p>
                        </div>
                      </div>

                      {/* Short description */}
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3">
                        {experience.description}
                      </p>

                      {/* Skill icon pills */}
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skillName) => {
                          const IconEntry = workSkillIcons[skillName];
                          // customIcons return factory functions () => <img/> — detect by checking it's a 0-arg function
                          const isCustomIcon =
                            IconEntry &&
                            typeof IconEntry === "function" &&
                            IconEntry.length === 0;
                          const isReactIcon =
                            IconEntry &&
                            typeof IconEntry === "function" &&
                            !isCustomIcon;

                          return (
                            <div key={skillName} className="relative group">
                              {isCustomIcon ? (
                                // Custom icon (img-based, e.g. Python, Firebase)
                                <span className="p-2 rounded-full transition-all duration-300 cursor-default flex items-center justify-center bg-purple-500/10 hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] hover:scale-110">
                                  <IconEntry />
                                </span>
                              ) : isReactIcon ? (
                                // react-icons SVG icon
                                <span className="p-2 rounded-full transition-all duration-300 cursor-default flex items-center justify-center bg-purple-500/10 hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] hover:scale-110">
                                  {React.createElement(IconEntry, {
                                    size: 20,
                                    className: `transition-all duration-300 ${getIconColor(skillName)}`,
                                  })}
                                </span>
                              ) : (
                                // No icon — text pill fallback
                                <span className="px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300 cursor-default bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] border border-purple-500/20">
                                  {skillName}
                                </span>
                              )}
                              {/* Tooltip for icon-based skills */}
                              {(isCustomIcon || isReactIcon) && (
                                <div className="absolute -bottom-11 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-20 scale-75 group-hover:scale-100 group-hover:translate-y-1">
                                  <div
                                    className="bg-gray-900/95 backdrop-blur-md text-white text-sm font-medium px-4 py-2.5 rounded-xl shadow-2xl border border-purple-500/20 whitespace-nowrap relative overflow-hidden"
                                    style={{ boxShadow: "0 2px 8px rgba(168,85,247,0.2)" }}
                                  >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl" />
                                    <span className="relative z-10 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent font-semibold">
                                      {skillName}
                                    </span>
                                    <div
                                      className="absolute inset-0 rounded-xl opacity-50"
                                      style={{ boxShadow: "inset 0 1px 0 rgba(168,85,247,0.3)" }}
                                    />
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-transparent border-b-purple-500/50 drop-shadow-sm" />
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll>
          <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl border border-white/10 transition-all duration-300 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(234,179,8,0.2)] bg-gray-900/30 backdrop-blur-[2px] sm:backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2 text-white">
              <span className="text-xl sm:text-2xl">🏆</span>
              Achievements & Involvement
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {achievementsData.map((achievement, index) => (
                <div
                  key={index}
                  className="border-l-2 border-yellow-500/30 pl-3 sm:pl-4 py-2"
                >
                  <h4 className="font-semibold text-yellow-400 mb-1 flex items-center gap-2 text-sm sm:text-base">
                    {customIcons[achievement.icon]()}
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* GitHub Contributions Widget */}
        <RevealOnScroll>
          <Suspense
            fallback={
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl border border-white/10 bg-gray-900/30 backdrop-blur-[2px] sm:backdrop-blur-sm">
                <div className="flex items-center justify-center py-8">
                  <div className="text-center">
                    <div className="mx-auto mb-3 h-6 w-6 sm:h-8 sm:w-8 animate-spin rounded-full border-2 border-green-500/30 border-t-green-500"></div>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Loading contributions...
                    </p>
                  </div>
                </div>
              </div>
            }
          >
            <GithubContributions />
          </Suspense>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default About;
