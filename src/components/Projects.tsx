import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[#201e20] to-[#59260B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Featured <span className="text-[#ddc3a5]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[#ddc3a5] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="skill-card group relative bg-[#674846]/30 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-[#674846]/50 transition-all duration-300 shadow-md min-h-[340px] flex flex-col cursor-pointer hover:blink-light"
              tabIndex={0}
            >
              {/* Circle Glow Left Center */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 w-32 h-32 bg-gradient-to-br from-[#ffe7b3]/60 via-[#ddc3a5]/30 to-transparent rounded-full blur-2xl opacity-60 pointer-events-none z-0"></div>
              {/* Card Content */}
              <div className="relative z-10">
                {/* Project Image */}
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#201e20]/80 to-transparent" />
                  {/* Built in 2025 Stamp */}
                  <div className="absolute top-2 right-2 bg-[#ddc3a5] text-[#201e20] px-2 py-0.5 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>Built in 2025</span>
                  </div>
                </div>
                {/* Project Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#ddc3a5] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-2 text-xs line-clamp-2 flex-1">{project.description}</p>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-[#59260B]/50 text-[#ddc3a5] rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Project Links */}
                  <div className="flex items-center space-x-2 mt-auto">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-300 hover:text-[#ddc3a5] transition-colors duration-200 text-xs"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={14} />
                        <span>Code</span>
                      </motion.a>
                    )}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-300 hover:text-[#ddc3a5] transition-colors duration-200 text-xs"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={14} />
                        <span>Live</span>
                      </motion.a>
                    )}
                  </div>
                </div>
                {/* Hover Border Glow */}
                {/* Removed animated border and glowing lines effect as requested */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Bhoomi0555"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-transparent border-2 border-[#ddc3a5] text-[#ddc3a5] rounded-full font-medium hover:bg-[#ddc3a5] hover:text-[#201e20] transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            <span>View Source</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;