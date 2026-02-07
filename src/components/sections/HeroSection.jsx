
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Apple, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import BioluminescentGlow from '../accent/BioluminescentGlow';
import MentalStatesAnimation from '../accent/MentalStatesAnimation';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';
import { useLanguage } from '../../context/LanguageContext';
import { useMode } from '../../context/ModeContext';

const HeroSection = ({ skipToBeacon = false }) => {
  const { content, language } = useLanguage();
  const { mode } = useMode();
  const { toast } = useToast();
  const [animationPhase, setAnimationPhase] = useState(skipToBeacon ? 'beacon' : 'words'); // 'words' | 'remember' | 'beacon'

  const isSunMode = mode === 'sun';
  const isStarMode = mode === 'star';
  const isDarkMode = !isSunMode; // moon and star are both dark

  const handleDownload = (platform) => {
    toast({
      title: "Download Coming Soon",
      description: `🚧 ${platform} download isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
    });
  };

  // Reset animation when mode changes (but respect skipToBeacon)
  useEffect(() => {
    setAnimationPhase(skipToBeacon ? 'beacon' : 'words');
  }, [mode, skipToBeacon]);

  // Phase transitions: words -> remember (2s) -> beacon
  useEffect(() => {
    if (animationPhase === 'remember') {
      const timer = setTimeout(() => {
        setAnimationPhase('beacon');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [animationPhase]);

  // Get background class based on mode
  const getBackgroundClass = () => {
    if (isStarMode) return 'bg-gradient-to-br from-slate-900 via-violet-950 to-fuchsia-950';
    if (isSunMode) return 'bg-pearly-cream';
    return 'bg-gray-900';
  };

  // Get overlay class based on mode
  const getOverlayClass = () => {
    if (isStarMode) return 'bg-gradient-to-b from-violet-900/30 via-fuchsia-900/20 to-pink-900/30';
    if (isSunMode) return 'bg-gradient-to-b from-amber-50/50 via-white/30 to-amber-100/50';
    return 'bg-cosmic-overlay';
  };

  return (
    <>
      <Helmet>
        <title>Beacon - Harmonic Resonance Wellness</title>
        <meta
          name="description"
          content={content.hero.subheading}
        />
      </Helmet>

      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-1000 ${getBackgroundClass()}`}>
        {/* Background Image/Video with Overlay */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {isSunMode ? (
              <img
                src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1"
                alt="Golden sunlight through trees"
                className="w-full h-full object-cover opacity-95"
              />
            ) : isStarMode ? (
              <img
                src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986"
                alt="Starry night sky with purple hues"
                className="w-full h-full object-cover opacity-60"
              />
            ) : (
              <img
                src="https://images.unsplash.com/photo-1656232040503-5bfa790ce047"
                alt="Bioluminescent fractal patterns"
                className="w-full h-full object-cover opacity-80"
              />
            )}
            <div className={`absolute inset-0 ${getOverlayClass()}`} />
            {isDarkMode && <div className="absolute inset-0 bg-noise-texture opacity-50" />}
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlay for Text Readability */}
        <motion.div
          className={`absolute inset-0 z-[1] ${isSunMode ? 'bg-pearly-gradient' : 'bg-pearly-gradient'}`}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: animationPhase !== 'words' ? 0.4 : 0.2 }}
          transition={{ duration: 3 }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center w-full min-h-[500px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {animationPhase === 'words' && (
              <motion.div
                key={`animation-${mode}`}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
                className="flex flex-col items-center"
              >
                <MentalStatesAnimation onComplete={() => setAnimationPhase('remember')} />

                {/* Skip Intro Button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                  onClick={() => setAnimationPhase('beacon')}
                  className={`mt-8 text-xs tracking-[0.15em] uppercase transition-all duration-300 border-b pb-1 hover:scale-105 ${isSunMode
                    ? 'text-gray-500 hover:text-gray-800 border-gray-300 hover:border-gray-800'
                    : 'text-white/40 hover:text-white/70 border-white/20 hover:border-white/50'
                    }`}
                >
                  {language === 'es' ? 'Omitir intro' : 'Skip intro'}
                </motion.button>
              </motion.div>
            )}

            {animationPhase === 'remember' && (
              <motion.div
                key={`remember-${mode}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95, filter: 'blur(8px)', transition: { duration: 1 } }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col items-center justify-center"
              >
                <BioluminescentGlow intensity="strong">
                  <motion.h1
                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className={`text-6xl md:text-8xl lg:text-9xl font-light tracking-widest lowercase ${isSunMode ? 'text-gray-800' : 'text-white'
                      }`}
                  >
                    {content.hero.final.remember}
                  </motion.h1>
                </BioluminescentGlow>
              </motion.div>
            )}

            {animationPhase === 'beacon' && (
              <motion.div
                key={`beacon-final-${mode}`}
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
                  className={`text-xl md:text-2xl lg:text-3xl font-light tracking-[0.5em] uppercase mb-4 ${isSunMode ? 'text-gray-600' : 'text-white/80'
                    }`}
                >
                  Harmonic
                </motion.h2>

                {/* Beacon Brand Name */}
                <BioluminescentGlow intensity="strong">
                  <motion.h1
                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(12px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`text-6xl md:text-8xl lg:text-9xl font-light tracking-widest mb-12 ${isSunMode ? 'text-gray-800' : 'text-white'
                      }`}
                  >
                    Beacon
                  </motion.h1>
                </BioluminescentGlow>

                {/* Download CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={() => handleDownload('App Store')}
                      className={`group w-full sm:w-auto backdrop-blur-sm border px-8 py-6 text-base font-medium rounded-lg transition-all duration-300 min-w-[240px] ${isSunMode
                        ? 'bg-gray-800/10 border-gray-800/20 text-gray-800 hover:bg-gray-800/20'
                        : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                        }`}
                    >
                      <Apple className="mr-3 h-5 w-5" />
                      <span>{content.cta.buttonAppStore}</span>
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={() => handleDownload('Google Play')}
                      className={`group w-full sm:w-auto px-8 py-6 text-base font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 min-w-[240px] ${isSunMode
                        ? 'bg-gray-800 text-white hover:bg-gray-700'
                        : 'bg-white text-gray-900 hover:bg-pearly-cream'
                        }`}
                    >
                      <Smartphone className="mr-3 h-5 w-5" />
                      <span>{content.cta.buttonGooglePlay}</span>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Link to Theory Page */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  <Link
                    to="/teoria"
                    className={`text-sm tracking-[0.15em] uppercase transition-colors duration-300 border-b pb-1 ${isSunMode
                      ? 'text-gray-500 hover:text-iridescent-violet border-gray-300 hover:border-iridescent-violet'
                      : 'text-white/50 hover:text-iridescent-teal border-white/20 hover:border-iridescent-teal'
                      }`}
                  >
                    {content.nav.theory}
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
