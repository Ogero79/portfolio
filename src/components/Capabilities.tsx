'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  {
    id: 'expertise',
    label: '01. Core Expertise',
    content: [
      { title: 'App & Web Dev', desc: 'Building responsive, scalable applications using Next.js, React Native, and modern backend architectures tailored to business needs.' },
      { title: 'Cybersecurity', desc: 'Auditing infrastructure and enforcing zero-trust architectures to ensure data integrity and system resilience against modern threats.' },
      { title: 'AI Integration', desc: 'Implementing LLMs and intelligent workflows to automate processes and create predictive models that drive value.' },
      { title: 'System Arch', desc: 'Designing distributed, fault-tolerant microservices that handle high throughput and complex data pipelines reliably.' },
    ]
  },
  {
    id: 'frontend',
    label: '02. Frontend & Mobile',
    content: ['Next.js', 'React Native', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Redux', 'WebSockets', 'GraphQL']
  },
  {
    id: 'backend',
    label: '03. Backend & Data',
    content: ['Node.js', 'Python', 'Rust', 'PostgreSQL', 'MongoDB', 'Kafka', 'Redis', 'gRPC']
  },
  {
    id: 'ai',
    label: '04. AI & ML',
    content: ['PyTorch', 'LangChain', 'LLM Integrations', 'RAG Pipelines', 'Vector Databases', 'Prompt Engineering']
  },
  {
    id: 'security',
    label: '05. Cybersecurity',
    content: ['Zero-Trust Architecture', 'Penetration Testing', 'OAuth/OIDC', 'Cryptography', 'Cloud Security Posture Management', 'SIEM']
  },
  {
    id: 'cloud',
    label: '06. Cloud & DevOps',
    content: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Terraform', 'Linux Administration']
  }
];

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeData = tabs.find(t => t.id === activeTab);

  return (
    <section id="capabilities" className="py-24 md:py-32 bg-white relative border-y-2 border-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-5xl md:text-7xl font-black font-[Syne] mb-16 tracking-tight">
          Capabilities<span className="text-[#bcfb00]">.</span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Navigation */}
          <div className="lg:w-1/3">
            <div className="flex flex-col border-t-2 border-black">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  onMouseEnter={() => setActiveTab(tab.id)}
                  className={`text-left py-5 border-b border-black font-[Space_Grotesk] font-bold text-lg transition-all duration-300 ${activeTab === tab.id ? 'bg-black text-[#bcfb00] px-6' : 'text-black/50 hover:text-black'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-2/3 min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                {activeTab === 'expertise' ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {(activeData?.content as any[]).map((item, i) => (
                      <div key={i} className="p-8 border-2 border-black bg-white hover:bg-[#bcfb00] hover:-translate-y-1 transition-all duration-300 group">
                        <h3 className="text-2xl font-bold font-[Syne] mb-3 group-hover:text-black">{item.title}</h3>
                        <p className="text-black/70 group-hover:text-black font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-4">
                    {(activeData?.content as string[]).map((item, i) => (
                      <span key={i} className="text-xl font-medium font-[Space_Grotesk] px-6 py-3 border-2 border-black bg-white hover:bg-black hover:text-[#bcfb00] hover:-translate-y-1 transition-all duration-300">
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}
