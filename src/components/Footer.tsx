export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-8 border-t-[16px] border-[#bcfb00]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-12 mb-8 gap-8">
          <div className="text-3xl font-black font-[Syne] tracking-tight uppercase flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#bcfb00]"></div>
            OGERO
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-[Space_Grotesk] text-sm uppercase tracking-wider text-gray-400">
            <a href="#home" className="hover:text-[#bcfb00] transition-colors">Home</a>
            <a href="#capabilities" className="hover:text-[#bcfb00] transition-colors">Capabilities</a>
            <a href="#projects" className="hover:text-[#bcfb00] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#bcfb00] transition-colors">Contact</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-[Space_Grotesk]">
          <p>&copy; {new Date().getFullYear()} Brian Ogero. Software Engineer & Security Researcher.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://github.com/Ogero79" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/brian-ogeroo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
