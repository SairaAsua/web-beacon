
import React from 'react';
import { motion } from 'framer-motion';

const IridescentDivider = () => {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="w-full h-[2px] bg-iridescent-gradient shadow-iridescent-glow origin-center"
      style={{
        backgroundSize: '200% 100%',
      }}
    />
  );
};

export default IridescentDivider;
