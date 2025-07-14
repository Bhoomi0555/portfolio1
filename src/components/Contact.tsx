import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageCircle, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    type: 'Collaboration'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        message: '',
        type: 'Collaboration'
      });
    }, 3000);
  };

  const contactInfo = [
    { icon: MapPin, label: 'Location', value: 'Mahaveer Nagar, Jaipur' },
    { icon: Phone, label: 'Phone', value: '+91 8875077255' },
    { icon: Mail, label: 'Email', value: 'bhoomikhandelwal16@gmail.com' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#674846] to-[#201e20] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Get In <span className="text-[#ddc3a5]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#ddc3a5] mx-auto rounded-full" />
          <p className="text-gray-300 mt-4 text-lg">
            Ready to collaborate? Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new opportunities, exciting projects, 
                or just having a chat about technology and innovation.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-[#59260B]/30 rounded-lg backdrop-blur-sm hover:bg-[#59260B]/50 transition-colors duration-200"
                >
                  <div className="p-3 bg-[#ddc3a5] rounded-full">
                    <item.icon size={24} className="text-[#201e20]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/Bhoomi0555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-[#59260B]/30 rounded-full hover:bg-[#ddc3a5] transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  title="GitHub"
                >
                  <Github size={24} className="text-[#ddc3a5] group-hover:text-[#201e20] transition-colors duration-200" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/bhoomi-khandelwal-3a2918290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-[#59260B]/30 rounded-full hover:bg-[#ddc3a5] transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  title="LinkedIn"
                >
                  <Linkedin size={24} className="text-[#ddc3a5] group-hover:text-[#201e20] transition-colors duration-200" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/bhoomi_k22?igsh=eGtpZ2xwdDh5cGE0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-[#59260B]/30 rounded-full hover:bg-[#ddc3a5] transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  title="Instagram"
                >
                  <Instagram size={24} className="text-[#ddc3a5] group-hover:text-[#201e20] transition-colors duration-200" />
                </motion.a>
                <motion.a
                  href="https://wa.me/8875077255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-[#59260B]/30 rounded-full hover:bg-[#ddc3a5] transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  title="WhatsApp"
                >
                  <MessageCircle size={24} className="text-[#ddc3a5] group-hover:text-[#201e20] transition-colors duration-200" />
                </motion.a>
                <motion.a
                  href="mailto:bhoomikhandelwal16@gmail.com"
                  className="group p-3 bg-[#59260B]/30 rounded-full hover:bg-[#ddc3a5] transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  title="Email"
                >
                  <Mail size={24} className="text-[#ddc3a5] group-hover:text-[#201e20] transition-colors duration-200" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#59260B]/30 backdrop-blur-sm rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#201e20]/50 border border-[#ddc3a5]/20 rounded-lg text-white placeholder-gray-400 focus:border-[#ddc3a5] focus:outline-none transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#201e20]/50 border border-[#ddc3a5]/20 rounded-lg text-white placeholder-gray-400 focus:border-[#ddc3a5] focus:outline-none transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#201e20]/50 border border-[#ddc3a5]/20 rounded-lg text-white focus:border-[#ddc3a5] focus:outline-none transition-colors duration-200"
                >
                  <option value="Collaboration">Collaboration</option>
                  <option value="Internship">Internship</option>
                  <option value="Hiring">Hiring</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-[#201e20]/50 border border-[#ddc3a5]/20 rounded-lg text-white placeholder-gray-400 focus:border-[#ddc3a5] focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  isSubmitted
                    ? 'bg-green-600 text-white'
                    : 'bg-[#ddc3a5] text-[#201e20] hover:bg-[#c9b491]'
                } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-[#201e20] border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : isSubmitted ? (
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle size={20} />
                    <span>Message Sent!</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;