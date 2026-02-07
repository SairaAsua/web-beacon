
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FibonacciSpiral from '../accent/FibonacciSpiral';
import { useLanguage } from '../../context/LanguageContext';

const TheorySection = () => {
  const { content, language } = useLanguage();

  const highlightAccent = (text, accent) => {
    if (!accent) return text;
    // Escape special regex characters in the accent string
    const escapedAccent = accent.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const parts = text.split(new RegExp(`(${escapedAccent})`, 'gi'));
    
    return parts.map((part, index) => {
      if (part.toLowerCase() === accent.toLowerCase()) {
        return (
          <span 
            key={index} 
            className="text-iridescent-violet font-medium bg-gradient-to-r from-iridescent-violet via-iridescent-teal to-iridescent-turquoise bg-clip-text text-transparent"
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section id="theory-section" className="relative bg-white py-24 md:py-32 overflow-hidden scroll-mt-0">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-64 opacity-5 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1580626010648-8bf4c8978c04"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <FibonacciSpiral className="top-1/4 -right-32 opacity-20" size={500} />
      <FibonacciSpiral className="bottom-1/4 -left-32 opacity-20 rotate-180" size={500} />

      <div className="relative max-w-4xl mx-auto px-6 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={`heading-${language}`}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4"
            >
              Beacon
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-light text-gray-900 tracking-wide"
            >
              {content.theory.heading}
            </motion.h2>
          </motion.div>
        </AnimatePresence>

        <div className="space-y-16">
          {content.theory.paragraphs.map((paragraph, index) => (
            <AnimatePresence mode="wait" key={index}>
              <motion.div
                key={`${language}-p-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <p className="text-lg md:text-xl text-gray-600 leading-loose font-light">
                  {highlightAccent(paragraph.text, paragraph.accent)}
                </p>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheorySection;
