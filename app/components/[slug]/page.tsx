import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { componentsList } from '@/lib/components-data';
import ComponentTabs from './ComponentTabs';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Import components for preview
import MagneticButton from '@/components/showcase/MagneticButton';
import GlowCard from '@/components/showcase/GlowCard';
import TextReveal from '@/components/showcase/TextReveal';
import StickyCards from '@/components/showcase/StickyCards';
import PremiumCarousel from '@/components/showcase/PremiumCarousel';
import HoverImageLink from '@/components/showcase/HoverImageLink';
import MaskedCursorReveal from '@/components/showcase/MaskedCursorReveal';
import KineticMarquee from '@/components/showcase/KineticMarquee';
import TiltCard3D from '@/components/showcase/TiltCard3D';
import TextScramble from '@/components/showcase/TextScramble';
import AuroraText from '@/components/showcase/AuroraText';
import TypewriterChat from '@/components/showcase/TypewriterChat';
import SplitTextReveal from '@/components/showcase/SplitTextReveal';
import BlurReveal from '@/components/showcase/BlurReveal';
import ElasticText from '@/components/showcase/ElasticText';

const componentMap: Record<string, React.ReactNode> = {
  'magnetic-button': (
    <div className="flex items-center justify-center w-full h-full min-h-[300px]">
      <MagneticButton>Hover Me</MagneticButton>
    </div>
  ),
  'glow-card': (
    <div className="flex items-center justify-center w-full h-full min-h-[400px] p-8">
      <GlowCard className="w-full max-w-sm aspect-[4/5] flex flex-col justify-end">
        <h3 className="text-2xl font-display font-bold text-white mb-2">Glow Card</h3>
        <p className="text-white/60 text-sm">Move your mouse around to reveal the subtle radial gradient.</p>
      </GlowCard>
    </div>
  ),
  'text-reveal': (
    <div className="flex items-center justify-center w-full h-full min-h-[300px] p-8">
      <TextReveal 
        text="Award winning design is about the details." 
        className="text-3xl md:text-5xl font-display font-bold text-white text-center"
      />
    </div>
  ),
  'sticky-cards': (
    <div id="sticky-scroller" className="w-full h-[600px] overflow-y-auto relative bg-[#050505] rounded-xl p-8 custom-scrollbar">
      <div className="h-[200px] flex items-center justify-center text-white/30 font-mono text-sm">Scroll down &darr;</div>
      <StickyCards scroller="#sticky-scroller" />
      <div className="h-[400px] flex items-center justify-center text-white/30 font-mono text-sm">End of scroll</div>
    </div>
  ),
  'premium-carousel': (
    <div className="flex items-center justify-center w-full h-full min-h-[600px] bg-[#050505] rounded-xl overflow-hidden">
      <PremiumCarousel />
    </div>
  ),
  'hover-image-link': (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-[500px] gap-8 p-8">
      <HoverImageLink text="Digital Agency" imgSrc="https://picsum.photos/seed/agency/600/400" />
      <HoverImageLink text="Creative Studio" imgSrc="https://picsum.photos/seed/studio/600/400" />
    </div>
  ),
  'masked-cursor-reveal': (
    <div className="flex items-center justify-center w-full h-full min-h-[600px] p-8">
      <MaskedCursorReveal />
    </div>
  ),
  'kinetic-marquee': (
    <div id="marquee-scroller" className="w-full h-[500px] overflow-y-auto relative bg-[#050505] rounded-xl custom-scrollbar flex flex-col justify-center">
      <div className="h-[800px] flex flex-col justify-center">
        <p className="text-center text-white/30 font-mono text-sm mb-12">Scroll up and down to change direction &darr;</p>
        <KineticMarquee baseVelocity={-2}>Premium</KineticMarquee>
        <KineticMarquee baseVelocity={2}>Components</KineticMarquee>
      </div>
    </div>
  ),
  'tilt-card-3d': (
    <div className="flex items-center justify-center w-full h-full min-h-[600px] p-8 perspective-1000">
      <TiltCard3D />
    </div>
  ),
  'text-scramble': (
    <div className="flex items-center justify-center w-full h-full min-h-[300px] p-8">
      <TextScramble 
        text="Hover to decrypt message" 
        className="text-3xl md:text-5xl font-bold text-white tracking-widest text-center"
      />
    </div>
  ),
  'aurora-text': (
    <div className="w-full h-full min-h-[400px] p-8">
      <AuroraText />
    </div>
  ),
  'typewriter-chat': (
    <div className="w-full h-full min-h-[400px] p-8">
      <TypewriterChat />
    </div>
  ),
  'split-text-reveal': (
    <div className="w-full h-full min-h-[400px] p-8">
      <SplitTextReveal />
    </div>
  ),
  'blur-reveal': (
    <div className="w-full h-full min-h-[400px] p-8">
      <BlurReveal />
    </div>
  ),
  'elastic-text': (
    <div className="w-full h-full min-h-[400px] p-8">
      <ElasticText />
    </div>
  )
};

export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const component = componentsList.find(c => c.slug === resolvedParams.slug);
  
  if (!component) {
    notFound();
  }

  // Read the source code of the component
  const filePath = path.join(process.cwd(), 'components', 'showcase', `${component.filename}.tsx`);
  let code = '';
  try {
    code = fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    code = '// Source code not found.';
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-16 max-w-5xl mx-auto px-6 w-full">
        <Link href="/components" className="inline-flex items-center text-sm text-white/50 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to components
        </Link>
        
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">{component.name}</h1>
          <p className="text-white/50 text-lg">{component.description}</p>
        </div>
        
        <ComponentTabs 
          preview={componentMap[component.slug]} 
          code={code} 
        />
      </main>
      
      <Footer />
    </div>
  );
}
