
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import BioluminescentGlow from '../accent/BioluminescentGlow';
import HarmonicVisualization from '../accent/HarmonicVisualization';
import { useLanguage } from '../../context/LanguageContext';

const HeroSection = () => {
  const { content } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Beacon — Harmonic Information Theory</title>
        <meta name="description" content={content.hero.subheading} />
      </Helmet>

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#C9B8EB]">
        <HarmonicVisualization />

        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(180,160,210,0.2) 100%)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="font-display text-sm md:text-base tracking-[0.5em] uppercase text-[#6B50A0]/80 mb-5"
            >
              Harmonic
            </motion.p>

            <BioluminescentGlow>
              <motion.h1
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.6, ease: 'easeOut' }}
                className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-widest text-[#1A1030] mb-8"
              >
                Beacon
              </motion.h1>
            </BioluminescentGlow>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9 }}
              className="font-body text-lg md:text-xl text-[#1A1030]/60 font-light italic max-w-2xl mx-auto leading-relaxed"
            >
              {content.hero.subheading}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="mt-20"
            >
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-6 h-10 rounded-full border border-[#6B50A0]/30 flex items-start justify-center p-2 mx-auto"
              >
                <motion.div
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-1 h-2 rounded-full bg-[#6B50A0]/60"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
