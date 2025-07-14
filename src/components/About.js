import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-white-text">
          About Me
        </h2>
        
        <div className="space-y-8">
          {/* Main About Card */}
          <div className="group bg-black-primary rounded-lg border border-gray-accent hover:border-white transition-all duration-300 overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Profile Image */}
                <div className="w-full lg:w-1/3 flex justify-center">
                  <div className="relative group">
                    {/* Main image container with white border - changed to square */}
                    <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-white via-gray-200 to-white p-1 hover:from-gray-200 hover:via-white hover:to-gray-200 transition-all duration-500">
                      <div className="w-full h-full rounded-xl bg-black flex items-center justify-center overflow-hidden">
                        <img 
                          src="/Mohamed Abul Hassan A Profile.jpg" 
                          alt="Mohamed Abul Hassan A" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback placeholder */}
                        <div className="w-full h-full bg-gradient-to-br from-gray-600 to-white flex items-center justify-center" style={{display: 'none'}}>
                          <span className="text-6xl text-white font-bold">MA</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white to-gray-300 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
                  </div>
                </div>

                {/* About Content */}
                <div className="w-full lg:w-2/3">
                  <div className="space-y-6 text-gray-text text-lg leading-relaxed">
                    <p className="text-xl lg:text-2xl text-white-text font-medium mb-8">
                      I'm a curious builder working at the intersection of AI and real-world impact.
                    </p>
                    
                    <p>
                      I love solving problems with code, especially in DL and ML systems. 
                      My passion lies in creating intelligent solutions that make a tangible difference in people's lives.
                    </p>
                    
                    <p>
                      Currently, I'm exploring AI agents and document understanding using open-source LLMs. 
                      I believe in the power of artificial intelligence to transform industries and improve human productivity.
                    </p>
                    
                    <p>
                      As a final-year AI & Data Science student, I'm constantly learning and experimenting with 
                      cutting-edge technologies. I enjoy contributing to open-source projects and sharing knowledge 
                      with the developer community.
                    </p>
                    
                    <p>
                      When I'm not coding, you can find me reading about the latest AI research, participating in 
                      hackathons, or working on personal projects that challenge my understanding of machine learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group bg-black-primary rounded-lg border border-gray-accent hover:border-white transition-all duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="text-3xl font-bold text-white-text mb-2 group-hover:text-white transition-colors duration-200">10+</div>
                <div className="text-gray-text text-sm">Projects</div>
              </div>
            </div>
            <div className="group bg-black-primary rounded-lg border border-gray-accent hover:border-white transition-all duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="text-3xl font-bold text-white-text mb-2 group-hover:text-white transition-colors duration-200">5+</div>
                <div className="text-gray-text text-sm">Certifications</div>
              </div>
            </div>
            <div className="group bg-black-primary rounded-lg border border-gray-accent hover:border-white transition-all duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="text-3xl font-bold text-white-text mb-2 group-hover:text-white transition-colors duration-200">3</div>
                <div className="text-gray-text text-sm">Competitions Won</div>
              </div>
            </div>
            <div className="group bg-black-primary rounded-lg border border-gray-accent hover:border-white transition-all duration-300 overflow-hidden">
              <div className="p-6 text-center">
                <div className="text-3xl font-bold text-white-text mb-2 group-hover:text-white transition-colors duration-200">18K</div>
                <div className="text-gray-text text-sm">Prize Money</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;