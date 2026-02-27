
import React from 'react';
import { motion } from 'framer-motion';
import FibonacciSpiral from '../accent/FibonacciSpiral';
import { useLanguage } from '../../context/LanguageContext';

const AnalysisSection = () => {
    const { content } = useLanguage();
    const section = content.analysis;

    const highlightAccent = (text, accent) => {
        if (!accent) return text;
        const escapedAccent = accent.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const parts = text.split(new RegExp(`(${escapedAccent})`, 'gi'));

        return parts.map((part, index) => {
            if (part.toLowerCase() === accent.toLowerCase()) {
                return (
                    <span
                        key={index}
                        className="font-semibold bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent"
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
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-violet-950/50 to-fuchsia-950/30" />

            {/* Decorative accents */}
            <FibonacciSpiral className="top-1/3 -left-24 opacity-10" size={400} />

            {/* Ambient glow */}
            <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-violet-500/5 blur-3xl" />

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
                        className="inline-block text-xs font-bold tracking-[0.3em] text-pink-400/70 uppercase mb-6"
                    >
                        Research
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

                {/* "Harmonically Intentional" callout */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mt-20 p-8 rounded-2xl border border-violet-500/20 bg-violet-500/5 backdrop-blur-sm text-center"
                >
                    <p className="text-2xl md:text-3xl font-light tracking-wider bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
                        Harmonically Intentional
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AnalysisSection;
