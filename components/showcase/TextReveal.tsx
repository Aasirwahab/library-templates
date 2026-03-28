'use client';
import { motion } from 'motion/react';

export default function TextReveal({ text, className = '' }: { text: string; className?: string }) {
  const words = text.split(" ");
  
  return (
    <div className={`flex flex-wrap gap-x-2 gap-y-1 ${className}`}>
      {words.map((word, i) => (
        <div key={i} className="overflow-hidden pb-1">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: i * 0.04, 
              ease: [0.33, 1, 0.68, 1] 
            }}
            viewport={{ once: true, margin: "-10%" }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </div>
      ))}
    </div>
  );
}
