import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { componentsList } from '@/lib/components-data';
import { ArrowRight } from 'lucide-react';

export default function ComponentsIndex() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-16 max-w-7xl mx-auto px-6 w-full">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Components</h1>
          <p className="text-white/50 text-lg max-w-2xl">
            Beautifully designed, highly animated components ready to be copied into your React applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {componentsList.map((component) => (
            <Link 
              key={component.slug} 
              href={`/components/${component.slug}`}
              className="group block"
            >
              <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20">
                <h2 className="text-xl font-display font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                  {component.name}
                </h2>
                <p className="text-white/50 text-sm mb-6 line-clamp-2">
                  {component.description}
                </p>
                <div className="flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                  View Component <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
