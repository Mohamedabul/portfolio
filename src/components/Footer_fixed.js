import React from 'react';
import { FaHeart, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-purple-500/20 py-12 glass">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Left section */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              Mohamed Abul Hassan A
            </h3>
            <p className="text-purple-300">
              AI Enthusiast | Open Source Contributor | Problem Solver
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/mohammedabulhassan298"
              target="_blank"
              rel="noopener noreferrer"
              className="glass w-10 h-10 border border-purple-500/50 flex items-center justify-center rounded-full hover:bg-purple-500/20 hover:text-white transform hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/mohammedabulhassan298"
              target="_blank"
              rel="noopener noreferrer"
              className="glass w-10 h-10 border border-purple-500/50 flex items-center justify-center rounded-full hover:bg-purple-500/20 hover:text-white transform hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="mailto:mohammedabulhassan298@gmail.com"
              className="glass w-10 h-10 border border-purple-500/50 flex items-center justify-center rounded-full hover:bg-purple-500/20 hover:text-white transform hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-purple-500/20">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-purple-300 text-sm">
              © {currentYear} Mohamed Abul Hassan A. All rights reserved.
            </p>
            <p className="text-purple-300 text-sm flex items-center">
              Made with <FaHeart className="w-4 h-4 text-red-500 mx-1" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
