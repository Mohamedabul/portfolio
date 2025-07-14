import React from 'react';
import { FaCertificate, FaExternalLinkAlt, FaCalculator, FaRobot, FaChartBar, FaDatabase, FaPython, FaCode, FaBrain, FaProjectDiagram, FaSearch, FaTable } from 'react-icons/fa';
import { SiMatlab, SiPython, SiSqlite, SiNumpy, SiPandas, SiScikitlearn, SiTensorflow } from 'react-icons/si';

const Certifications = () => {
  const certifications = [
    {
      title: "MATLAB Programming for Numerical Computations",
      platform: "NPTEL",
      description: "Comprehensive course covering MATLAB programming fundamentals and numerical computation techniques.",
      credentialUrl: "#",
      completedYear: "2023"
    },
    {
      title: "Data Science for Engineers",
      platform: "NPTEL",
      description: "Advanced course focusing on data science applications in engineering and technical domains.",
      credentialUrl: "#",
      completedYear: "2023"
    },
    {
      title: "Machine Learning with Python",
      platform: "IBM",
      description: "Professional certification covering machine learning algorithms and implementation using Python.",
      credentialUrl: "#",
      completedYear: "2023"
    },
    {
      title: "Python for Data Science",
      platform: "IBM",
      description: "Fundamental course on Python programming for data science and analytics applications.",
      credentialUrl: "#",
      completedYear: "2023"
    },
    {
      title: "Database Management System Part - 1",
      platform: "INFOSYS SPRINGBOARD",
      description: "Comprehensive introduction to database concepts, design, and management principles.",
      credentialUrl: "#",
      completedYear: "2024"
    }
  ];

  const platformColors = {
    "NPTEL": "bg-blue-900 border-blue-700",
    "IBM": "bg-green-800 border-green-600",
    "INFOSYS SPRINGBOARD": "bg-purple-900 border-purple-700"
  };

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-white-text">
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group bg-black-primary rounded-lg border border-gray-accent hover:border-white transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex flex-col mb-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-accent rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <FaCertificate className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white-text mb-2 group-hover:text-white transition-colors duration-200">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-text leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block px-3 py-1 bg-gray-accent text-gray-text text-xs rounded-full">
                      {cert.completedYear}
                    </span>
                    <span className={`inline-block px-3 py-1 text-white text-xs rounded-full ${platformColors[cert.platform] || 'bg-gray-800'}`}>
                      {cert.platform}
                    </span>
                  </div>
                </div>
                
                {/* Credential Link */}
                <div className="flex space-x-4">
                  {cert.credentialUrl !== "#" ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 text-sm"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      <span>View Credential</span>
                    </a>
                  ) : (
                    <span className="border border-gray-accent text-gray-text flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold cursor-not-allowed text-sm">
                      <FaCertificate className="w-3 h-3" />
                      <span>Certificate Earned</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Gained Section */}
        <div className="mt-16 bg-black-primary rounded-lg border border-gray-accent hover:border-white transition-all duration-300 overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-accent rounded-full flex items-center justify-center">
                  <FaChartBar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white-text mb-1">
                    Key Skills Gained
                  </h3>
                  <p className="text-lg text-gray-text leading-relaxed">
                    Technical competencies developed through professional certifications
                  </p>
                </div>
              </div>
            </div>
            
            {/* Skills */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white-text mb-4">
                Core Technologies:
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-accent text-gray-text text-sm rounded-full hover:bg-white hover:text-black transition-all duration-200">
                  MATLAB
                </span>
                <span className="px-3 py-1 bg-gray-accent text-gray-text text-sm rounded-full hover:bg-white hover:text-black transition-all duration-200">
                  Python
                </span>
                <span className="px-3 py-1 bg-gray-accent text-gray-text text-sm rounded-full hover:bg-white hover:text-black transition-all duration-200">
                  Machine Learning
                </span>
                <span className="px-3 py-1 bg-gray-accent text-gray-text text-sm rounded-full hover:bg-white hover:text-black transition-all duration-200">
                  Data Science
                </span>
                <span className="px-3 py-1 bg-gray-accent text-gray-text text-sm rounded-full hover:bg-white hover:text-black transition-all duration-200">
                  Database Management
                </span>
                <span className="px-3 py-1 bg-gray-accent text-gray-text text-sm rounded-full hover:bg-white hover:text-black transition-all duration-200">
                  SQL
                </span>
                <span className="px-3 py-1 bg-gray-accent text-gray-text text-sm rounded-full hover:bg-white hover:text-black transition-all duration-200">
                  Numerical Computing
                </span>
                <span className="px-3 py-1 bg-gray-accent text-gray-text text-sm rounded-full hover:bg-white hover:text-black transition-all duration-200">
                  Data Analytics
                </span>
              </div>
            </div>
            
            {/* View More Link */}
            <div className="flex space-x-4">
              <span className="border border-gray-accent text-gray-text flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold">
                <FaCertificate className="w-4 h-4" />
                <span>Professional Certifications Completed</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
