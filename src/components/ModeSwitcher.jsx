
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Star } from 'lucide-react';
import { useMode } from '../context/ModeContext';

const ModeSwitcher = () => {
    const { mode, setMode } = useMode();

    const modes = [
        {
            id: 'moon',
            Icon: Moon,
            bgClass: 'bg-gradient-to-br from-indigo-800 via-purple-900 to-slate-900 shadow-lg shadow-purple-900/50',
            iconClass: 'text-indigo-200',
            glowColor: 'rgba(139, 92, 246, 0.6)'
        },
        {
            id: 'sun',
            Icon: Sun,
            bgClass: 'bg-gradient-to-br from-amber-200 via-yellow-300 to-orange-300 shadow-lg shadow-amber-200/50',
            iconClass: 'text-amber-700',
            glowColor: 'rgba(251, 191, 36, 0.6)'
        },
        {
            id: 'star',
            Icon: Star,
            bgClass: 'bg-gradient-to-br from-violet-500 via-fuchsia-400 to-pink-400 shadow-lg shadow-fuchsia-400/50',
            iconClass: 'text-white',
            glowColor: 'rgba(232, 121, 249, 0.6)'
        }
    ];

    const currentMode = modes.find(m => m.id === mode) || modes[0];

    return (
        <div className="flex items-center gap-2">
            {modes.map((modeOption) => {
                const isActive = mode === modeOption.id;
                const Icon = modeOption.Icon;

                return (
                    <motion.button
                        key={modeOption.id}
                        onClick={() => setMode(modeOption.id)}
                        className={`relative flex items-center justify-center rounded-full transition-all duration-500 ${isActive
                                ? `w-10 h-10 ${modeOption.bgClass}`
                                : 'w-8 h-8 bg-gray-700/50 hover:bg-gray-600/50'
                            }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`Switch to ${modeOption.id} mode`}
                    >
                        <motion.div
                            initial={false}
                            animate={{
                                scale: isActive ? [1, 1.1, 1] : 1,
                                rotate: modeOption.id === 'star' && isActive ? [0, 360] : 0
                            }}
                            transition={{
                                duration: modeOption.id === 'star' ? 4 : 0.5,
                                ease: "easeInOut",
                                repeat: modeOption.id === 'star' && isActive ? Infinity : 0
                            }}
                        >
                            {/* Breathing animation for star mode */}
                            {modeOption.id === 'star' && isActive ? (
                                <motion.div
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.8, 1, 0.8]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Icon className={`w-5 h-5 ${modeOption.iconClass}`} fill="currentColor" />
                                </motion.div>
                            ) : (
                                <Icon className={`${isActive ? 'w-5 h-5' : 'w-4 h-4'} ${isActive ? modeOption.iconClass : 'text-gray-400'}`} />
                            )}
                        </motion.div>

                        {/* Glow effect for active mode */}
                        {isActive && (
                            <motion.div
                                className="absolute inset-0 rounded-full opacity-50"
                                animate={{
                                    boxShadow: `0 0 20px ${modeOption.glowColor}`
                                }}
                            />
                        )}
                    </motion.button>
                );
            })}
        </div>
    );
};

export default ModeSwitcher;
