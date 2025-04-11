import React from "react";
import { scrollToSection } from '../utils/smoothScroll';

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                   transition-all duration-300 ease-in-out
                   ${
                     menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"
                   }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-gray-300 hover:text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {['home', 'about', 'projects', 'contact'].map((item) => (
        <a
          key={item}
          href={`#${item}`}
          onClick={(e) => handleNavClick(e, item)}
          className={`text-2xl font-semibold text-gray-300 hover:text-white my-4 transform transition-transform duration-300
                    ${
                      menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </a>
      ))}
    </div>
  );
};

export default MobileMenu;