import React from 'react';
import { motion } from 'framer-motion';
import { Cog } from 'lucide-react';

const PageLoader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-[#201e20] flex items-center justify-center z-50"
    >
      <div className="text-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-24 h-24 mx-auto mb-6"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#ddc3a5] to-[#c9b491] p-1">
            <div className="w-full h-full rounded-full bg-[#201e20] flex items-center justify-center">
              <img
                src="/profile.jpg"
                alt="Bhoomi Khandelwal"
                className="w-[90%] h-[90%] rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Spinning Gear */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mb-6"
        >
          <Cog size={48} className="text-[#ddc3a5] mx-auto" />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white text-xl font-medium"
        >
          Loading Portfolio...
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-1 bg-[#ddc3a5] rounded-full mt-4 mx-auto"
          style={{ maxWidth: '200px' }}
        />
      </div>
    </motion.div>
  );
};

export default PageLoader;