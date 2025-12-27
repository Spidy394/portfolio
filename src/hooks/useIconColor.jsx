export const useIconColor = () => {
  const getIconColor = (techName) => {
    switch (techName.toLowerCase()) {
      // Languages
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

      // Frontend Frameworks & Libraries
      case "react":
        return "text-cyan-400";
      case "vite":
        return "text-purple-500";
      case "next.js":
        return "text-white";
      case "tailwindcss":
        return "text-cyan-500";
      case "shadcn ui":
        return "text-gray-100";

      // Backend Frameworks & Runtime
      case "node.js":
        return "text-green-500";
      case "bun":
        return "text-[#fbf0df]";
      case "express.js":
        return "text-gray-300";
      case "fastapi":
        return "text-[#05988A]";
      case "socket.io":
        return "text-white";

      // Databases
      case "firebase":
        return "text-orange-500";
      case "mongodb":
        return "text-green-600";
      case "postgresql":
        return "text-blue-600";
      case "prisma":
        return "text-white";
      case "redis":
        return "text-red-500";
      case "neon":
        return "text-[#6366f1]";

      // DevOps & Tools
      case "git":
        return "text-orange-500";
      case "github":
        return "text-white";
      case "npm":
        return "text-red-600";
      case "pnpm":
        return "text-yellow-500";
      case "yarn":
        return "text-blue-400";
      case "docker":
        return "text-blue-600";
      case "github actions":
        return "text-white";
      case "postman":
        return "text-orange-400";
      case "yaml":
        return "text-red-400";
      case "uv":
        return "text-[#D7FF64]";

      // Cloud & Hosting
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

  return { getIconColor };
};
