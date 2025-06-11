import React, { useEffect } from 'react'
import { scrollToSection } from '../utils/smoothScroll';
import { HiHome, HiUser, HiFolderOpen, HiMail, HiMenuAlt3, HiX } from 'react-icons/hi';

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
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.85)] backdrop-blur-lg border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <div className="container mx-auto">
                <div className="flex justify-between items-center h-16 md:h-20">
                    <a 
                        href="#home" 
                        onClick={(e) => handleNavClick(e, 'home')}
                        className="font-mono text-lg md:text-xl font-bold text-white group cursor-pointer relative py-2 px-4 -mx-4"
                    >
                        <span className="relative z-10 inline-block transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:-rotate-1">
                            <span className="transition-all duration-300 ease-in-out group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 group-hover:bg-clip-text">
                                shubho
                            </span>
                            <span className="text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text transition-all duration-300 ease-in-out group-hover:from-cyan-300 group-hover:to-blue-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
                                .dev
                            </span>
                        </span>
                        <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out -z-10 blur-sm"></div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/5 to-cyan-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out -z-10"></div>
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300 ease-in-out"></div>
                    </a>                    <button
                        className="w-10 h-10 flex items-center justify-center text-xl text-gray-300 hover:text-white transition-all duration-300 md:hidden rounded-lg hover:bg-white/10 group relative overflow-hidden transform hover:scale-110 hover:rotate-3"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                            {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                        </span>
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 blur-sm"></div>
                    </button>                    <div className="hidden md:flex items-center space-x-8">
                        {[
                            { name: 'home', icon: HiHome },
                            { name: 'about', icon: HiUser },
                            { name: 'projects', icon: HiFolderOpen },
                            { name: 'contact', icon: HiMail }
                        ].map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <a
                                    key={item.name}
                                    href={`#${item.name}`}
                                    onClick={(e) => handleNavClick(e, item.name)}
                                    className="relative text-gray-300 hover:text-white transition-all duration-300 capitalize text-sm md:text-base py-2 px-3 rounded-lg hover:bg-white/10 group overflow-hidden flex items-center gap-2"
                                >
                                    <IconComponent size={18} className="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_4px_rgba(59,130,246,0.6)]" />
                                    <span className="relative z-10 transition-all duration-300 group-hover:scale-105 inline-block">
                                        {item.name}
                                    </span>
                                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 blur-sm"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 -z-10"></div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar