'use client';
import { motion } from 'motion/react';

export default function AuroraText() {
  return (
    <div className="relative flex items-center justify-center py-32 bg-[#050505] overflow-hidden rounded-3xl border border-white/10">
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="text-6xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-[length:200%_auto] bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 relative z-10"
      >
        Lumina Glow
      </motion.div>
      
      {/* Background blur for glow */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-0 opacity-40 blur-[80px] bg-[length:200%_auto] bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 pointer-events-none"
      />
    </div>
  );
}
