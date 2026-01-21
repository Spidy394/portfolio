import { useState, Suspense, lazy, memo } from "react";
import LoadingScreen from "./components/LoadingScreen";
import StarField from "./components/StarField";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";

const About = lazy(() => import("./components/sections/About"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Contact = lazy(() => import("./components/sections/Contact"));

// Memoize StarField for performance
const MemoizedStarField = memo(StarField);

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-gradient-to-b from-black via-gray-950 to-black text-gray-100 relative overflow-x-hidden`}
      >
        <MemoizedStarField />
        <div className="relative z-10">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <Suspense
            fallback={
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-blue-500/30 border-t-blue-500"></div>
                  <p className="text-gray-400 text-sm">Loading...</p>
                </div>
              </div>
            }
          >
            <About />
            <Projects />
            <Contact />
          </Suspense>
        </div>
        <footer className="w-full text-center py-4 px-4 text-gray-500 text-xs sm:text-sm mt-20">
          Shubhodeep Mondal © 2025. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default App;
