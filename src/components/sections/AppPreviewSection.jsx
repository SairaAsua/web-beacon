
import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Music, Headphones } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const AppPreviewSection = () => {
    const { content, language } = useLanguage();

    const features = [
        { id: 'live', icon: Radio, ...content.preview?.features?.live },
        { id: 'meditations', icon: Music, ...content.preview?.features?.meditations },
        { id: 'audioMix', icon: Headphones, ...content.preview?.features?.audioMix },
    ];

    return (
        <section id="app" className="relative py-40 px-6 bg-[#C9B8EB]">
            <div className="relative z-10 max-w-6xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="text-center mb-24">
                    <span className="font-display text-[10px] font-semibold tracking-[0.35em] text-[#6B50A0]/80 uppercase block mb-5">App</span>
                    <h2 className="font-display text-4xl md:text-5xl font-light text-[#1A1030] tracking-tight mb-4">
                        {content.preview?.heading || 'Explore the App'}
                    </h2>
                    <p className="font-body text-lg text-[#1A1030]/55 italic max-w-xl mx-auto">
                        {content.preview?.subheading || 'Discover what awaits inside Beacon'}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.12 }}
                                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                                className="group bg-white/40 backdrop-blur-sm border border-white/50 rounded-2xl p-8 hover:border-white/80 hover:bg-white/60 hover:shadow-sm transition-all duration-400"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <Icon className="w-6 h-6 text-[#6B50A0] group-hover:text-[#5a3f8f] transition-colors duration-300" strokeWidth={1.5} />
                                    </div>
                                    {feature.badge && (
                                        <span className="font-display text-[10px] font-semibold uppercase tracking-wider text-[#6B50A0] border border-white/60 bg-white/30 px-2.5 py-1 rounded-full">
                                            {feature.badge}
                                        </span>
                                    )}
                                </div>
                                <h3 className="font-display text-xl font-medium text-[#1A1030] mb-3">{feature.title}</h3>
                                <div className="w-8 h-px bg-[#B8A8DA] mb-4" />
                                <p className="font-body text-base text-[#1A1030]/65 leading-relaxed mb-6">{feature.description}</p>
                                <ul className="space-y-2.5">
                                    {feature.highlights?.map((h, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm font-body text-[#1A1030]/80">
                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-[#6B50A0] flex-shrink-0" />
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-7 pt-5 border-t border-white/40">
                                    <span className="font-display text-[10px] tracking-widest uppercase text-[#6B50A0]/60">iOS &amp; Android</span>
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
