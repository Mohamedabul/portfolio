import React from 'react';
import { FaHeart, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-white-text">
          Let's Connect
        </h2>
        
        <div className="space-y-8">
          {/* Main Footer Card */}
          <div className="group bg-black-primary rounded-lg border border-gray-accent hover:border-white transition-all duration-300 overflow-hidden">
            <div className="p-8">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-accent rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <FaHeart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white-text mb-1 group-hover:text-white transition-colors duration-200">
                      Mohamed Abul Hassan A
                    </h3>
                    <p className="text-lg text-gray-text leading-relaxed">
                      AI Enthusiast | Open Source Contributor | Problem Solver
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 lg:mt-0">
                  <span className="inline-block px-3 py-1 bg-gray-accent text-gray-text text-xs rounded-full">
                    Available for opportunities
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white-text mb-4">
                  Connect with me:
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/mohammedabulhassan298"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                  >
                    <FaLinkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  
                  <a
                    href="https://github.com/mohammedabulhassan298"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white text-white flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  
                  <a
                    href="mailto:mohammedabulhassan298@gmail.com"
                    className="border border-white text-white flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                  >
                    <FaEnvelope className="w-5 h-5" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
              
              {/* Bottom section */}
              <div className="border-t border-gray-accent pt-6">
                <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                  <p className="text-gray-text text-sm">
                    © {currentYear} Mohamed Abul Hassan A. All rights reserved.
                  </p>
                  {/* <p className="text-gray-text text-sm flex items-center">
                    Made with <FaHeart className="w-4 h-4 text-red-500 mx-1" /> using React & Tailwind CSS
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
