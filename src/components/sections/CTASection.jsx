
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Apple, Smartphone } from 'lucide-react';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';
import { useLanguage } from '../../context/LanguageContext';

const CTASection = () => {
  const { toast } = useToast();
  const { content, language } = useLanguage();

  const handleDownload = (platform) => {
    toast({
      title: "Download Coming Soon",
      description: `🚧 ${platform} download isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
    });
  };

  return (
    <section className="relative w-full bg-gray-900 overflow-hidden py-16 lg:py-24">
      {/* Background with seamless blend to Hero */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1691435420908-9371e9cadc28"
          alt="Abstract organic flowing forms representing natural harmonics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-gray-900/0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
        >
          <div className="mb-10">
            <AnimatePresence mode="wait">
              <motion.h2
                key={`cta-head-${language}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-semibold text-white tracking-wide mb-4"
              >
                {content.cta.headline}
              </motion.h2>
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
              <motion.p
                key={`cta-sub-${language}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg text-white/60 font-light leading-relaxed max-w-2xl mx-auto"
              >
                {content.cta.subheading}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={() => handleDownload('App Store')}
                className="group w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-6 text-base font-medium rounded-lg transition-all duration-300 min-w-[240px]"
              >
                <Apple className="mr-3 h-5 w-5" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`btn-app-${language}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {content.cta.buttonAppStore}
                  </motion.span>
                </AnimatePresence>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={() => handleDownload('Google Play')}
                className="group w-full sm:w-auto bg-white text-gray-900 hover:bg-pearly-cream px-8 py-6 text-base font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 min-w-[240px]"
              >
                <Smartphone className="mr-3 h-5 w-5" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`btn-play-${language}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {content.cta.buttonGooglePlay}
                  </motion.span>
                </AnimatePresence>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
