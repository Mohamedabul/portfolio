import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiKaggle } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: "IQRA AI – Enterprise Knowledge Retrieval App",
      description: "Developed an app that provides summaries and insights from enterprise data, enabling users to interact and extract valuable information seamlessly.",
      techStack: ["Python", "LangChain", "RAG", "OpenAI", "Streamlit", "Vector DB"],
      githubLink: "https://github.com/Mohamedabul/EKR_WKR.git",
      liveLink: "#",
      featured: true
    },
    {
      title: "Data Validation App",
      description: "Created an app based on client requirements to identify and highlight issues in Excel and CSV files, enhancing data accuracy and integrity.",
      techStack: ["Python", "Pandas", "Streamlit", "Data Validation", "File Processing"],
      // githubLink: "https://github.com/mohammedabulhassan298",
      liveLink: "#",
      featured: true
    },
    {
      title: "Visionary – AGENTS",
      description: "Designed an app that delivers the most relevant sources and concise summaries for user queries by leveraging agent-based technology.",
      techStack: ["Python", "AI Agents", "NLP", "Multi-Agent Systems", "RAG"],
      githubLink: "https://github.com/Mohamedabul/Dharun-Kumar-2217004.git",
      liveLink: "#",
      featured: true
    },
    {
      title: "Lung Cancer Classification",
      description: "Developed a deep learning model to accurately classify lung cancer cases, improving diagnostic support for medical professionals.",
      techStack: ["Python", "TensorFlow", "CNN", "Medical Imaging", "Deep Learning"],
      githubLink: "https://www.kaggle.com/code/mohamedabulhassana/lung-cancer-classification-acc-99/",
      liveLink: "#",
      featured: false
    },
    {
      title: "Brain Tumor Classification",
      description: "Implemented a deep learning model for brain tumor classification, enhancing early detection and treatment planning capabilities.",
      techStack: ["Python", "PyTorch", "Computer Vision", "Medical AI", "CNN"],
      githubLink: "https://www.kaggle.com/code/mohamedabulhassana/brain-tumor-classification-acc",
      liveLink: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-white-text">
          Developed Projects
        </h2>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-black-primary rounded-lg border border-gray-accent hover:border-white transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-accent rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                      {project.title.includes("Lung Cancer") || project.title.includes("Brain Tumor") ? (
                      <SiKaggle className="w-5 h-5" />
                    ) : (
                      <FaGithub className="w-5 h-5" />
                    )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white-text mb-1 group-hover:text-white transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-lg text-gray-text leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0">
                    {project.featured && (
                      <span className="inline-block px-3 py-1 bg-gray-accent text-gray-text text-xs rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white-text mb-4">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-accent text-gray-text text-sm rounded-full hover:bg-white hover:text-black transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                  >
                    {project.title.includes("Lung Cancer") || project.title.includes("Brain Tumor") ? (
                      <SiKaggle className="w-5 h-5" />
                    ) : (
                      <FaGithub className="w-5 h-5" />
                    )}
                    <span>{project.title.includes("Lung Cancer") || project.title.includes("Brain Tumor") ? "View on Kaggle" : "View Code"}</span>
                  </a>
                  
                  {project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white text-white flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Mohamedabul"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black inline-flex items-center space-x-2 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            <FaGithub className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
