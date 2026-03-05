
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
      className="relative flex items-center bg-white border border-[#E6DFED] rounded-full px-1 py-1 w-16 h-[30px] overflow-hidden transition-all duration-300 hover:border-[#7D6A8D]/40"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      aria-label={`Switch language, current: ${language.toUpperCase()}`}
    >
      {/* Sliding amethyst pill */}
      <motion.div
        className="absolute w-[26px] h-[22px] rounded-full bg-[#7D6A8D] z-0"
        animate={{ x: language === 'en' ? 1 : 31 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
      {/* Labels */}
      <div className="relative z-10 flex w-full justify-between px-1 text-[10px] font-display font-semibold tracking-widest">
        <span className={`flex items-center justify-center w-6 h-5 transition-colors duration-300 ${language === 'en' ? 'text-white' : 'text-[#1A1423]/40'}`}>
          EN
        </span>
        <span className={`flex items-center justify-center w-6 h-5 transition-colors duration-300 ${language === 'es' ? 'text-white' : 'text-[#1A1423]/40'}`}>
          ES
        </span>
      </div>
    </motion.button>
  );
};

export default LanguageSwitcher;
