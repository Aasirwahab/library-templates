export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-sm">
          Â© {new Date().getFullYear()} Lumina UI. Crafted for perfection.
        </p>
        <div className="flex items-center gap-4 text-sm text-white/40">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  );
}
