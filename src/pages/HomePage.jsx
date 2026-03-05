
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import TheoryContentSection from '@/components/sections/TheoryContentSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import AnalysisSection from '@/components/sections/AnalysisSection';
import AppPreviewSection from '@/components/sections/AppPreviewSection';
import FooterCTA from '@/components/sections/FooterCTA';
import FloatingNav from '@/components/FloatingNav';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { useLanguage } from '@/context/LanguageContext';

const HomePage = () => {
  const { content } = useLanguage();
  const [breathingPhase, setBreathingPhase] = useState('inhala');

  const getBreathingText = (phase) => {
    if (phase === 'done') return '';
    return content.hero?.breathing?.[phase] || phase;
  };

  useEffect(() => {
    setBreathingPhase('inhala');
    const t1 = setTimeout(() => setBreathingPhase('exhala'), 3000);
    const t2 = setTimeout(() => setBreathingPhase('done'), 6000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#C9B8EB]">
      <Helmet><title>Harmonic Beacon</title></Helmet>
      {/* Breathing animation overlay */}
      <AnimatePresence mode="wait">
        {breathingPhase !== 'done' && (
          <motion.div
            key={breathingPhase}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-violet-950 to-fuchsia-950"
          >
            <motion.div
              className="absolute rounded-full border border-violet-400/20"
              animate={{
                scale: breathingPhase === 'inhala' ? [0.8, 1.8] : [1.8, 0.8],
                opacity: breathingPhase === 'inhala' ? [0.1, 0.4] : [0.4, 0.1],
              }}
              transition={{ duration: 3, ease: [0.4, 0, 0.2, 1] }}
              style={{ width: 350, height: 350 }}
            />
            <motion.div
              className="absolute rounded-full bg-gradient-to-r from-violet-500/15 via-fuchsia-500/15 to-pink-500/15"
              animate={{
                scale: breathingPhase === 'inhala' ? [0.9, 1.6] : [1.6, 0.9],
                opacity: breathingPhase === 'inhala' ? [0.2, 0.5] : [0.5, 0.2],
              }}
              transition={{ duration: 3, ease: [0.4, 0, 0.2, 1] }}
              style={{ width: 280, height: 280 }}
            />
            <motion.div
              className="absolute rounded-full bg-gradient-to-r from-violet-400/30 via-fuchsia-400/30 to-pink-400/30 blur-xl"
              animate={{
                scale: breathingPhase === 'inhala' ? [1, 1.4] : [1.4, 1],
                opacity: breathingPhase === 'inhala' ? [0.3, 0.7] : [0.7, 0.3],
              }}
              transition={{ duration: 3, ease: [0.4, 0, 0.2, 1] }}
              style={{ width: 200, height: 200 }}
            />
            <motion.p
              className="relative z-10 font-display text-5xl md:text-7xl font-light tracking-[0.4em] uppercase"
              style={{
                background: 'linear-gradient(135deg, rgba(196,167,231,0.9) 0%, rgba(244,184,228,0.9) 50%, rgba(235,203,139,0.7) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: breathingPhase === 'inhala' ? [0.95, 1.05] : [1.05, 0.95],
              }}
              transition={{ opacity: { duration: 0.8 }, scale: { duration: 3, ease: [0.4, 0, 0.2, 1] } }}
            >
              {getBreathingText(breathingPhase)}
            </motion.p>
            {[...Array(8)].map((_, i) => {
              const angle = (i / 8) * Math.PI * 2;
              const bx = Math.cos(angle) * 120;
              const by = Math.sin(angle) * 120;
              return (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-fuchsia-300/50"
                  style={{ left: '50%', top: '50%', marginLeft: -3, marginTop: -3 }}
                  animate={{
                    x: breathingPhase === 'inhala' ? [bx * 0.5, bx * 1.5] : [bx * 1.5, bx * 0.5],
                    y: breathingPhase === 'inhala' ? [by * 0.5, by * 1.5] : [by * 1.5, by * 0.5],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{ duration: 3, ease: [0.4, 0, 0.2, 1] }}
                />
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {breathingPhase === 'done' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <FloatingNav />
          <HeroSection />
          <TheoryContentSection />
          <ExperienceSection />
          <AnalysisSection />
          <AppPreviewSection />
          <FooterCTA />
          <Footer />
        </motion.div>
      )}
      <Toaster />
    </div>
  );
};

export default HomePage;
