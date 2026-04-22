import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0F]">
      {/* 
        The ScrollyCanvas component manages its own 500vh scroll space.
        It encapsulates the HTML5 <canvas> and the Parallax Overlay.
      */}
      <ScrollyCanvas />

      {/* Narrative Flow */}
      <Projects />
      <Services />
      <Process />
      <About />
      
      {/* Epic Closing Section */}
      <Contact />
      
      {/* Simple Footer */}
      <footer className="py-12 text-center text-white/30 bg-[#060608] border-t border-white/5 relative z-20">
        <p className="text-sm">© 2026 Shreyas Sadavarte. Built with passion and precision.</p>
      </footer>
    </main>
  );
}
