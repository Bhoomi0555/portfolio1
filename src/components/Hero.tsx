import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = [
    'DevOps Enthusiastic',
    'ML Explorer',
    'B.Tech AI&DS Student',
    'Problem Solver'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#201e20] via-[#674846] to-[#59260B] opacity-90" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url("https://img.freepik.com/free-photo/elevated-view-laptop-earphones-crumpled-papers-pencil-blank-spiral-notepad-frame-black-background_23-2148080331.jpg")'
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center lg:justify-center lg:items-center"
          >
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ddc3a5] to-[#c9b491] p-1"
              >
                <div className="w-full h-full rounded-full bg-[#201e20] flex items-center justify-center">
                  <div className="w-[95%] h-[95%] rounded-full bg-[#ddc3a5] flex items-center justify-center overflow-hidden">
                    <img
                      src="/myimage.jpg"
                      alt="Bhoomi Khandelwal"
                      className="w-[95%] h-[95%] rounded-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Hi, I'm{' '}
              <span className="text-[#ddc3a5]">Bhoomi Khandelwal</span>
            </motion.h1>

            <div className="h-16 flex items-center justify-center lg:justify-start mb-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl sm:text-2xl text-gray-300 font-medium"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {roles[currentRoleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg text-gray-300 mb-8 max-w-2xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Enthusiastic about streamlining collaboration between development and operations through DevOps, while diving deep into the 
              transformative world of AI and machine learning.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex justify-center lg:justify-start space-x-6 mt-8"
            >
              <motion.a
                href="https://github.com/Bhoomi0555"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#ddc3a5] transition-colors duration-200"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/bhoomi-khandelwal-3a2918290"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#ddc3a5] transition-colors duration-200"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:bhoomikhandelwal16@gmail.com?subject=Hello%20Bhoomi&body=I%20saw%20your%20portfolio!"
                className="text-gray-300 hover:text-[#ddc3a5] transition-colors duration-200"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/bhoomi_k22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#ddc3a5] transition-colors duration-200"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
