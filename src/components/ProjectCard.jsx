import { motion, AnimatePresence } from "motion/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
  getCardHoverClasses,
  getTechBadgeClasses,
  getButtonClasses,
} from "../utils/colorSchemes";
import { useIconColor } from "../hooks/useIconColor";

const ProjectCard = ({
  project,
  isHovered,
  isClicked,
  onHoverStart,
  onHoverEnd,
  onClick,
}) => {
  const { getIconColor } = useIconColor();
  const showPreview = isHovered || isClicked;

  return (
    <motion.div
      key={project.id}
      className={`project-card p-4 sm:p-6 lg:p-8 rounded-lg border border-white/10 transition-all duration-300 bg-gray-900/30 backdrop-blur-sm break-inside-avoid cursor-pointer ${getCardHoverClasses(
        project.colorScheme
      )}`}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      onClick={onClick}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      layout
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Project Title */}
      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white flex items-center gap-2">
        {typeof project.icon === "function" ? (
          <div
            className={`${project.iconColor} flex items-center justify-center`}
          >
            <project.icon />
          </div>
        ) : (
          <project.icon
            className={`${project.iconColor} text-xl sm:text-2xl`}
          />
        )}
        <span className="flex-1 text-sm sm:text-lg lg:text-xl">
          {project.title}
        </span>
      </h3>

      {/* Expandable Preview Section */}
      <AnimatePresence>
        {showPreview && (
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
                className="w-full h-32 sm:h-36 lg:h-40 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent rounded-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Description */}
      <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
        {project.technologies.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <div key={index} className="relative group">
              <span
                className={`py-1.5 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm font-medium transition-all cursor-default flex items-center gap-1.5 sm:gap-2 ${getTechBadgeClasses(
                  project.colorScheme
                )}`}
              >
                {IconComponent && (
                  <IconComponent
                    size={14}
                    className={`sm:w-4 sm:h-4 ${getIconColor(tech.name)}`}
                  />
                )}
                <span className="text-xs sm:text-sm">{tech.name}</span>
              </span>
            </div>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="mt-auto">
        {project.type === "both" ? (
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 transition-all duration-300 font-medium px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg group text-sm sm:text-base ${getButtonClasses(
                project.colorScheme
              )}`}
            >
              <FiGithub className="text-base sm:text-lg group-hover:scale-110 transition-transform duration-300" />
              <span>Source</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 transition-all duration-300 font-medium px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg group text-sm sm:text-base ${getButtonClasses(
                project.colorScheme
              )}`}
            >
              <FiExternalLink className="text-base sm:text-lg group-hover:scale-110 transition-transform duration-300" />
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
            className={`inline-flex items-center justify-center gap-2 transition-all duration-300 font-medium px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg group text-sm sm:text-base w-full sm:w-auto ${getButtonClasses(
              project.colorScheme
            )}`}
          >
            {project.type === "github" ? (
              <FiGithub className="text-base sm:text-lg group-hover:scale-110 transition-transform duration-300" />
            ) : (
              <FiExternalLink className="text-base sm:text-lg group-hover:scale-110 transition-transform duration-300" />
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

export default ProjectCard;
