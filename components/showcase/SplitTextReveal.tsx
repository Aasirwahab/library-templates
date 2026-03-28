'use client';
import { motion, Variants } from 'motion/react';

export default function SplitTextReveal() {
  const text = "Award Winning Typography";
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const child: Variants = {
    hidden: { y: "120%", rotate: 5 },
    visible: { y: "0%", rotate: 0, transition: { type: "spring", damping: 20, stiffness: 100 } }
  };

  return (
    <div className="flex items-center justify-center py-32 bg-[#111] rounded-3xl border border-white/10">
      <motion.h2
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-5xl md:text-7xl font-display font-bold text-white flex flex-wrap justify-center gap-x-4 overflow-hidden px-4 text-center"
      >
        {words.map((word, index) => (
          <span key={index} className="overflow-hidden inline-block pb-2">
            <motion.span variants={child} className="inline-block origin-bottom-left">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h2>
    </div>
  );
}
