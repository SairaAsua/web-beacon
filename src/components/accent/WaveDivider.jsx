
import React from 'react';
import { motion } from 'framer-motion';

const WaveDivider = ({ className = '', inverted = false }) => {
    const width = 1440;
    const height = 60;
    const amplitude = 16;
    const frequency = 3;

    let path = `M 0 ${height / 2}`;
    for (let x = 0; x <= width; x += 4) {
        const y = height / 2 + Math.sin((x / width) * Math.PI * frequency * 2) * amplitude;
        path += ` L ${x} ${y}`;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className={`w-full overflow-hidden ${className}`}
        >
            <svg
                viewBox={`0 0 ${width} ${height}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="waveDivGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#E6DFED" stopOpacity="0" />
                        <stop offset="20%" stopColor="#C5B8D0" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="#7D6A8D" stopOpacity="0.5" />
                        <stop offset="80%" stopColor="#C5B8D0" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#E6DFED" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <motion.path
                    d={path}
                    stroke="url(#waveDivGrad)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.2, ease: 'easeInOut' }}
                />
            </svg>
        </motion.div>
    );
};

export default WaveDivider;
