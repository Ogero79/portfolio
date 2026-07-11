'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowRight } from 'react-icons/fi';
import { useState, useEffect } from 'react';

// Polished Scramble Text Effect Hook
const useScrambleText = (text: string, trigger: boolean = true) => {
  const [displayText, setDisplayText] = useState('');
  const chars = '!<>-_\\\\/[]{}—=+*^?#________';
  
  useEffect(() => {
    if (!trigger) return;
    
    // Initial random state
    setDisplayText(text.replace(/./g, () => chars[Math.floor(Math.random() * chars.length)]));
    
    let iteration = 0;
    // Delay the decode slightly for dramatic effect
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText((prev) => text.split('').map((letter, index) => {
          if(index < iteration) {
            return text[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        }).join(''));
        
        if(iteration >= text.length){
          clearInterval(interval);
        }
        // Controls the speed of the lock-in (lower is slower)
        iteration += 1 / 3; 
      }, 30); // 30ms frame rate for high-speed scramble
      return () => clearInterval(interval);
    }, 400); // 400ms hold before resolving
    
    return () => clearTimeout(timeout);
  }, [text, trigger]);
  
  return displayText;
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -300]);
  
  const scrambledName1 = useScrambleText('BRIAN');
  const scrambledName2 = useScrambleText('OGERO.');

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      {/* Neon Green Blobs with Parallax */}
      <motion.div style={{ y: y1 }} className="absolute w-[600px] h-[600px] rounded-full top-20 -left-40 bg-[radial-gradient(circle,rgba(188,251,0,0.4)_0%,rgba(255,255,255,0)_70%)] blur-[60px] -z-10 pointer-events-none"></motion.div>
      <motion.div style={{ y: y2 }} className="absolute w-[600px] h-[600px] rounded-full bottom-20 right-0 bg-[radial-gradient(circle,rgba(188,251,0,0.3)_0%,rgba(255,255,255,0)_70%)] blur-[60px] -z-10 pointer-events-none"></motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col relative z-10">
        
        {/* Social Sidebar */}
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 text-black z-50">
          <motion.a whileHover={{ scale: 1.5, color: '#bcfb00', y: -10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} href="https://github.com/Ogero79" target="_blank" rel="noopener noreferrer"><FiGithub size={20} /></motion.a>
          <motion.a whileHover={{ scale: 1.5, color: '#bcfb00', y: -10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} href="https://linkedin.com/in/brian-ogeroo" target="_blank" rel="noopener noreferrer"><FiLinkedin size={20} /></motion.a>
          <motion.a whileHover={{ scale: 1.5, color: '#bcfb00', y: -10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} href="https://twitter.com/bogeroo_" target="_blank" rel="noopener noreferrer"><FiTwitter size={20} /></motion.a>
          <motion.a whileHover={{ scale: 1.5, color: '#bcfb00', y: -10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} href="https://instagram.com/b.ogeroo_" target="_blank" rel="noopener noreferrer"><FiInstagram size={20} /></motion.a>
          <motion.div initial={{ height: 0 }} animate={{ height: 96 }} transition={{ duration: 1, delay: 0.5, ease: "circOut" }} className="w-px bg-black/20 mt-4"></motion.div>
          <span className="text-xs font-[Space_Grotesk] -rotate-90 whitespace-nowrap mt-20 tracking-widest text-gray-500 uppercase">@bogeroo_</span>
        </div>

        <div className="w-full lg:pl-32 max-w-5xl mx-auto lg:mx-0">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }} className="mb-6">
            <span className="bg-black text-[#bcfb00] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide border border-[#bcfb00]/30 shadow-[0_0_20px_rgba(188,251,0,0.4)]">
              Software Engineer & Security Researcher
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-[100px] font-black font-[Syne] leading-[1.05] tracking-tight text-black mb-8"
          >
            I'M <motion.span whileHover={{ scale: 1.05, rotate: 0 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="text-[#bcfb00] bg-black px-4 rounded-xl inline-block -rotate-2 cursor-pointer origin-bottom-left inline-block w-[280px] md:w-[500px] text-center">{scrambledName1}</motion.span><br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>{scrambledName2}</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pl-2 border-l-4 border-[#bcfb00]"
          >
            <p className="text-gray-800 font-medium max-w-xl text-lg leading-relaxed">
              Crafting secure, AI-driven applications. I build enterprise-grade systems bridging the gap between innovative app/web development and zero-trust cybersecurity.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            <motion.a 
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="#projects" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-black text-black font-bold hover:bg-black hover:text-[#bcfb00] bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none text-lg"
            >
              View My Work <FiArrowRight size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(0,0,0,0.05)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="/resume.pdf" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-transparent text-gray-600 font-bold hover:text-black text-lg"
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
