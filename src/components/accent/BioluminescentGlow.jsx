
import React from 'react';
import { motion } from 'framer-motion';

const BioluminescentGlow = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BioluminescentGlow;
