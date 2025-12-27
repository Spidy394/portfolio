import React from "react";
import {
  getCardHoverClasses,
  getTechBadgeClasses,
  getColorScheme,
} from "../utils/colorSchemes";
import { useIconColor } from "../hooks/useIconColor";

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
  const { getIconColor } = useIconColor();

  return (
    <div
      className={`rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 border border-white/10 bg-gray-900/30 backdrop-blur-sm ${getCardHoverClasses(
        colorSchemeName
      )} w-fit min-w-[280px] max-w-[400px] flex-1 h-fit`}
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

export default SkillCard;
