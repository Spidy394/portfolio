import RevealOnScroll from "../RevealOnScroll";
import SkillCard from "../SkillCard";
import { useCustomIcons } from "../../hooks/useCustomIcons";
import { getSkillsData } from "../../data/skills";

const About = () => {
  const customIcons = useCustomIcons();
  const skillsData = getSkillsData(customIcons);

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
              <SkillCard {...skillsData.web3} />
              <SkillCard {...skillsData.cloud} />
            </div>
            <div className="flex justify-center mt-6">
              <div className="w-full max-w-[850px] [&>div]:!max-w-none [&>div]:w-full">
                <SkillCard {...skillsData.devops} />
              </div>
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
                    Higher Secondary (Class XII)
                  </h4>
                  <p className="text-gray-400 text-sm">Baruipur High School</p>
                  <p className="text-gray-500 text-sm">
                    Passed 2023 • Science and Computer
                  </p>
                </div>
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

          <div className="mt-8 p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all duration-300 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] bg-gray-900/30 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
              <span className="text-2xl">🏆</span>
              Achievements & Involvement
            </h3>
            <div className="space-y-4">
              <div className="border-l-2 border-green-500/30 pl-4 py-2">
                <h4 className="font-semibold text-green-400 mb-1 flex items-center gap-2">
                  {customIcons.GoogleAmbassador()}
                  Google Student Ambassador
                </h4>
                <p className="text-gray-400 text-sm">
                  Representing Google Gemini on campus
                </p>
              </div>
              <div className="border-l-2 border-green-500/30 pl-4 py-2">
                <h4 className="font-semibold text-green-400 mb-1 flex items-center gap-2">
                  {customIcons.GDG()}
                  Web3 Mentorship
                </h4>
                <p className="text-gray-400 text-sm">
                  GDGoC GCECT • Mentoring students on Web3 technologies
                </p>
              </div>
              <div className="border-l-2 border-green-500/30 pl-4 py-2">
                <h4 className="font-semibold text-green-400 mb-1 flex items-center gap-2">
                  {customIcons.Hacktoberfest()}
                  Hacktoberfest'25 - Supercontributor
                </h4>
                <p className="text-gray-400 text-sm">
                  Significant contributions to open-source projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
