'use client';
import { useState, useRef } from 'react';
import { motion, useSpring } from 'motion/react';

export default function HoverImageLink({ 
  text = "Creative Studio", 
  imgSrc = "https://picsum.photos/seed/creative/600/400" 
}: { 
  text?: string; 
  imgSrc?: string; 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <a 
      ref={ref}
      href="#"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative inline-block py-4 border-b border-white/20 text-5xl md:text-7xl font-display font-bold text-white/50 hover:text-white transition-colors duration-500"
    >
      {text}
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          scale: isHovered ? 1 : 0.8,
        }}
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        className="absolute top-0 left-0 pointer-events-none z-50 w-64 h-40 md:w-80 md:h-48 rounded-xl overflow-hidden shadow-2xl"
      >
        <img src={imgSrc} alt="Preview" className="w-full h-full object-cover" />
      </motion.div>
    </a>
  );
}
