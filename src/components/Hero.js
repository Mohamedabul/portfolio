import React from 'react';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import SplineScene from './SplineScene';

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a dummy PDF download link
    const link = document.createElement('a');
    link.href = 'A Mohamed Abul Hassan 2217028.pdf'; // You would replace this with actual resume path
    link.download = 'A Mohamed Abul Hassan 2217028.pdf';
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center pt-20 lg:pt-0 relative overflow-hidden">
      {/* Background 3D Model */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full opacity-70">
          <SplineScene />
        </div>
      </div>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/30 z-1"></div>

      {/* Hero content container - positioned to left to avoid 3D model quote */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        <div className="text-center lg:text-left max-w-full sm:max-w-2xl lg:max-w-xl bg-black/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 lg:mr-8 w-full lg:w-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-white drop-shadow-lg">Mohamed Abul Hassan A</span>
          </h1>
          
          <div className="mb-6 sm:mb-8">
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-3 sm:mb-4 font-medium drop-shadow-md">
              AI Enthusiast | Open Source Contributor | Problem Solver
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed drop-shadow-md">
              Final-year AI & DS student passionate about solving real-world problems using deep learning, NLP, and generative AI.
            </p>
          </div>

          <div className="flex flex-col gap-4 justify-center lg:justify-start items-center mb-6 sm:mb-8">
            <button
              onClick={handleDownloadResume}
              className="bg-white text-black flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto text-sm sm:text-base"
            >
              <FaDownload className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Download Resume</span>
            </button>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="https://github.com/Mohamedabul"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
              >
                <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>GitHub</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/mohamed-abul-hassan/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
              >
                <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Stats */}
          {/* <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto lg:mx-0">
            <div className="group bg-black/40 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white p-4 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-200">10+</div>
              <div className="text-gray-300 text-sm">Projects</div>
            </div>
            <div className="group bg-black/40 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white p-4 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-200">5+</div>
              <div className="text-gray-300 text-sm">Certifications</div>
            </div>
            <div className="group bg-black/40 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white p-4 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-200">3</div>
              <div className="text-gray-300 text-sm">Competitions Won</div>
            </div>
            <div className="group bg-black/40 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white p-4 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-200">18K</div>
              <div className="text-gray-300 text-sm">Prize Money</div>
            </div>
          </div> */}
        </div>
        
        {/* Right side spacer for 3D model quote visibility */}
        <div className="hidden lg:block flex-1 min-h-[400px]"></div>
      </div>

      {/* Subtle background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-200/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;
