export const useCustomIcons = () => {
  const createIcon =
    (src, alt, className = "w-6 h-6") =>
    () =>
      <img src={src} alt={alt} className={className} />;

  const createReactIcon =
    (IconComponent, className = "w-6 h-6") =>
    () =>
      <IconComponent className={className} />;

  return {
    Python: createIcon("https://docs.python.org/3/_static/py.svg", "Python"),
    Vite: createIcon("https://vite.dev/logo.svg", "Vite"),
    Firebase: createIcon(
      "https://www.gstatic.com/devrel-devsite/prod/ve08add287a6b4bdf8961ab8a1be50bf551be3816cdd70b7cc934114ff3ad5f10/firebase/images/touchicon-180.png",
      "Firebase"
    ),
    Neon: createIcon("https://console.neon.tech/favicon/favicon.ico", "Neon"),
    VSCode: createIcon("https://code.visualstudio.com/favicon.ico", "VS Code"),
    Pnpm: createIcon("https://pnpm.io/img/favicon.png", "pnpm"),
    Yarn: createIcon(
      "https://avatars.githubusercontent.com/u/50545563?v=4",
      "yarn",
      "w-6 h-6 rounded-full"
    ),
    YAML: createIcon(
      "https://res.cloudinary.com/dylcifzqb/image/upload/v1766835170/yaml_zvi5gs.png",
      "YAML"
    ),
    Vercel: (SiVercel) => createReactIcon(SiVercel, "w-6 h-6 text-white"),
    Render: createIcon(
      "https://render.com/icon.svg?e6fbdd2e217c0064",
      "Render"
    ),
    Railway: createIcon(
      "https://railway.com/favicon-96x96.png",
      "Railway",
      "size-6 rounded-full"
    ),
    GeminiAPI: createIcon(
      "https://brandlogo.org/wp-content/uploads/2024/06/Gemini-Icon.png.webp",
      "Gemini API",
      "w-5 h-5"
    ),
    DaisyUI: createIcon(
      "https://img.daisyui.com/images/daisyui/mark-rotating.svg",
      "daisyUI",
      "size-4"
    ),
    CivicAuth: createIcon(
      "https://auth.civic.com/content/a964adf0-66cb-45eb-9cff-e8b8a2b43ed7/862fb34a-63b0-47d5-bd16-a2d6c6db0b0a.svg",
      "Civic Auth",
      "w-4 h-4"
    ),
    Clerk: createIcon(
      "https://cdn.brandfetch.io/idGrtLvNcI/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
      "Clerk",
      "size-5 rounded-full"
    ),
    ClipdropAPIs: createIcon(
      "https://static.clipdrop.co/web/apis/company-logos/favicon.ico",
      "Clipdrop APIs",
      "w-4 h-4"
    ),
    Cloudinary: createIcon(
      "https://cloudinary-res.cloudinary.com/image/upload/docsite/brand-assets/cloudinary_favicon_apple-touch-icon-57x57.png",
      "Cloudinary",
      "w-4 h-4"
    ),
    ReactRouter: createIcon(
      "https://reactrouter.com/favicon-dark.png",
      "React Router",
      "size-5"
    ),
    PuterJS: createIcon(
      "https://developer.puter.com/favicons/favicon-32x32.png",
      "Puter.js",
      "size-5"
    ),
    GDG: createIcon(
      "https://gdgoc-gcect.web.app/assets/gdg-BdrPbVJz.ico",
      "GDG",
      "w-5 h-5"
    ),
    GoogleAmbassador: createIcon(
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAACFUlEQVR4Ae2WQ5heMRRAa9tut7Vt27Zt27Zt224zXde2bXt45535/gwyNhfnMbknTmLVHFQvTIkR+kjtqT9TQ5gIEVWe/ltAS0NVWGX671fIKs16LuUWnnsZqkJLdMZNNvOjlF1yUEqunS5Ft7dXoSFEdgkZVJn+d1bxjYPnFd3eRqocrCrDThe/FFJCRIOQeGK7/lfpQLXdfU6VkuUqnxxXOeWVSjYwaMJpP8tYgTcYIhhkpp2tCg1DdkOlky8qsTiqOPLTLuE2RxW3lL9CRC0nfTAlcMavEfluUsbUSJCZIPZV2GLyxzUIofP41yCjR98/wr+A8HtBxmP2+5MIINO19VUIlmxS1/Gvng0f/VBg3rCrIMuGXFjtm+hLswJLfgzLJfBnWVoQ+4OJnli1mxjgQUMTjh91dxEyzcb+ZxzGjriSzHNTfq5a6OPXtnkEEP6alXEh3wM1aJCVn/6vsX6ndshgf4/NgpSgH6qVEA211OnJS4wAC1lNzFG5td+xmsjOdpgtdu2mvqJmWvaxSrFq5jQiRmCE32yZxnn+frLTwuoIbzTqJD7JgDy2vN+CLYSrTbrPRGg2Y4gIdZOaPKrXaD/4ujIFQwgbrPesAdhFsurVKdBCFmcyGVxiJTLTMiL5Z6YnRoCFwND3SUzJLbrZ+OaTiLzB2p4IrqeKT/CPNCG9Aetd5Iwn2Rm+RYVDVMCJEboCWMRPK1baXb8AAAAASUVORK5CYII=",
      "Google Student Ambassador",
      "w-5 h-5"
    ),
    ByteMonk: createIcon(
      "/bytemonk-logo.png",
      "ByteMonk",
      "w-5 h-5 object-contain"
    ),
    Hacktoberfest: createIcon(
      "https://assets.holopin.io/hf2025levels/lvl5-human.webp",
      "Hacktoberfest",
      "w-5 h-5"
    ),
    Nexora: createIcon(
      "https://nexora-delta-three.vercel.app/favicon.svg",
      "Nexora",
      "w-10 h-8 rounded"
    ),
    JobFit: createIcon(
      "https://job-fit-tau.vercel.app/favicon.ico",
      "JobFit",
      "size-8 rounded"
    ),
    AmarVoice: createIcon(
      "https://amar-voice.vercel.app/logo.png",
      "AmarVoice",
      "w-10 h-8 rounded"
    ),
    Jagriti: createIcon(
      "https://jagriti-26.vercel.app/logo.png",
      "Jagriti'26",
      "w-8 h-10 rounded-full"
    ),
    GSAP: createIcon(
      "https://gsap.com/apple-touch-icon.png",
      "GSAP",
      "size-6 rounded-full"
    ),
    Supabase: createIcon(
      "https://supabase.com/favicon/favicon.ico",
      "Supabase",
      "w-6 h-6"
    ),
    Puppeteer: createIcon(
      "https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png",
      "Puppeteer",
      "w-6 h-6 rounded-full"
    ),
    Expo: createIcon(
      "https://expo.dev/static/favicons/favicon-dark-48x48.png",
      "Expo",
      "w-6 h-6"
    ),
  };
};
