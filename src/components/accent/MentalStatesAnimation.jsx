
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useMode } from '../../context/ModeContext';

const MentalStatesAnimation = ({ onComplete }) => {
  const { content } = useLanguage();
  const { mode } = useMode();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get prefix and states based on current mode
  const prefix = content.mentalStates?.prefix || "you don't have";
  const states = content.mentalStates?.[mode] || content.mentalStates?.moon || [
    'anxiety',
    'depression',
    'insomnia',
    'fear',
    'anguish',
    'restlessness',
    'fatigue'
  ];

  useEffect(() => {
    // Reset animation when mode changes
    setCurrentIndex(0);
  }, [mode]);

  useEffect(() => {
    // Fast cycle: ~1.5s per word for dynamic flow
    if (currentIndex >= states.length) {
      const timer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
    }, 1500); // faster pace for dynamic flow

    return () => clearTimeout(timer);
  }, [currentIndex, states.length, onComplete]);

  const isSunMode = mode === 'sun';

  return (
    <div className="relative h-64 md:h-80 w-full flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Fixed prefix title */}
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-light tracking-wider lowercase mb-4 ${isSunMode ? 'text-gray-600' : 'text-white/70'}`}>
        {prefix}
      </h2>

      {/* Animated words */}
      <div className="relative h-20 md:h-24 w-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          {currentIndex < states.length && (
            <motion.div
              key={`${mode}-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut"
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest lowercase text-center drop-shadow-lg ${isSunMode ? 'text-gray-800' : 'text-white'}`}>
                {states[currentIndex]}
              </h2>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MentalStatesAnimation;
