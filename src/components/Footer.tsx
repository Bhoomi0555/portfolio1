import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, MessageCircle, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/bhoomikhandelwal' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/bhoomikhandelwal' },
    { icon: Mail, label: 'Email', href: 'mailto:bhoomikhandelwal16@gmail.com' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/8875077255' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/bhoomi_k22?igsh=eGtpZ2xwdDh5cGE0' },
  ];

  return (
    <footer className="bg-[#201e20] relative overflow-hidden">
      {/* Wave Transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#674846"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center">
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-[#674846]/30 rounded-full hover:bg-[#ddc3a5] transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                title={social.label}
              >
                <social.icon size={24} className="text-[#ddc3a5] group-hover:text-[#201e20] transition-colors duration-200" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-300 flex items-center justify-center space-x-2"
          >
            <span>Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>by Bhoomi — 2025</span>
          </motion.p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-[#ddc3a5] text-[#201e20] rounded-full shadow-lg hover:bg-[#c9b491] transition-colors duration-200 z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;