import { lazy, Suspense } from "react";
import RevealOnScroll from "../RevealOnScroll";
import SkillCard from "../SkillCard";
import { useCustomIcons } from "../../hooks/useCustomIcons";
import { getSkillsData } from "../../data/skills";
import {
  educationData,
  workExperience,
  achievementsData,
} from "../../data/about";

const GithubContributions = lazy(() => import("../GithubContributions"));

const About = () => {
  const customIcons = useCustomIcons();
  const skillsData = getSkillsData(customIcons);

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
              <SkillCard {...skillsData.web3} />
              <SkillCard {...skillsData.cloud} />
            </div>
            <div className="flex justify-center mt-4 sm:mt-6">
              <div className="w-full max-w-[850px] [&>div]:!max-w-none [&>div]:w-full">
                <SkillCard {...skillsData.devops} />
              </div>
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
              <div className="space-y-3 sm:space-y-4 text-gray-300">
                <div className="border-l-2 border-purple-500/30 pl-3 sm:pl-4">
                  {workExperience.isLookingForOpportunities ? (
                    <div className="text-center py-6 sm:py-8">
                      <div className="text-4xl sm:text-6xl mb-3 sm:mb-4 opacity-50">
                        🚀
                      </div>
                      <h4 className="font-semibold text-base sm:text-lg text-purple-400 mb-2">
                        {workExperience.title}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {workExperience.description}
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm mt-2">
                        {workExperience.details}
                      </p>
                    </div>
                  ) : (
                    <div>
                      {/* Add work experience entries here when available */}
                    </div>
                  )}
                </div>
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
