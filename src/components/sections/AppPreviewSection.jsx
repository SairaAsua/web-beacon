
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, Music, Headphones } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useMode } from '../../context/ModeContext';

const AppPreviewSection = () => {
    const { content } = useLanguage();
    const { mode } = useMode();
    const [activeTab, setActiveTab] = useState(0);

    const isSunMode = mode === 'sun';

    const features = [
        {
            id: 'live',
            icon: Radio,
            image: '/Captura de pantalla 2026-02-06 031711.png',
            ...content.preview?.features?.live
        },
        {
            id: 'meditations',
            icon: Music,
            image: '/Captura de pantalla 2026-02-06 031723.png',
            ...content.preview?.features?.meditations
        },
        {
            id: 'audioMix',
            icon: Headphones,
            image: '/Captura de pantalla 2026-02-06 031744.png',
            ...content.preview?.features?.audioMix
        }
    ];

    return (
        <section className={`relative py-24 px-6 overflow-hidden transition-colors duration-1000 ${isSunMode
            ? 'bg-gradient-to-b from-amber-50 via-white to-amber-50'
            : 'bg-gradient-to-b from-slate-900 via-violet-950/50 to-slate-900'
            }`}>
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${isSunMode ? 'bg-amber-200/30' : 'bg-violet-500/10'
                    }`} />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl md:text-5xl font-light tracking-wide mb-4 ${isSunMode ? 'text-gray-800' : 'text-white'
                        }`}>
                        {content.preview?.heading || 'Explore the App'}
                    </h2>
                    <p className={`text-lg font-light max-w-2xl mx-auto ${isSunMode ? 'text-gray-600' : 'text-white/60'
                        }`}>
                        {content.preview?.subheading || 'Discover what awaits inside Beacon'}
                    </p>
                </motion.div>

                {/* Feature Tabs */}
                <div className="flex justify-center gap-2 md:gap-4 mb-12">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const isActive = activeTab === index;
                        return (
                            <motion.button
                                key={feature.id}
                                onClick={() => setActiveTab(index)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${isActive
                                    ? isSunMode
                                        ? 'bg-gray-800 text-white shadow-lg'
                                        : 'bg-violet-500 text-white shadow-lg shadow-violet-500/30'
                                    : isSunMode
                                        ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                                    }`}
                            >
                                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                                <span className="hidden md:inline">{feature.title}</span>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Content Area */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Screenshot */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className={`absolute inset-0 rounded-3xl blur-2xl ${isSunMode ? 'bg-amber-300/20' : 'bg-violet-500/20'
                            }`} />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="relative"
                            >
                                <div className={`relative rounded-3xl overflow-hidden shadow-2xl ${isSunMode ? 'shadow-gray-300/50' : 'shadow-violet-500/20'
                                    }`}>
                                    {/* Phone frame effect */}
                                    <div className={`absolute inset-0 rounded-3xl border-4 ${isSunMode ? 'border-gray-200' : 'border-white/10'
                                        }`} />
                                    <img
                                        src={features[activeTab].image}
                                        alt={features[activeTab].title}
                                        className="w-full h-auto rounded-3xl"
                                    />
                                    {/* Glassmorphism overlay */}
                                    <div className={`absolute inset-0 rounded-3xl ${isSunMode
                                        ? 'bg-gradient-to-t from-white/20 to-transparent'
                                        : 'bg-gradient-to-t from-violet-900/20 to-transparent'
                                        }`} />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* Feature Description */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${isSunMode ? 'bg-amber-100 text-amber-700' : 'bg-violet-500/20 text-violet-300'
                                    }`}>
                                    {React.createElement(features[activeTab].icon, { className: 'w-4 h-4' })}
                                    <span className="text-sm font-medium uppercase tracking-wider">
                                        {features[activeTab].badge || features[activeTab].title}
                                    </span>
                                </div>

                                <h3 className={`text-3xl md:text-4xl font-light mb-6 ${isSunMode ? 'text-gray-800' : 'text-white'
                                    }`}>
                                    {features[activeTab].title}
                                </h3>

                                <p className={`text-lg leading-relaxed mb-8 ${isSunMode ? 'text-gray-600' : 'text-white/70'
                                    }`}>
                                    {features[activeTab].description}
                                </p>

                                {/* Feature highlights */}
                                <ul className="space-y-3">
                                    {features[activeTab].highlights?.map((highlight, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className={`flex items-center gap-3 ${isSunMode ? 'text-gray-700' : 'text-white/80'
                                                }`}
                                        >
                                            <span className={`w-1.5 h-1.5 rounded-full ${isSunMode ? 'bg-amber-500' : 'bg-violet-400'
                                                }`} />
                                            {highlight}
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Expanded Meditation Details */}
                                {features[activeTab].id === 'meditations' && features[activeTab].categories && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="mt-8 space-y-6"
                                    >
                                        <div>
                                            <h4 className={`text-sm font-medium uppercase tracking-wider mb-3 ${isSunMode ? 'text-gray-500' : 'text-white/50'}`}>
                                                {features[activeTab].sessionType}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {features[activeTab].categories.map((cat, i) => (
                                                    <span key={i} className={`text-xs px-3 py-1 rounded-full border ${isSunMode
                                                            ? 'border-gray-300 text-gray-600 bg-white/50'
                                                            : 'border-white/10 text-white/70 bg-white/5'
                                                        }`}>
                                                        {cat}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <h4 className={`text-sm font-medium uppercase tracking-wider mb-2 ${isSunMode ? 'text-gray-500' : 'text-white/50'}`}>
                                                    Durations
                                                </h4>
                                                <div className="space-y-1">
                                                    {features[activeTab].durations.map((dur, i) => (
                                                        <div key={i} className={`text-sm ${isSunMode ? 'text-gray-700' : 'text-white/80'}`}>
                                                            {dur}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className={`text-sm font-medium uppercase tracking-wider mb-2 ${isSunMode ? 'text-gray-500' : 'text-white/50'}`}>
                                                    Languages
                                                </h4>
                                                <div className="flex gap-2">
                                                    {features[activeTab].languages.map((lang, i) => (
                                                        <span key={i} className={`text-sm ${isSunMode ? 'text-gray-700' : 'text-white/80'}`}>
                                                            {lang}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AppPreviewSection;
