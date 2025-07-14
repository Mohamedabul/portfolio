import React from 'react';
import { FaTrophy, FaMedal, FaAward, FaRupeeSign, FaCode, FaExternalLinkAlt, FaCalendarAlt, FaFire } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Achievements = () => {
  const achievements = [
    {
      title: "PROJECT EXPO",
      subtitle: "FIRST PRIZE",
      prize: "₹10,000",
      description: "Won first place in the annual project expo with an innovative AI solution.",
      icon: FaTrophy,
      color: "text-yellow-500",
      bgColor: "from-yellow-900 to-yellow-800"
    },
    {
      title: "DATA DIVE",
      subtitle: "FIRST PRIZE",
      prize: "₹2,000",
      description: "Secured first position in the data science competition with advanced analytics.",
      icon: FaMedal,
      color: "text-blue-500",
      bgColor: "from-blue-900 to-blue-800"
    },
    {
      title: "HYBRID HACK",
      subtitle: "SECOND PRIZE",
      prize: "₹6,000",
      description: "Emerged as the winner in the hybrid hackathon with a cutting-edge solution.",
      icon: FaAward,
      color: "text-purple-500",
      bgColor: "from-purple-900 to-purple-800"
    },
    {
      title: "LEETCODE",
      subtitle: "286 PROBLEMS SOLVED",
      prize: "3 Badges",
      description: "Consistently solving coding problems with 2x 50-day and 1x 100-day badges.",
      icon: SiLeetcode,
      color: "text-orange-500",
      bgColor: "from-orange-900 to-orange-800",
      isLeetCode: true,
      profileUrl: "https://leetcode.com/u/MohamedAbulHassanA298_/"
    }
  ];

  const totalPrize = 18000;

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-white-text">
          Achievements & Awards
        </h2>
        
        {/* Summary Stats */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-8 bg-black-secondary rounded-lg border border-gray-accent p-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white-text mb-2">3</div>
              <div className="text-gray-text text-sm">Competitions Won</div>
            </div>
            <div className="w-px h-12 bg-gray-accent"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white-text mb-2 flex items-center justify-center">
                <FaRupeeSign className="w-8 h-8 mr-1" />
                {totalPrize.toLocaleString()}
              </div>
              <div className="text-gray-text text-sm">Total Prize Money</div>
            </div>
            <div className="w-px h-12 bg-gray-accent"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white-text mb-2">286</div>
              <div className="text-gray-text text-sm">LeetCode Problems</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={index} 
                className="group bg-black-secondary rounded-lg border border-gray-accent hover:border-white transition-all duration-300 overflow-hidden transform hover:scale-105"
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${achievement.bgColor} p-6 text-center`}>
                  <Icon className={`w-12 h-12 ${achievement.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-bold text-white mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-200 font-semibold">
                    {achievement.subtitle}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-white-text mb-2">
                      {achievement.prize}
                    </div>
                    <div className="text-sm text-gray-text font-medium">
                      {achievement.isLeetCode ? "Streak Badges" : "Prize Money"}
                    </div>
                  </div>
                  
                  <p className="text-gray-text text-sm leading-relaxed text-center mb-4">
                    {achievement.description}
                  </p>
                  
                  {achievement.isLeetCode && (
                    <div className="text-center">
                      <a
                        href={achievement.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-orange-500 hover:text-orange-400 transition-colors duration-200 text-sm font-medium"
                      >
                        <SiLeetcode className="w-4 h-4" />
                        <span>View Profile</span>
                        <FaExternalLinkAlt className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-text text-lg mb-6">
            These achievements reflect my dedication to innovation and excellence in AI and data science.
          </p>
          <div className="inline-block bg-black-secondary border border-gray-accent rounded-lg px-6 py-3">
            <span className="text-white-text font-semibold">Next Goal: </span>
            <span className="text-gray-text">Contributing to major open-source AI projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

