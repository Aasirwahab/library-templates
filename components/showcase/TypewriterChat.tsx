'use client';
import { motion, Variants } from 'motion/react';

export default function TypewriterChat() {
  const text = "System initialized. Welcome to the future of interfaces.";
  const characters = Array.from(text);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 200 } }
  };

  return (
    <div className="flex items-center justify-center py-32 bg-[#0a0a0a] rounded-3xl border border-white/10 font-mono">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl md:text-4xl text-green-400 flex flex-wrap max-w-2xl px-8"
      >
        <span className="mr-4 text-white/30">{">"}</span>
        {characters.map((char, index) => (
          <motion.span key={index} variants={child}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          className="inline-block w-3 h-8 md:h-10 bg-green-400 ml-1 translate-y-1"
        />
      </motion.div>
    </div>
  );
}
