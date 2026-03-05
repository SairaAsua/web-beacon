
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

const ExperienceSection = () => {
    const { content, language } = useLanguage();
    const section = content.experience;

    return (
        <section id="experience" className="relative py-40 px-6 bg-[#C9B8EB]">
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-violet-400/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="text-center mb-24">
                    <span className="font-display text-[10px] font-semibold tracking-[0.35em] text-[#6B50A0]/80 uppercase block mb-5">
                        {language === 'es' ? 'Superficie Resonante' : 'Resonant Surface'}
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#1A1030] tracking-tight">{section.heading}</h2>
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

export default ExperienceSection;
