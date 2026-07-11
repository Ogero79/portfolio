'use client';
import { motion } from 'framer-motion';

const skillCategories = [
  { category: 'Frontend & App', items: ['Next.js', 'React Native', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Redux', 'WebSockets'] },
  { category: 'Backend & Data', items: ['Node.js', 'Python', 'Rust', 'PostgreSQL', 'GraphQL', 'Kafka', 'Redis'] },
  { category: 'AI & Machine Learning', items: ['PyTorch', 'LangChain', 'LLM Integrations', 'RAG Pipelines', 'Vector Databases', 'Prompt Engineering'] },
  { category: 'Cybersecurity', items: ['Zero-Trust Architecture', 'Penetration Testing', 'OAuth/OIDC', 'Cryptography', 'Cloud Security Posture Management'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD pipelines', 'Terraform'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-20 md:mb-32">
          <h2 className="text-5xl md:text-8xl font-black font-[Syne] text-black tracking-tight">
            THE <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>TOOLKIT</span>
          </h2>
        </div>

        {/* Minimalist Skills Matrix */}
        <div className="flex flex-col border-t-[3px] border-black">
          {skillCategories.map((group, i) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col md:flex-row py-8 md:py-12 border-b border-black/20 hover:border-black transition-colors"
            >
              {/* Category Name */}
              <div className="md:w-1/3 mb-6 md:mb-0 pr-8">
                <h3 className="text-2xl md:text-3xl font-bold font-[Syne] text-black uppercase tracking-wide">
                  {group.category}
                </h3>
              </div>
              
              {/* Skills Tags */}
              <div className="md:w-2/3 flex flex-wrap gap-3 md:gap-4">
                {group.items.map((item, j) => (
                  <span 
                    key={item} 
                    className="text-lg md:text-xl font-medium font-[Space_Grotesk] px-5 py-2 border-2 border-black rounded-full hover:bg-[#bcfb00] hover:-translate-y-1 transition-all duration-300 text-black"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
