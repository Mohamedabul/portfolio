import React, { useState, useEffect, useMemo } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaProjectDiagram, FaCertificate, FaBriefcase, FaTrophy, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = useMemo(() => [
    { id: 'hero', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'skills', label: 'Skills', icon: FaCode },
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
    { id: 'certifications', label: 'Certifications', icon: FaCertificate },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'achievements', label: 'Achievements', icon: FaTrophy },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="fixed left-0 top-0 h-full w-64 glass backdrop-blur-xl border-r border-white/20 transform transition-transform duration-300 ease-in-out z-50 hidden lg:block">
        <div className="p-6">
          <h2 className="text-2xl font-bold heading-gradient mb-8">Mohamed Abul Hassan A</h2>
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 glow-hover ${
                      activeSection === item.id
                        ? 'bg-white/20 text-white border border-white/50'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/30'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 glass backdrop-blur-xl border-b border-white/20 z-50 lg:hidden">
        <div className="px-4 py-3 flex items-center justify-between">
          <h2 className="text-xl font-bold heading-gradient">Mohamed Abul Hassan A</h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gray-300 transition-colors"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} glass backdrop-blur-xl border-t border-white/20`}>
          <ul className="py-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 transition-all duration-300 glow-hover ${
                      activeSection === item.id
                        ? 'bg-white/20 text-white border border-white/50'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/30'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
