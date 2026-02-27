
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center backdrop-blur-md bg-white/10 border border-white/20 shadow-soft-glow hover:shadow-bioluminescent rounded-full px-1 py-1 w-20 transition-all duration-300 group overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch language, current: ${language.toUpperCase()}`}
    >
      {/* Background slider */}
      <motion.div
        className="absolute w-[34px] h-[34px] rounded-full bg-gradient-to-br from-iridescent-violet to-iridescent-teal shadow-md z-0"
        animate={{ x: language === 'en' ? 0 : 40 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      {/* Text labels */}
      <div className="relative z-10 flex w-full justify-between px-2 text-xs font-bold tracking-widest">
        <span
          className={`flex items-center justify-center w-8 h-8 transition-colors duration-300 ${language === 'en' ? 'text-white' : 'text-gray-500'}`}
        >
          EN
        </span>
        <span
          className={`flex items-center justify-center w-8 h-8 transition-colors duration-300 ${language === 'es' ? 'text-white' : 'text-gray-500'}`}
        >
          ES
        </span>
      </div>

      {/* Iridescent shimmer effect on hover */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
    </motion.button>
  );
};

export default LanguageSwitcher;
