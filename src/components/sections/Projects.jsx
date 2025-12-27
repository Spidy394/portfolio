import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import Masonry from "react-masonry-css";
import { useCustomIcons } from "../../hooks/useCustomIcons";
import { getProjects } from "../../data/project";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  const customIcons = useCustomIcons();
  const [hoveredProject, setHoveredProject] = useState(null);
  const [clickedProject, setClickedProject] = useState(null);

  // Masonry breakpoints for responsive layout
  const breakpointColumnsObj = {
    default: 2,
    1024: 2,
    768: 1,
    640: 1,
  };

  // Project data array for better organization
  const projects = getProjects(customIcons);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-24"
      onClick={(e) => {
        // Close preview if clicking outside project cards
        if (e.target === e.currentTarget) {
          setClickedProject(null);
        }
      }}
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid-column"
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isHovered={hoveredProject === project.id}
                isClicked={clickedProject === project.id}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                onClick={() =>
                  setClickedProject((prev) =>
                    prev === project.id ? null : project.id
                  )
                }
              />
            ))}
          </Masonry>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
