import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, X, ExternalLink, Download } from 'lucide-react';
import { certificates } from '../data/portfolio';

const Certifications: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const selectedCert = certificates.find(cert => cert.id === selectedCertificate);

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-[#59260B] to-[#674846] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="text-[#ddc3a5]">Certifications</span> & Achievements
          </h2>
          <div className="w-24 h-1 bg-[#ddc3a5] mx-auto rounded-full" />
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedCertificate(certificate.id)}
            >
              <div className="bg-[#201e20]/50 backdrop-blur-sm rounded-xl p-6 hover:bg-[#201e20]/70 transition-all duration-300 border border-[#ddc3a5]/20 hover:border-[#ddc3a5]/40">
                {/* Certificate Image */}
                <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#201e20]/60 to-transparent" />
                  
                  {/* Award Icon */}
                  <div className="absolute top-3 right-3 bg-[#ddc3a5] text-[#201e20] p-2 rounded-full">
                    <Award size={16} />
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#ddc3a5] transition-colors duration-200">
                    {certificate.title}
                  </h3>
                  <p className="text-sm text-gray-300">{certificate.issuer}</p>
                  <p className="text-sm text-[#ddc3a5] font-medium">{certificate.date}</p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ddc3a5]/10 to-[#c9b491]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCertificate && selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                className="bg-[#201e20] rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#ddc3a5] text-[#201e20] p-2 rounded-full">
                      <Award size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                      <p className="text-gray-300">{selectedCert.issuer}</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setSelectedCertificate(null)}
                    className="p-2 hover:bg-[#674846] rounded-full transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={24} className="text-gray-300" />
                  </motion.button>
                </div>

                {/* Certificate Image */}
                <div className="relative h-64 sm:h-80 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Certificate Details */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Issued by:</span>
                    <span className="text-white font-medium">{selectedCert.issuer}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Date:</span>
                    <span className="text-[#ddc3a5] font-medium">{selectedCert.date}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  {selectedCert.url && (
                    <motion.a
                      href={selectedCert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 px-6 py-3 bg-[#ddc3a5] text-[#201e20] rounded-full font-medium hover:bg-[#c9b491] transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      <span>View Certificate</span>
                    </motion.a>
                  )}
                  <motion.button
                    className="flex items-center justify-center space-x-2 px-6 py-3 bg-[#59260B] text-[#ddc3a5] rounded-full font-medium hover:bg-[#013220] transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download size={18} />
                    <span>Download</span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certifications;