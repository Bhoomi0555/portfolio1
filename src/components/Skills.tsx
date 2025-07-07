import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = ['All', 'Programming', 'Web', 'DevOps', 'ML', 'Soft'];

  const filteredSkills = activeFilter === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  const categoryColors = {
    Programming: '#ddc3a5',
    Web: '#59260B',
    DevOps: '#013220',
    ML: '#674846',
    Soft: '#c9b491',
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-[#674846] to-[#201e20] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Technical <span className="text-[#ddc3a5]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-[#ddc3a5] mx-auto rounded-full" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-[#ddc3a5] text-[#201e20] shadow-lg'
                  : 'bg-[#59260B]/30 text-gray-300 hover:bg-[#59260B]/50 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-[#59260B]/30 backdrop-blur-sm rounded-xl p-6 hover:bg-[#59260B]/50 transition-all duration-300 border border-[#ddc3a5]/20 hover:border-[#ddc3a5]/40">
                {/* Skill Name */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-sm text-[#ddc3a5] font-medium">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-[#201e20]/50 rounded-full h-2 mb-4">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-[#ddc3a5] to-[#c9b491]"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                  />
                </div>

                {/* Category Badge */}
                <div className="flex justify-center">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium text-white"
                    style={{ backgroundColor: categoryColors[skill.category] }}
                  >
                    {skill.category}
                  </span>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ddc3a5]/10 to-[#c9b491]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Currently Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Currently <span className="text-[#ddc3a5]">Learning</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Docker & Kubernetes', 'System Design', 'Transformers', 'MLOps', 'Cloud Architecture'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="px-4 py-2 bg-[#013220]/50 text-[#ddc3a5] rounded-full font-medium border border-[#ddc3a5]/30 hover:bg-[#013220]/70 hover:border-[#ddc3a5]/60 transition-all duration-200"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;