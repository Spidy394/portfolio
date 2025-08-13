import React, { useState, Suspense, lazy } from 'react'
import LoadingScreen from './components/LoadingScreen'
import StarField from './components/StarField'
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Home from './components/sections/Home'

const About = lazy(() => import('./components/sections/About'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} {" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-gradient-to-b from-black via-gray-950 to-black text-gray-100 relative`}
      >
        <StarField />
        <div className="relative z-10">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <Suspense fallback={<div className="text-center py-10 text-gray-400">Loading...</div>}>
            <About />
            <Projects />
            <Contact />
          </Suspense>
        </div>
        <footer className="w-full text-center py-4 text-gray-500 text-sm absolute bottom-0 left-0 z-20">
          Shubhodeep Mondal © 2025. All rights reserved.
        </footer>
      </div>
    </>
  )
}

export default App
