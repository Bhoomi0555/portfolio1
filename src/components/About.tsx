import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Heart, Code, Briefcase, GraduationCap } from 'lucide-react';
import { education } from '../data/portfolio';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const quickFacts = [
    { icon: MapPin, label: 'Location', value: 'Mahaveer Nagar, Jaipur' },
    { icon: Phone, label: 'Phone', value: '+91 8875077255' },
    { icon: Heart, label: 'Interests', value: 'AI, DevOps, Photography' },
    { icon: Code, label: 'Coding', value: '3+ Years Experience' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#201e20] to-[#674846] relative overflow-hidden">
      {/* Wave Transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#1a1a1a"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            About <span className="text-[#ddc3a5]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#ddc3a5] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              I'm a passionate B.Tech AI & Data Science student with a deep fascination for the intersection 
              of artificial intelligence and modern development practices. My journey began with curiosity 
              about how machines can learn and has evolved into a comprehensive understanding of both 
              development and operations.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              With expertise in DevOps practices and machine learning algorithms, I bridge the gap between 
              cutting-edge AI research and practical, scalable solutions. I believe in writing clean, 
              efficient code and deploying robust systems that can handle real-world challenges.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-[#59260B]/30 rounded-lg backdrop-blur-sm hover:bg-[#59260B]/50 transition-colors duration-200"
                >
                  <div className="p-2 bg-[#ddc3a5] rounded-full">
                    <fact.icon size={20} className="text-[#201e20]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{fact.label}</p>
                    <p className="text-white font-medium">{fact.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <GraduationCap className="mr-3 text-[#ddc3a5]" size={24} />
              Education Journey
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#ddc3a5] rounded-full" />

              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className="relative flex items-start space-x-6 pb-8 group"
                >
                  {/* Timeline Dot */}
                  <div className="relative">
                    <div className="w-4 h-4 bg-[#ddc3a5] rounded-full border-4 border-[#201e20] group-hover:scale-125 transition-transform duration-200" />
                    <div className="absolute -inset-2 rounded-full bg-[#ddc3a5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-[#59260B]/30 rounded-lg p-6 backdrop-blur-sm hover:bg-[#59260B]/50 transition-colors duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#ddc3a5] bg-[#ddc3a5]/20 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                      <span className="text-sm font-bold text-white">{item.score}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                    {item.description && (
                      <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;