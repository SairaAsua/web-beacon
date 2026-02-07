
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FibonacciSpiral from '@/components/accent/FibonacciSpiral';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';

const TheoryPage = () => {
    const { content, language } = useLanguage();

    const highlightAccent = (text, accent) => {
        if (!accent) return text;
        const escapedAccent = accent.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const parts = text.split(new RegExp(`(${escapedAccent})`, 'gi'));

        return parts.map((part, index) => {
            if (part.toLowerCase() === accent.toLowerCase()) {
                return (
                    <span
                        key={index}
                        className="text-iridescent-violet font-medium bg-gradient-to-r from-iridescent-violet via-iridescent-teal to-iridescent-turquoise bg-clip-text text-transparent"
                    >
                        {part}
                    </span>
                );
            }
            return part;
        });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm font-medium">Beacon</span>
                    </Link>
                    <LanguageSwitcher variant="dark" />
                </div>
            </header>

            {/* Content */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                {/* Background Accents */}
                <FibonacciSpiral className="top-1/4 -right-32 opacity-20" size={500} />
                <FibonacciSpiral className="bottom-1/4 -left-32 opacity-20 rotate-180" size={500} />

                <div className="relative max-w-4xl mx-auto px-6 md:px-12">
                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block text-xs font-bold tracking-[0.2em] text-iridescent-violet uppercase mb-4"
                        >
                            Beacon
                        </motion.span>
                        <h1 className="text-3xl md:text-5xl font-light text-gray-900 tracking-wide">
                            {language === 'es' ? 'Teoría Armónica Resonante' : 'Harmonic Resonance Theory'}
                        </h1>
                    </motion.div>

                    {/* Paragraphs */}
                    <div className="space-y-16">
                        {content.theory.paragraphs.map((paragraph, index) => (
                            <motion.div
                                key={`${language}-p-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                            >
                                <p className="text-lg md:text-xl text-gray-600 leading-loose font-light">
                                    {highlightAccent(paragraph.text, paragraph.accent)}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Back to Home CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mt-20 text-center"
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-iridescent-violet hover:text-iridescent-teal transition-colors text-sm tracking-widest uppercase"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            {language === 'es' ? 'Volver a Beacon' : 'Back to Beacon'}
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default TheoryPage;
