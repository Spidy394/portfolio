import React from "react";
import { scrollToSection } from '../utils/smoothScroll';
import { HiHome, HiUser, HiFolderOpen, HiMail, HiX } from 'react-icons/hi';

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.95)] backdrop-blur-xl z-40 flex flex-col items-center justify-center
                   transition-all duration-300 ease-in-out
                   ${
                     menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"
                   }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5"></div>
        <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-gray-300 hover:text-white text-3xl focus:outline-none cursor-pointer transition-all duration-300 w-12 h-12 rounded-full hover:bg-white/10 flex items-center justify-center"
        aria-label="Close Menu"
      >
        <HiX size={32} />
      </button>      <div className="flex flex-col items-center space-y-8">
        {[
          { name: 'home', icon: HiHome },
          { name: 'about', icon: HiUser },
          { name: 'projects', icon: HiFolderOpen },
          { name: 'contact', icon: HiMail }
        ].map((item, index) => {
          const IconComponent = item.icon;
          return (
            <a
              key={item.name}
              href={`#${item.name}`}
              onClick={(e) => handleNavClick(e, item.name)}
              className={`text-3xl font-semibold text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:bg-clip-text transform transition-all duration-500 px-6 py-3 rounded-lg hover:bg-white/5 relative group flex items-center gap-4
                        ${
                          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
              style={{ 
                transitionDelay: menuOpen ? `${index * 100}ms` : '0ms' 
              }}
            >
              <IconComponent size={32} className="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              <span>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;