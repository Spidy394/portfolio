import React, { useEffect } from 'react'
import { scrollToSection } from '../utils/smoothScroll';

const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        scrollToSection(sectionId);
        setMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="container mx-auto">
                <div className="flex justify-between items-center h-16 md:h-20">
                    <a 
                        href="#home" 
                        onClick={(e) => handleNavClick(e, 'home')}
                        className="font-mono text-lg md:text-xl font-bold text-white hover:text-blue-500 transition-colors"
                    >
                        shubho<span className="text-blue-500">.dev</span>
                    </a>

                    <button
                        className="w-8 h-8 flex items-center justify-center text-2xl text-gray-300 hover:text-white transition-colors md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? '×' : '☰'}
                    </button>

                    <div className="hidden md:flex items-center space-x-8">
                        {['home', 'about', 'projects', 'contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                onClick={(e) => handleNavClick(e, item)}
                                className="text-gray-300 hover:text-white transition-colors capitalize text-sm md:text-base"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar