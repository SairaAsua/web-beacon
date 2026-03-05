
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

const FloatingNav = () => {
    const { language, content } = useLanguage();
    const [visible, setVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const sections = [
        { id: 'theory', label: language === 'es' ? 'Teoría' : 'Theory' },
        { id: 'experience', label: language === 'es' ? 'Experiencia' : 'Experience' },
        { id: 'analysis', label: language === 'es' ? 'Análisis' : 'Analysis' },
        { id: 'app', label: 'App' },
        { id: 'download', label: language === 'es' ? 'Descargar' : 'Download' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > window.innerHeight * 0.7);
            const sectionIds = ['hero', ...sections.map(s => s.id)];
            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const el = document.getElementById(sectionIds[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= window.innerHeight * 0.4) { setActiveSection(sectionIds[i]); break; }
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.nav
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.25 }}
                    className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between py-3 px-6 bg-[#C9B8EB] border-b border-[#B8A8DA]"
                >
                    {/* Brand */}
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="font-display text-sm font-medium tracking-widest text-[#1A1030]/70 hover:text-[#6B50A0] transition-colors duration-300 min-w-[80px]"
                    >
                        Harmonic Beacon
                    </button>

                    {/* Section links */}
                    <div className="flex items-center gap-1">
                        {sections.map((section) => {
                            const isActive = activeSection === section.id;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`relative px-3 py-1.5 text-xs tracking-wider uppercase font-display transition-all duration-300 rounded-full ${isActive ? 'text-[#6B50A0]' : 'text-[#1A1030]/50 hover:text-[#6B50A0]/80'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute inset-0 rounded-full bg-[#6B50A0]/10 border border-[#6B50A0]/25"
                                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{section.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right – login + lang */}
                    <div className="flex items-center gap-3 min-w-[80px] justify-end">
                        <a
                            href="https://beacon.altermundi.net"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:block px-3 py-1.5 rounded-full text-xs font-display font-medium transition-all duration-300 border border-[#6B50A0]/50 text-[#6B50A0] hover:bg-[#6B50A0] hover:text-white"
                        >
                            {content.login || 'Login'}
                        </a>
                        <LanguageSwitcher />
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default FloatingNav;
