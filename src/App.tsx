import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import { useActiveSection } from './hooks/useActiveSection';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { activeSection, setActiveSection } = useActiveSection();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-[#201e20] z-50"
          >
            {/* Laser light animated name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl font-extrabold text-center relative mb-8"
              style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.04em' }}
            >
              <span className="relative inline-block px-4 py-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#a18fff] via-[#f857a6] to-[#ff5858] animate-gradient-move">
                  Bhoomi Khandelwal
                </span>
                <span className="absolute left-0 right-0 bottom-0 h-2 bg-gradient-to-r from-[#a18fff] via-[#f857a6] to-[#ff5858] blur-lg opacity-80 animate-laser" />
              </span>
            </motion.h1>

            {/* Loader animation bar */}
            <motion.div
              className="w-16 h-2 rounded-full bg-gradient-to-r from-[#a18fff] via-[#f857a6] to-[#ff5858] animate-pulse"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
              style={{ transformOrigin: 'left' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <ScrollProgress />
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
