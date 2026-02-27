
import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Music, Headphones } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const AppPreviewSection = () => {
    const { content } = useLanguage();

    const features = [
        {
            id: 'live',
            icon: Radio,
            ...content.preview?.features?.live
        },
        {
            id: 'meditations',
            icon: Music,
            ...content.preview?.features?.meditations
        },
        {
            id: 'audioMix',
            icon: Headphones,
            ...content.preview?.features?.audioMix
        }
    ];

    return (
        <section className="relative py-32 px-6 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-950/30 via-slate-900 to-slate-900" />

            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl bg-violet-500/5" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-block text-xs font-bold tracking-[0.3em] text-violet-400/70 uppercase mb-6"
                    >
                        App
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-4 text-white">
                        {content.preview?.heading || 'Explore the App'}
                    </h2>
                    <p className="text-lg font-light max-w-2xl mx-auto text-white/50">
                        {content.preview?.subheading || 'Discover what awaits inside Beacon'}
                    </p>
                </motion.div>

                {/* Feature Cards Grid */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-violet-500/30 transition-all duration-500"
                            >
                                {/* Hover glow */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/0 to-fuchsia-500/0 group-hover:from-violet-500/5 group-hover:to-fuchsia-500/5 transition-all duration-500" />

                                <div className="relative z-10">
                                    {/* Icon + Badge */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-violet-300" />
                                        </div>
                                        {feature.badge && (
                                            <span className="text-xs font-medium uppercase tracking-wider text-violet-400/80 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10">
                                                {feature.badge}
                                            </span>
                                        )}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl font-light mb-4 text-white">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-base text-white/60 leading-relaxed mb-6 font-light">
                                        {feature.description}
                                    </p>

                                    {/* Highlights */}
                                    <ul className="space-y-2">
                                        {feature.highlights?.map((highlight, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center gap-3 text-sm text-white/70"
                                            >
                                                <span className="w-1 h-1 rounded-full bg-violet-400 flex-shrink-0" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AppPreviewSection;
