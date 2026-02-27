
import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Smartphone } from 'lucide-react';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';
import { useLanguage } from '../../context/LanguageContext';

const FooterCTA = () => {
    const { toast } = useToast();
    const { content } = useLanguage();

    const handleDownload = (platform) => {
        toast({
            title: "Download Coming Soon",
            description: `🚧 ${platform} download isn't implemented yet—but don't worry! It's coming soon! 🚀`,
        });
    };

    return (
        <section className="relative w-full overflow-hidden py-24 lg:py-32">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-violet-950/40 to-slate-900" />

            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/10 blur-3xl" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1 }}
                >
                    <div className="mb-10">
                        <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide mb-4">
                            {content.cta.headline}
                        </h2>
                        <p className="text-lg text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
                            {content.cta.subheading}
                        </p>
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
                                <span>{content.cta.buttonAppStore}</span>
                            </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                                onClick={() => handleDownload('Google Play')}
                                className="group w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-base font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 min-w-[240px]"
                            >
                                <Smartphone className="mr-3 h-5 w-5" />
                                <span>{content.cta.buttonGooglePlay}</span>
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default FooterCTA;
