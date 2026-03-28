'use client';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';

const items = [
  { id: 1, title: 'Ethereal', img: 'https://picsum.photos/seed/ethereal/800/600' },
  { id: 2, title: 'Kinetic', img: 'https://picsum.photos/seed/kinetic/800/600' },
  { id: 3, title: 'Lumina', img: 'https://picsum.photos/seed/lumina/800/600' },
  { id: 4, title: 'Vortex', img: 'https://picsum.photos/seed/vortex/800/600' },
  { id: 5, title: 'Aura', img: 'https://picsum.photos/seed/aura/800/600' },
];

export default function PremiumCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden py-10">
      <motion.div 
        ref={carouselRef} 
        className="cursor-grab active:cursor-grabbing"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
          className="flex gap-6 px-10"
        >
          {items.map(item => (
            <motion.div 
              key={item.id} 
              className="min-w-[280px] md:min-w-[400px] h-[350px] md:h-[500px] rounded-3xl overflow-hidden relative group shrink-0"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
              <h3 className="absolute bottom-8 left-8 text-3xl font-display font-bold text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
