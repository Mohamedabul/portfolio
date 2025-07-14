import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: "Internship",
      organization: "Digital T3",
      duration: "September 2024 - March 2025",
      type: "Internship",
      responsibilities: [
        "Developed AI models for automation tasks using Python and TensorFlow",
        "Collaborated with cross-functional teams to enhance data processing pipelines",
        "Participated in daily stand-ups and project planning meetings",
        "Implemented machine learning solutions for business optimization"
      ]
    },
    {
      role: "Industrial Orientation Training",
      organization: "Oracle Technologies",
      duration: "July 2024 - October 2024",
      type: "Training",
      responsibilities: [
        "Gained hands-on experience with Oracle database management systems",
        "Learned Oracle-specific tools for enterprise application development",
        "Created comprehensive training documentation for new interns",
        "Worked on database optimization and performance tuning projects"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-white-text">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="group bg-black-primary rounded-lg border border-gray-accent hover:border-white transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-accent rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <FaBriefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white-text mb-1 group-hover:text-white transition-colors duration-200">
                        {exp.role}
                      </h3>
                      <p className="text-xl text-gray-text font-medium">
                        {exp.organization}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0">
                    <div className="flex items-center space-x-2 text-gray-text">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.duration}</span>
                    </div>
                    <span className="inline-block mt-2 px-3 py-1 bg-gray-accent text-gray-text text-xs rounded-full">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-lg font-semibold text-white-text mb-4">
                    Key Responsibilities & Achievements:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <FaCheckCircle className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                        <span className="text-gray-text text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

