'use client';
import { useState, useRef } from 'react';
import { motion } from 'motion/react';

export default function MaskedCursorReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const size = isHovered ? 400 : 40;

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[500px] bg-[#050505] overflow-hidden flex items-center justify-center cursor-default rounded-3xl border border-white/10"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-[#333] p-8">
        <h2 className="text-5xl md:text-7xl font-display font-bold text-center tracking-tighter">
          The future of <br/> web design is here.
        </h2>
      </div>
      
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center bg-indigo-600 text-white p-8 pointer-events-none"
        animate={{
          clipPath: `circle(${size}px at ${mousePosition.x}px ${mousePosition.y}px)`
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20, mass: 0.5 }}
      >
        <h2 className="text-5xl md:text-7xl font-display font-bold text-center tracking-tighter">
          The future of <br/> web design is <span className="text-black">now.</span>
        </h2>
      </motion.div>
    </div>
  );
}
