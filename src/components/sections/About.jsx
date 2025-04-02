import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const skillsData = {
  languages: {
    title: "Languages",
    skills: [
      "C", 
      "C++", 
      "Python", 
      "JavaScript"
    ]
  },
  frontend: {
    title: "Frontend",
    skills: [
      "React", 
      "TailwindCSS"
    ]
  },
  backend: {
    title: "Backend",
    skills: [
      "Node.js", 
      "Express.js",
       "Python", 
       "MongoDB"
      ]
  },
  tools: {
    title: "Tools",
    skills: [
      "Git", 
      "VSCode", 
      "Postman"
    ]
  }
};

const SkillCard = ({ title, skills }) => {
  return (
    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/5 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
          >
            {skill}
          </span>
        ))}
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

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              A full-stack developer passionate about building scalable, efficient solutions. Skilled in frontend technologies with growing backend expertise, I write clean, maintainable code for seamless user experiences. Always learning and exploring new technologies to create impactful applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkillCard {...skillsData.languages} />
                <SkillCard {...skillsData.frontend} />
                <SkillCard {...skillsData.backend} />
                <SkillCard {...skillsData.tools} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🏫</span>
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-500/30 pl-4">
                  <h4 className="font-semibold text-lg text-blue-400">B.Tech in Information Technology</h4>
                  <p className="text-gray-400 text-sm">Govt. Collage of Engineering and Ceramic Technology</p>
                  <p className="text-gray-500 text-sm">2024 - Present</p>
                </div>
                <div className="mt-4">
                  <h5 className="font-medium text-gray-300 mb-2">Relevant Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures and Algorithms", 
                      "Web Development", 
                      "Cloud Computing", 
                      "Software Engineering"
                    ].map((course, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">💼</span>
                Work Experience
              </h3>
              <div className="space-y-4 text-gray-300">
                <div className="border-l-2 border-blue-500/30 pl-4">
                  <h4 className="font-semibold text-lg text-blue-400">
                    {/* role at company */}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {/* time duration */}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {/* description */}
                  </p>
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