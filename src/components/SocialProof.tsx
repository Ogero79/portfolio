import { FiDatabase, FiAward, FiShield } from 'react-icons/fi';

export default function SocialProof() {
  return (
    <section className="bg-white py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 bg-[#bcfb00] border-2 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col items-center text-center gap-4 px-4">
            <div className="w-16 h-16 rounded-full border-2 border-black bg-white flex items-center justify-center">
              <FiAward size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-black font-[Syne] mb-2">Certified</h3>
              <p className="font-bold text-black/80 uppercase tracking-widest text-xs">Oracle & IBM Certified</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4 px-4 md:border-l-2 md:border-r-2 border-black border-y-2 md:border-y-0 py-8 md:py-0">
            <div className="w-16 h-16 rounded-full border-2 border-black bg-white flex items-center justify-center">
              <FiDatabase size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-black font-[Syne] mb-2">Architect</h3>
              <p className="font-bold text-black/80 uppercase tracking-widest text-xs">Enterprise-Grade Systems</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4 px-4">
            <div className="w-16 h-16 rounded-full border-2 border-black bg-white flex items-center justify-center">
              <FiShield size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-black font-[Syne] mb-2">Security</h3>
              <p className="font-bold text-black/80 uppercase tracking-widest text-xs">Threat Modeling & Analysis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
