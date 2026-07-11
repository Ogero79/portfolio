'use client';
export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute w-full h-[500px] top-0 left-0 bg-[radial-gradient(ellipse_at_center,rgba(188,251,0,0.15)_0%,rgba(255,255,255,0)_70%)] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center text-black relative z-10 bg-[#bcfb00] p-12 md:p-20 rounded-[3rem] shadow-[12px_12px_0px_0px_rgba(10,10,10,1)] border-4 border-black">
        <h2 className="text-4xl md:text-6xl font-black font-[Syne] tracking-tight mb-8">
          Ready to build something <br/> secure & scalable?
        </h2>
        <p className="text-lg font-medium max-w-2xl mx-auto mb-10 text-black/80">
          Whether you need a new application, an AI integration, or a security audit, let's discuss how I can help.
        </p>
        <a href="mailto:brianogero7910@gmail.com" className="inline-block bg-black text-white font-bold px-10 py-5 rounded-full text-lg hover:bg-gray-800 transition-all hover:-translate-y-1">
          Start a Project Today
        </a>
      </div>
    </section>
  );
}
