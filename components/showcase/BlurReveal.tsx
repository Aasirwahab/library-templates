'use client';
import { motion, Variants } from 'motion/react';

export default function BlurReveal() {
  const text = "Focus on what matters.";
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const child: Variants = {
    hidden: { filter: "blur(20px)", opacity: 0, y: 20 },
    visible: { filter: "blur(0px)", opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="flex items-center justify-center py-32 bg-[#050505] rounded-3xl border border-white/10">
      <motion.h2
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-5xl md:text-7xl font-display font-bold text-white flex flex-wrap justify-center gap-x-4 px-4 text-center"
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={child} className="inline-block">
            {word}
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
}
