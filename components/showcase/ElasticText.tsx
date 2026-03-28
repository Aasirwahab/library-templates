'use client';
import { motion } from 'motion/react';

export default function ElasticText() {
  const text = "Elastic";
  const characters = Array.from(text);

  return (
    <div className="flex items-center justify-center py-32 bg-[#1a1a1a] rounded-3xl border border-white/10">
      <h2 className="text-7xl md:text-9xl font-display font-bold text-white flex cursor-default">
        {characters.map((char, index) => (
          <motion.span
            key={index}
            whileHover={{
              scaleY: [1, 1.5, 0.8, 1.2, 1],
              scaleX: [1, 0.8, 1.2, 0.9, 1],
              color: "#a855f7", // purple-500
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1]
            }}
            className="inline-block origin-bottom"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h2>
    </div>
  );
}
