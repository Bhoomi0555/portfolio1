import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  setActiveSection
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#201e20]/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-bold text-xl cursor-pointer animate-pulse-glow"
            onClick={() => handleNavClick('home')}
          >
            <span className="text-[#ddc3a5]">Bhoomi</span> <span className="text-[#c9b491]">Khandelwal</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-base font-bold transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-[#ddc3a5] border-b-2 border-[#ddc3a5] underline underline-offset-4'
                    : 'text-white hover:text-[#ddc3a5] hover:shadow-[0_2px_10px_rgba(221,195,165,0.5)]'
                }`}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                style={{ letterSpacing: '0.02em' }}
              >
                {item.label}
              </motion.button>
            ))}
            {/* Resume and Hire Me Buttons */}
            <motion.a
              href="/Bhoomi%20khandelwal%20resume.pdf"
              download="bhoomi_khandelwal_resume.pdf"
              className="flex items-center space-x-2 px-4 py-1.5 border-2 border-[#f5e8d8] bg-[#f5e8d8] text-[#201e20] rounded-full font-medium shadow text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              <span>Resume</span>
            </motion.a>
            <button
              onClick={() => handleNavClick('contact')}
              className="flex items-center space-x-2 px-4 py-1.5 border-2 border-[#f5e8d8] text-[#f5e8d8] rounded-full font-medium shadow text-base hover:bg-[#f5e8d8] hover:text-[#201e20] transition-colors duration-200"
            >
              <Mail size={18} />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full bg-[#674846] text-[#ddc3a5]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#201e20]/95 backdrop-blur-md"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left py-2 text-base font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-[#ddc3a5] border-l-2 border-[#ddc3a5] pl-4'
                      : 'text-gray-300 hover:text-[#ddc3a5]'
                  }`}
                  whileHover={{ x: 10 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;