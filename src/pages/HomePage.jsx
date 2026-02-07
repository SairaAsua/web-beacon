
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import AppPreviewSection from '@/components/sections/AppPreviewSection';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ModeSwitcher from '@/components/ModeSwitcher';
import { Toaster } from '@/components/ui/toaster';
import { useMode } from '@/context/ModeContext';
import { useLanguage } from '@/context/LanguageContext';

const HomePage = () => {
  const { mode } = useMode();
  const { content } = useLanguage();
  const isSunMode = mode === 'sun';
  const isStarMode = mode === 'star';
  const [breathingPhase, setBreathingPhase] = useState('done'); // 'inhala' | 'exhala' | 'done'

  // Get translated breathing text
  const getBreathingText = (phase) => {
    if (phase === 'done') return '';
    return content.hero?.breathing?.[phase] || phase;
  };

  // Reset and start breathing sequence when entering star mode
  useEffect(() => {
    if (isStarMode) {
      setBreathingPhase('inhala');

      // After 3s show exhala (matching animation duration)
      const timer1 = setTimeout(() => {
        setBreathingPhase('exhala');
      }, 3000);

      // After 6s total, show hero content
      const timer2 = setTimeout(() => {
        setBreathingPhase('done');
      }, 6000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [isStarMode]);

  const getBackgroundClass = () => {
    if (isStarMode) return 'bg-gradient-to-br from-slate-900 via-violet-950 to-fuchsia-950';
    if (isSunMode) return 'bg-pearly-cream';
    return 'bg-gray-900';
  };

  return (
    <div className={`relative min-h-screen transition-colors duration-1000 ${getBackgroundClass()}`}>
      {/* Floating Header */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        <a
          href="https://beacon.altermundi.net"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isSunMode
            ? 'bg-amber-500/20 text-amber-800 hover:bg-amber-500/30 border border-amber-500/30'
            : 'bg-violet-500/20 text-violet-200 hover:bg-violet-500/30 border border-violet-500/30'
            }`}
        >
          {content.login || 'Login'}
        </a>
        <ModeSwitcher />
        <LanguageSwitcher />
      </div>

      {/* Star mode: Breathing animation overlay */}
      <AnimatePresence mode="wait">
        {isStarMode && breathingPhase !== 'done' && (
          <motion.div
            key={breathingPhase}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex items-center justify-center"
          >
            {/* Outer breathing ring */}
            <motion.div
              className="absolute rounded-full border border-violet-400/20"
              animate={{
                scale: breathingPhase === 'inhala' ? [0.8, 1.8] : [1.8, 0.8],
                opacity: breathingPhase === 'inhala' ? [0.1, 0.4] : [0.4, 0.1]
              }}
              transition={{
                duration: 3,
                ease: [0.4, 0, 0.2, 1]
              }}
              style={{ width: '350px', height: '350px' }}
            />

            {/* Middle breathing circle */}
            <motion.div
              className="absolute rounded-full bg-gradient-to-r from-violet-500/15 via-fuchsia-500/15 to-pink-500/15"
              animate={{
                scale: breathingPhase === 'inhala' ? [0.9, 1.6] : [1.6, 0.9],
                opacity: breathingPhase === 'inhala' ? [0.2, 0.5] : [0.5, 0.2]
              }}
              transition={{
                duration: 3,
                ease: [0.4, 0, 0.2, 1]
              }}
              style={{ width: '280px', height: '280px' }}
            />

            {/* Inner core glow */}
            <motion.div
              className="absolute rounded-full bg-gradient-to-r from-violet-400/30 via-fuchsia-400/30 to-pink-400/30 blur-xl"
              animate={{
                scale: breathingPhase === 'inhala' ? [1, 1.4] : [1.4, 1],
                opacity: breathingPhase === 'inhala' ? [0.3, 0.7] : [0.7, 0.3]
              }}
              transition={{
                duration: 3,
                ease: [0.4, 0, 0.2, 1]
              }}
              style={{ width: '200px', height: '200px' }}
            />

            {/* Inhala / Exhala text */}
            <motion.p
              className="relative z-10 text-5xl md:text-7xl font-light tracking-[0.4em] uppercase"
              style={{
                background: 'linear-gradient(135deg, rgba(196, 167, 231, 0.9) 0%, rgba(244, 184, 228, 0.9) 50%, rgba(235, 203, 139, 0.7) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: breathingPhase === 'inhala' ? [0.95, 1.05] : [1.05, 0.95]
              }}
              transition={{
                opacity: { duration: 0.8 },
                scale: { duration: 3, ease: [0.4, 0, 0.2, 1] }
              }}
            >
              {getBreathingText(breathingPhase)}
            </motion.p>

            {/* Floating particles that follow the breath */}
            {[...Array(8)].map((_, i) => {
              const angle = (i / 8) * Math.PI * 2;
              const baseX = Math.cos(angle) * 120;
              const baseY = Math.sin(angle) * 120;
              return (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-fuchsia-300/50"
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: '-3px',
                    marginTop: '-3px'
                  }}
                  animate={{
                    x: breathingPhase === 'inhala'
                      ? [baseX * 0.5, baseX * 1.5]
                      : [baseX * 1.5, baseX * 0.5],
                    y: breathingPhase === 'inhala'
                      ? [baseY * 0.5, baseY * 1.5]
                      : [baseY * 1.5, baseY * 0.5],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                />
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero content - show after breathing for star mode, or always for other modes */}
      {(!isStarMode || breathingPhase === 'done') && (
        <>
          <HeroSection skipToBeacon={isStarMode} />
          <AppPreviewSection />
        </>
      )}

      {/* Toast notifications for download buttons */}
      <Toaster />
    </div>
  );
};

export default HomePage;
