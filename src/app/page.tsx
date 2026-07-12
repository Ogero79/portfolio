import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Capabilities from "@/components/Capabilities";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <Hero />
      <SocialProof />
      <Capabilities />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
