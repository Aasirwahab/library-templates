import Link from 'next/link';
import { Layers } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
          <Layers className="w-6 h-6" />
          <span className="font-display font-bold text-lg tracking-tight">Lumina UI</span>
        </Link>
        
        <div className="flex items-center gap-6 text-sm font-medium text-white/70">
          <Link href="/components" className="hover:text-white transition-colors">
            Components
          </Link>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
