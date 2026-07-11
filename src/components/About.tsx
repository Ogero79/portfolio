'use client';
import { motion } from 'framer-motion';

const processes = [
  { id: '01', title: 'App & Web Dev', desc: 'Building responsive, scalable applications using Next.js, React Native, and modern backend architectures tailored to business needs.' },
  { id: '02', title: 'AI Integration', desc: 'Implementing LLMs and intelligent workflows to automate processes and create predictive models that drive value.' },
  { id: '03', title: 'Cybersecurity', desc: 'Auditing infrastructure and enforcing zero-trust architectures to ensure data integrity and system resilience against modern threats.' },
  { id: '04', title: 'System Arch', desc: 'Designing distributed, fault-tolerant microservices that handle high throughput and complex data pipelines reliably.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-black"></span>
              <span className="text-sm font-bold uppercase tracking-widest font-[Space_Grotesk]">My Expertise</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black font-[Syne] text-black leading-[1.05]">
              Measurable <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>Impact.</span><br/>
              Securely <span className="bg-[#bcfb00] px-2">Engineered.</span>
            </h2>
          </div>
          <p className="text-black font-medium text-lg max-w-sm md:text-right">
            Bridging the gap between innovative user experiences and uncompromising zero-trust security.
          </p>
        </div>

        {/* Minimalist Editorial List (No Cards) */}
        <div className="flex flex-col border-t-2 border-black">
          {processes.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group border-b border-black/20 hover:border-black flex flex-col lg:flex-row py-10 md:py-16 gap-6 md:gap-12 hover:bg-[#bcfb00] transition-all duration-300 px-6 -mx-6 md:px-12 md:-mx-12 cursor-pointer"
            >
              <div className="lg:w-1/6">
                <span className="text-xl md:text-2xl font-[Space_Grotesk] font-bold text-black/40 group-hover:text-black transition-colors">
                  {p.id}
                </span>
              </div>
              <div className="lg:w-3/6">
                <h3 className="text-3xl md:text-5xl font-black font-[Syne] text-black tracking-tight group-hover:-translate-y-1 transition-transform duration-300">
                  {p.title}
                </h3>
              </div>
              <div className="lg:w-2/6 lg:flex lg:items-center">
                <p className="text-black/70 group-hover:text-black text-lg leading-relaxed font-medium transition-colors">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
