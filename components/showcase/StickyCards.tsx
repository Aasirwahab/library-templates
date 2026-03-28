'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StickyCards({ scroller }: { scroller?: string | Element | null }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const cardsData = [
    { title: "Design", desc: "Crafting pixel-perfect interfaces.", color: "#111111" },
    { title: "Develop", desc: "Writing clean, scalable code.", color: "#1A1A1A" },
    { title: "Deploy", desc: "Shipping to users worldwide.", color: "#222222" },
    { title: "Scale", desc: "Growing beyond boundaries.", color: "#2A2A2A" },
  ];

  useEffect(() => {
    // Ensure we only use valid DOM elements
    const validCards = cardsRef.current.filter((el): el is HTMLDivElement => el !== null && el !== undefined);
    
    if (validCards.length === 0) return;

    // Safely resolve the scroller element
    let scrollerElement: Element | Window | undefined = undefined;
    if (typeof scroller === 'string') {
      const el = document.querySelector(scroller);
      if (el) scrollerElement = el;
    } else if (scroller) {
      scrollerElement = scroller;
    }

    const ctx = gsap.context(() => {
      validCards.forEach((card, index) => {
        if (index === validCards.length - 1) return; // Don't scale the last card
        
        const nextCard = validCards[index + 1];
        if (!nextCard) return;

        const overlay = card.querySelector('.card-overlay');

        gsap.timeline({
          scrollTrigger: {
            trigger: nextCard,
            scroller: scrollerElement,
            start: "top bottom",
            end: "top 20%",
            scrub: true,
          }
        })
        .to(card, {
          scale: 0.95,
          transformOrigin: "top center",
          ease: "none",
        }, 0)
        .to(overlay, {
          opacity: 0.7,
          ease: "none",
        }, 0);
      });
    }, containerRef);

    return () => ctx.revert();
  }, [scroller]);

  return (
    <div ref={containerRef} className="w-full max-w-2xl mx-auto py-20 flex flex-col gap-32">
      {cardsData.map((card, i) => (
        <div 
          key={i} 
          ref={(el) => {
            cardsRef.current[i] = el;
          }}
          className="sticky h-[400px] w-full rounded-3xl p-10 flex flex-col justify-between border border-white/10 shadow-2xl overflow-hidden"
          style={{ 
            zIndex: i, 
            backgroundColor: card.color,
            top: `calc(15vh + ${i * 30}px)`
          }}
        >
          {/* Darkening overlay */}
          <div className="absolute inset-0 bg-black z-50 pointer-events-none opacity-0 card-overlay" />
          
          <div>
            <h2 className="text-5xl font-display font-bold text-white mb-4">{card.title}</h2>
            <p className="text-white/50 text-lg">{card.desc}</p>
          </div>
          <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-mono text-xl">
            0{i + 1}
          </div>
        </div>
      ))}
    </div>
  );
}
