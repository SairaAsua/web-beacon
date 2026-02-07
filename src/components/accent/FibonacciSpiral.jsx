
import React from 'react';
import { motion } from 'framer-motion';

const FibonacciSpiral = ({ className = '', size = 400 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -30 }}
      whileInView={{ opacity: 0.1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: "easeOut" }}
      className={`absolute ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9D4EDD" stopOpacity="0.4" />
            <stop offset="33%" stopColor="#00D9FF" stopOpacity="0.3" />
            <stop offset="66%" stopColor="#00F5FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M 200 200 Q 200 150 250 150 Q 300 150 300 200 Q 300 275 225 275 Q 125 275 125 175 Q 125 50 250 50 Q 400 50 400 200"
          stroke="url(#spiralGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
};

export default FibonacciSpiral;
