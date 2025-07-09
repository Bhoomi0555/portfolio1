import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
<<<<<<< HEAD

const FixedProfileBar: React.FC = () => (
  <div className="fixed top-0 left-0 w-full bg-white bg-opacity-90 z-[100] flex items-center justify-center shadow-md py-2">
    <img
      src="/profile.jpg"
      alt="Bhoomi Khandelwal"
      className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-pink-400"
    />
    <span className="text-lg font-bold text-pink-700">Bhoomi Khandelwal</span>
  </div>
);
=======
import myimage from '../assets/myimage.jpg';

>>>>>>> 758d6a1 (profile add)

const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  const roles = [
    'DevOps Engineer',
    'ML Explorer',
    'B.Tech AI&DS Student',
    'Full Stack Developer',
    'Problem Solver'
  ];

  const skills = [
    { name: 'HTML', angle: 0 },
    { name: 'CSS', angle: 72 },
    { name: 'Java', angle: 144 },
    { name: 'Python', angle: 216 },
    { name: 'JavaScript', angle: 288 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Bhoomi_Khandelwal_Resume.pdf';
    link.click();
  };

  const handleContactClick = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
<<<<<<< HEAD
      <FixedProfileBar />
=======
      
>>>>>>> 758d6a1 (profile add)
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#201e20] via-[#674846] to-[#59260B] opacity-90" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1600")'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile and Skills Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Profile Photo */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ddc3a5] to-[#c9b491] p-1"
              >
                <div className="w-full h-full rounded-full bg-[#201e20] flex items-center justify-center">
                  <img
<<<<<<< HEAD
                    src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400"
=======
                    src={myimage}
>>>>>>> 758d6a1 (profile add)
                    alt="Bhoomi Khandelwal"
                    className="w-[95%] h-[95%] rounded-full object-cover"
                  />
                </div>
              </motion.div>

<<<<<<< HEAD
              {/* Orbiting Skills */}
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="absolute w-20 h-20 rounded-full bg-[#ddc3a5] flex items-center justify-center font-medium text-[#201e20] text-sm shadow-lg cursor-pointer group"
                  initial={{
                    rotate: skill.angle,
                    x: 120,
                    y: -10,
                  }}
                  animate={{
                    rotate: skill.angle + 360,
                    x: 120,
                    y: -10,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    transformOrigin: '-120px 10px',
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 20px rgba(221, 195, 165, 0.6)',
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.span
                    animate={{
                      rotate: -(skill.angle + 360),
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="group-hover:text-[#59260B] transition-colors duration-200"
                  >
                    {skill.name}
                  </motion.span>
                </motion.div>
              ))}
=======
              
>>>>>>> 758d6a1 (profile add)
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
              Passionate about bridging the gap between development and operations 
              while exploring the fascinating world of machine learning and AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={handleResumeDownload}
                className="flex items-center justify-center space-x-2 px-8 py-3 bg-[#ddc3a5] text-[#201e20] rounded-full font-medium hover:bg-[#c9b491] transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.button>

              <motion.button
                onClick={handleContactClick}
                className="flex items-center justify-center space-x-2 px-8 py-3 bg-transparent border-2 border-[#ddc3a5] text-[#ddc3a5] rounded-full font-medium hover:bg-[#ddc3a5] hover:text-[#201e20] transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                <span>Hire Me</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex justify-center lg:justify-start space-x-6 mt-8"
            >
              <motion.a
                href="https://github.com/bhoomikhandelwal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#ddc3a5] transition-colors duration-200"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/bhoomikhandelwal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#ddc3a5] transition-colors duration-200"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1 h-16 bg-gradient-to-b from-[#ddc3a5] to-transparent rounded-full"
        />
      </motion.div>
    </section>
    </>
  );
};

export default Hero;