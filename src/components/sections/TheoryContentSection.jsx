
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const highlightAccent = (text, accent) => {
    if (!accent) return text;
    const escaped = accent.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
    return parts.map((part, i) =>
        part.toLowerCase() === accent.toLowerCase() ? (
            <mark key={i} className="font-medium text-[#1A1030] bg-[#A78BFA]/40 rounded-sm px-0.5 not-italic"
                style={{ boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>
                {part}
            </mark>
        ) : part
    );
};

const TheoryContentSection = () => {
    const { content } = useLanguage();
    const section = content.harmonicTheory;

    return (
        <section id="theory" className="relative py-40 px-6 bg-[#D8CBF0]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-400/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="text-center mb-24">
                    <span className="font-display text-[10px] font-semibold tracking-[0.35em] text-[#6B50A0]/80 uppercase block mb-5">Foundation</span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#1A1030] tracking-tight mb-6">{section.heading}</h2>
                    <p className="font-body text-lg text-[#1A1030]/55 italic max-w-xl mx-auto leading-relaxed">{section.subtitle}</p>
                </motion.div>
                <div className="space-y-14">
                    {section.paragraphs.map((paragraph, index) => (
                        <motion.p key={index} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: index * 0.08 }}
                            className="font-body text-lg md:text-xl text-[#1A1030]/75 leading-[1.85] max-w-[65ch] mx-auto">
                            {highlightAccent(paragraph.text, paragraph.accent)}
                        </motion.p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TheoryContentSection;
