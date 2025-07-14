import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';
import { certificates } from '../data/portfolio';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Certifications: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const [glowId, setGlowId] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleCardClick = (id: string) => {
    setSelectedCertificate(id);
    setGlowId(id);
    setTimeout(() => setGlowId(null), 400);
  };

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative flex flex-col md:flex-row items-center bg-[#201e20]/50 backdrop-blur-sm p-6 hover:bg-[#201e20]/70 transition-all duration-300 border border-[#ddc3a5]/20 hover:border-[#ddc3a5]/40 shadow-md cursor-pointer rounded-xl ${glowId === certificate.id ? 'ring-4 ring-[#ddc3a5]/60 certificate-glow certificate-laser' : ''}`}
              onClick={() => handleCardClick(certificate.id)}
            >
              {/* Animated Glow Background */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 w-32 h-32 bg-gradient-to-br from-[#ffe7b3]/60 via-[#ddc3a5]/30 to-transparent rounded-full blur-2xl opacity-60 pointer-events-none z-0 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300"></div>
              {/* Rectangle border glow on hover */}
              <div className="absolute inset-0 pointer-events-none z-10 group-hover:shadow-[0_0_16px_#ddc3a5,0_0_32px_#fff3] transition-all duration-200 rounded-xl"></div>
              {/* Left: Info */}
              <div className="flex-1 w-full md:w-1/2 pr-0 md:pr-8 mb-4 md:mb-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-[#ddc3a5] transition-colors duration-200 mb-2">
                  {certificate.title}
                </h3>
                <p className="text-sm text-gray-300 mb-1">{certificate.issuer}</p>
                <p className="text-sm text-[#ddc3a5] font-medium mb-2">{certificate.date}</p>
              </div>
              {/* Right: Image */}
              <div className="relative w-full md:w-72 h-40 flex-shrink-0 overflow-hidden shadow-lg rounded-xl">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
                />
                <div className="absolute top-3 right-3 bg-[#ddc3a5] text-[#201e20] p-2 rounded-full">
                  <Award size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for certificate view */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center modal-glow-bg"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#201e20] rounded-2xl p-6 shadow-2xl relative flex flex-col items-center modal-glow-container"
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-3 right-3 text-[#ddc3a5] hover:text-white text-2xl"
                  onClick={() => setSelectedCertificate(null)}
                >
                  &times;
                </button>
                <img
                  id="certificate-image"
                  src={certificates.find(c => c.id === selectedCertificate)?.image}
                  alt={certificates.find(c => c.id === selectedCertificate)?.title}
                  className="w-[420px] h-[300px] object-cover rounded-xl mb-6"
                />
                <button
                  className="px-6 py-2 bg-[#ddc3a5] text-[#201e20] rounded-full font-semibold hover:bg-[#c9b491] transition-colors duration-200"
                  onClick={async () => {
                    const certImg = document.getElementById('certificate-image');
                    if (!certImg) return;
                    const canvas = await html2canvas(certImg as HTMLElement, { useCORS: true });
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF({ orientation: 'landscape' });
                    const pdfWidth = pdf.internal.pageSize.getWidth();
                    const pdfHeight = pdf.internal.pageSize.getHeight();
                    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                    pdf.save(`${certificates.find(c => c.id === selectedCertificate)?.title || 'certificate'}.pdf`);
                  }}
                >
                  Download
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certifications;