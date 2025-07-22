import React from 'react';
import { FaPython, FaJava, FaReact, FaGitAlt, FaDatabase, FaCode, FaFlask, FaEye, FaRobot, FaBrain, FaLanguage } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiMongodb, SiJupyter, SiNumpy, SiPandas, SiScikitlearn, SiStreamlit, SiOpencv, SiHuggingface, SiLangchain } from 'react-icons/si';
import { TbBrandVscode, TbChartBar, TbSearch, TbVector } from 'react-icons/tb';
import { MdChat } from 'react-icons/md';
import { BsGraphUp } from 'react-icons/bs';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: FaPython, level: 95 },
        { name: "Java", icon: FaJava, level: 80 },
        { name: "JavaScript", icon: FaCode, level: 75 },
        { name: "SQL", icon: FaDatabase, level: 85 },
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Deep Learning", icon: FaBrain, level: 92 },
        { name: "NLP", icon: FaLanguage, level: 88 },
        { name: "Computer Vision", icon: FaEye, level: 85 },
        { name: "Gen AI", icon: FaRobot, level: 90 },
        { name: "LLM", icon: MdChat, level: 87 },
        { name: "RAG Systems", icon: TbSearch, level: 85 },
      ]
    },
    {
      title: "AI/ML Frameworks & Tools",
      skills: [
        { name: "TensorFlow", icon: SiTensorflow, level: 90 },
        { name: "PyTorch", icon: SiPytorch, level: 85 },
        { name: "Scikit-learn", icon: SiScikitlearn, level: 88 },
        { name: "Hugging Face", icon: SiHuggingface, level: 85 },
        { name: "LangChain", icon: SiLangchain, level: 83 },
        { name: "Pinecone", icon: TbVector, level: 80 },
      ]
    },
    {
      title: "Data Science & Visualization",
      skills: [
        { name: "NumPy", icon: SiNumpy, level: 92 },
        { name: "Pandas", icon: SiPandas, level: 90 },
        { name: "Matplotlib", icon: BsGraphUp, level: 85 },
        { name: "Seaborn", icon: TbChartBar, level: 82 },
        { name: "OpenCV", icon: SiOpencv, level: 80 },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", icon: FaReact, level: 80 },
        { name: "Flask", icon: FaFlask, level: 78 },
        { name: "Streamlit", icon: SiStreamlit, level: 85 },
      ]
    },
    {
      title: "Tools & Databases",
      skills: [
        { name: "Git", icon: FaGitAlt, level: 85 },
        { name: "VS Code", icon: TbBrandVscode, level: 90 },
        { name: "Jupyter", icon: SiJupyter, level: 88 },
        { name: "MongoDB", icon: SiMongodb, level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-white-text">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group bg-black-primary rounded-lg border border-gray-accent hover:border-white transition-all duration-300 overflow-hidden">
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Header */}
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-accent rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></span>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white-text group-hover:text-white transition-colors duration-200">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-4 sm:space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skillIndex} className="group">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-200" />
                            <span className="text-gray-text font-medium text-sm sm:text-base">{skill.name}</span>
                          </div>
                          <span className="text-gray-text text-xs sm:text-sm">{skill.level}%</span>
                        </div>

                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div 
                            className="bg-white h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
