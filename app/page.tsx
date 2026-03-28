import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import TextReveal from '@/components/showcase/TextReveal';
import GlowCard from '@/components/showcase/GlowCard';
import MagneticButton from '@/components/showcase/MagneticButton';
import { ArrowRight, Code2, Sparkles, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-white/80 mb-8">
            <Sparkles className="w-3 h-3 text-indigo-400" />
            <span>Award-Winning Component Library</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-8 max-w-4xl">
            Crafted for <br className="hidden md:block" />
            <span className="text-gradient">Perfection.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mb-12 font-light">
            Elevate your web applications with premium, highly-animated, and meticulously designed React components. Copy, paste, and ship faster.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/components">
              <MagneticButton>
                <span className="flex items-center gap-2">
                  Browse Components <ArrowRight className="w-4 h-4" />
                </span>
              </MagneticButton>
            </Link>
            <a href="#features" className="px-8 py-4 rounded-full text-white/70 hover:text-white font-medium transition-colors">
              Learn more
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlowCard className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-white">Lightning Fast</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Built on top of Tailwind CSS and Framer Motion for optimal performance and buttery smooth 60fps animations.
              </p>
            </GlowCard>
            <GlowCard className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-white">Copy & Paste</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                No bloated npm packages. Just copy the source code directly into your project and customize it to your needs.
              </p>
            </GlowCard>
            <GlowCard className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-white">Premium Design</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Every component is crafted with an obsessive attention to detail, typography, and interaction design.
              </p>
            </GlowCard>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <TextReveal 
              text="Stop building boring websites. Start creating experiences." 
              className="text-4xl md:text-6xl font-display font-bold max-w-3xl"
            />
          </div>
          
          <div className="glass rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-display font-bold mb-4">Ready to elevate your UI?</h2>
              <p className="text-white/50 mb-8 max-w-md">
                Join thousands of developers building the next generation of web applications with Lumina UI.
              </p>
              <Link href="/components">
                <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform">
                  Explore Library
                </button>
              </Link>
            </div>
            <div className="flex-1 w-full flex justify-center">
              <GlowCard className="w-full max-w-sm aspect-square flex items-center justify-center">
                <MagneticButton className="bg-white/10 text-white border border-white/20 backdrop-blur-md">
                  Hover Me
                </MagneticButton>
              </GlowCard>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
