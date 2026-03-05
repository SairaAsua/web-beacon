
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { language } = useLanguage();

    const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    const navLinks = [
        { id: 'theory', label: language === 'es' ? 'Teoría' : 'Theory' },
        { id: 'experience', label: language === 'es' ? 'Experiencia' : 'Experience' },
        { id: 'analysis', label: language === 'es' ? 'Análisis' : 'Analysis' },
        { id: 'app', label: 'App' },
    ];

    return (
        <footer className="bg-[#C9B8EB] border-t border-[#B8A8DA] py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-10 mb-12">
                    <div>
                        <h3 className="font-display text-base font-medium text-[#1A1030] mb-2 tracking-wide">Harmonic Beacon</h3>
                        <p className="font-body text-sm text-[#1A1030]/55 leading-relaxed max-w-xs">
                            {language === 'es'
                                ? 'Haciendo audible el patrón de interferencia de lo sutil en el plano material.'
                                : 'Making the interference pattern of the subtle audible in the material realm.'}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-display text-[10px] font-semibold tracking-[0.3em] uppercase text-[#6B50A0] mb-4">
                            {language === 'es' ? 'Navegar' : 'Navigate'}
                        </h4>
                        <ul className="space-y-2.5">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <button onClick={() => scrollToSection(link.id)} className="font-body text-sm text-[#1A1030]/55 hover:text-[#6B50A0] transition-colors duration-300">
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-display text-[10px] font-semibold tracking-[0.3em] uppercase text-[#6B50A0] mb-4">
                            {language === 'es' ? 'Conectar' : 'Connect'}
                        </h4>
                        <ul className="space-y-2.5">
                            <li>
                                <a href="https://beacon.altermundi.net" target="_blank" rel="noopener noreferrer"
                                    className="font-body text-sm text-[#1A1030]/55 hover:text-[#6B50A0] transition-colors duration-300">
                                    {language === 'es' ? 'Iniciar sesión' : 'Login'}
                                </a>
                            </li>
                            <li><span className="font-body text-sm text-[#1A1030]/30">Instagram</span></li>
                            <li><span className="font-body text-sm text-[#1A1030]/30">X / Twitter</span></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-[#B8A8DA] flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="font-body text-xs text-[#1A1030]/35">© 2026 ALTER · Harmonic Beacon</p>
                    <div className="flex gap-5">
                        <span className="font-body text-xs text-[#1A1030]/35">Privacy</span>
                        <span className="font-body text-xs text-[#1A1030]/35">Terms</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
