'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="#home" className="text-2xl font-black font-[Syne] tracking-tight text-black uppercase flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#bcfb00]"></div>
          OGERO
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <Link key={item.label} href={item.href} className="text-sm font-semibold text-gray-800 hover:text-[#bcfb00] transition-colors">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex">
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-all text-sm">
            <FiArrowRight /> Start Project
          </a>
        </div>
        <button className="md:hidden flex flex-col gap-1.5 z-50" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className={`w-6 h-0.5 bg-black transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-black transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-black transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 w-full bg-white shadow-lg py-8 flex flex-col items-center gap-6 md:hidden">
            {navItems.map(item => (
              <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="text-xl font-bold text-black hover:text-[#bcfb00]">
                {item.label}
              </Link>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-4 inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-black text-black font-bold hover:bg-black hover:text-[#bcfb00] transition-all text-lg">
              <FiArrowRight /> Start Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
