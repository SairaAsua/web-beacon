
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import BioluminescentGlow from '../accent/BioluminescentGlow';
import { useLanguage } from '../../context/LanguageContext';

const HeroSection = () => {
  const { content } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Beacon - Harmonic Information Theory</title>
        <meta
          name="description"
          content={content.hero.subheading}
        />
      </Helmet>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-violet-950 to-fuchsia-950">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986"
            alt="Starry night sky with purple hues"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-violet-900/30 via-fuchsia-900/20 to-pink-900/30" />
          <div className="absolute inset-0 bg-noise-texture opacity-50" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-[1] bg-pearly-gradient opacity-0.2" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center w-full min-h-[500px] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center justify-center"
          >
            {/* Harmonic Supertitle */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl font-light tracking-[0.5em] uppercase mb-4 text-white/80"
            >
              Harmonic
            </motion.h2>

            {/* Beacon Brand Name */}
            <BioluminescentGlow>
              <motion.h1
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(12px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-6xl md:text-8xl lg:text-9xl font-light tracking-widest mb-8 text-white"
              >
                Beacon
              </motion.h1>
            </BioluminescentGlow>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed italic"
            >
              {content.hero.subheading}
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="mt-16"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
              >
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-2 rounded-full bg-white/60"
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
