
import React from 'react';
import { motion } from 'framer-motion';
import IridescentDivider from '../accent/IridescentDivider';
import { useLanguage } from '../../context/LanguageContext';

const ExperienceSection = () => {
    const { content } = useLanguage();
    const section = content.experience;

    const highlightAccent = (text, accent) => {
        if (!accent) return text;
        const escapedAccent = accent.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const parts = text.split(new RegExp(`(${escapedAccent})`, 'gi'));

        return parts.map((part, index) => {
            if (part.toLowerCase() === accent.toLowerCase()) {
                return (
                    <span
                        key={index}
                        className="font-medium bg-gradient-to-r from-fuchsia-400 via-pink-400 to-amber-300 bg-clip-text text-transparent"
                    >
                        {part}
                    </span>
                );
            }
            return part;
        });
    };

    return (
        <section className="relative py-32 px-6 overflow-hidden">
            {/* Background - subtle shift from previous section */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-fuchsia-950/30 to-slate-900" />

            {/* Ambient glow - offset for visual rhythm */}
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-fuchsia-500/5 blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-3xl" />

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-block text-xs font-bold tracking-[0.3em] text-fuchsia-400/70 uppercase mb-6"
                    >
                        Resonant Surface
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-light text-white tracking-wide">
                        {section.heading}
                    </h2>
                </motion.div>

                {/* Paragraphs */}
                <div className="space-y-12">
                    {section.paragraphs.map((paragraph, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                                {highlightAccent(paragraph.text, paragraph.accent)}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom divider */}
                <div className="mt-24">
                    <IridescentDivider />
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
