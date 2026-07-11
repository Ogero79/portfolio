'use client';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const projects = [
  { title: 'ThreatScope', desc: 'Cyber threat monitoring and analysis platform focused on identifying suspicious patterns and surfacing actionable security insights in real time.', tags: ['TypeScript', 'Node.js', 'Security Analytics'], year: '2025', link: 'https://github.com/Ogero79/threatscope' },
  { title: 'SessionGuard', desc: 'Secure session management system designed to strengthen authentication flows, reduce session hijacking risk, and improve account protection across web applications.', tags: ['TypeScript', 'Authentication', 'Web Security'], year: '2026', link: 'https://github.com/Ogero79/sessionguard' },
  { title: 'EduHub Backend', desc: 'Backend service for an education platform handling user data, core business logic, and API integration for student-facing and admin features.', tags: ['JavaScript', 'Node.js', 'REST API'], year: '2024–2025', link: 'https://github.com/Ogero79/eduhub-back' },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0a0a0a] text-white py-32 rounded-t-[3rem] -mt-10 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>

            <h2 className="text-5xl md:text-7xl font-black font-[Syne]">
              Featured <span className="text-[#bcfb00]">Projects</span>
            </h2>
          </div>
          <a href="https://github.com/Ogero79" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-semibold border-b-2 border-[#bcfb00] pb-1 hover:text-[#bcfb00] transition-colors">
            View Github <FiArrowUpRight />
          </a>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {projects.map((proj, i) => (
            <motion.a 
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="group py-12 md:py-16 border-b border-white/10 flex flex-col lg:flex-row gap-8 lg:gap-16 hover:bg-white/[0.02] transition-colors -mx-6 px-6 md:-mx-12 md:px-12 cursor-pointer block"
            >
              {/* Left: Metadata */}
              <div className="lg:w-1/4 flex flex-col justify-between">
                <span className="text-6xl font-black font-[Syne] text-white/10 group-hover:text-[#bcfb00] transition-colors duration-500">
                  0{i + 1}
                </span>
                <span className="text-gray-500 font-mono mt-4 lg:mt-0">{proj.year}</span>
              </div>
              
              {/* Center: Content */}
              <div className="lg:w-2/4">
                <h3 className="text-3xl md:text-5xl font-bold font-[Syne] mb-6 group-hover:-translate-y-1 transition-transform duration-300">
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {proj.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-full border border-white/20 text-sm font-[Space_Grotesk] group-hover:border-[#bcfb00]/50 transition-colors text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Right: Action */}
              <div className="lg:w-1/4 flex lg:justify-end items-center mt-4 lg:mt-0">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#bcfb00] group-hover:text-black group-hover:border-[#bcfb00] transition-all duration-300 transform group-hover:scale-110">
                  <FiArrowUpRight size={28} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
