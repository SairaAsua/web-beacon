
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
        toast({ title: 'Coming Soon', description: `${platform} download is on the way!` });
    };

    return (
        <section id="download" className="relative py-40 px-6 bg-[#D8CBF0] border-t border-[#B8A8DA]">
            <div className="relative z-10 max-w-3xl mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
                    <span className="font-display text-[10px] font-semibold tracking-[0.35em] text-[#6B50A0]/80 uppercase block mb-5">Download</span>
                    <h2 className="font-display text-3xl md:text-4xl font-light text-[#1A1030] tracking-tight mb-5">{content.cta.headline}</h2>
                    <p className="font-body text-lg text-[#1A1030]/55 italic leading-relaxed mb-14 max-w-xl mx-auto">{content.cta.subheading}</p>
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button onClick={() => handleDownload('App Store')}
                                className="flex items-center gap-2 px-8 py-5 text-sm font-display font-medium bg-[#6B50A0] hover:bg-[#5a3f8f] text-white rounded-full shadow-[0_4px_24px_rgba(107,80,160,0.3)] transition-all duration-300 min-w-[220px]">
                                <Apple className="w-4 h-4" strokeWidth={1.5} />
                                {content.cta.buttonAppStore}
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button onClick={() => handleDownload('Google Play')}
                                className="flex items-center gap-2 px-8 py-5 text-sm font-display font-medium bg-transparent border-2 border-[#6B50A0] text-[#6B50A0] hover:bg-[#6B50A0] hover:text-white rounded-full transition-all duration-300 min-w-[220px]">
                                <Smartphone className="w-4 h-4" strokeWidth={1.5} />
                                {content.cta.buttonGooglePlay}
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default FooterCTA;
