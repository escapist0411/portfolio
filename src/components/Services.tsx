import { Globe, Cpu, Building2, BookOpen } from "lucide-react";
import TiltCard from "./ui/TiltCard";

const SERVICES = [
  {
    title: "Web Development",
    description: "Modern, fast, responsive websites using Next.js and leading frontend architectures.",
    icon: <Globe className="w-8 h-8 text-[#3b82f6]" />,
    accent: "rgba(59, 130, 246, 0.15)",
  },
  {
    title: "AI Solutions",
    description: "Machine learning integration and intelligent systems to automate workflows.",
    icon: <Cpu className="w-8 h-8 text-[#a855f7]" />,
    accent: "rgba(168, 85, 247, 0.15)",
  },
  {
    title: "Business Websites",
    description: "Professional, high-conversion sites built specifically for modern brands and startups.",
    icon: <Building2 className="w-8 h-8 text-[#f97316]" />,
    accent: "rgba(249, 115, 22, 0.15)",
  },
  {
    title: "Teaching & Mentorship",
    description: "Helping students learn programming fundamentally and practically through real-world examples.",
    icon: <BookOpen className="w-8 h-8 text-[#eab308]" />,
    accent: "rgba(234, 179, 8, 0.15)",
  },
];

export default function Services() {
  return (
    <section className="relative z-20 bg-[#0B0B0F] py-32 px-6 md:px-12 text-white overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
            What I <span className="text-white/40">Do</span>
          </h2>
          <p className="mt-6 text-xl text-white/70 max-w-2xl mx-auto">
            Leveraging engineering to build solutions that scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-[1000px]">
          {SERVICES.map((service) => (
            <TiltCard key={service.title} activeColor={service.accent}>
              <div className="group relative flex flex-col p-10 md:p-12 rounded-3xl backdrop-blur-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors h-full text-center md:text-left items-center md:items-start">
                <div className="mb-8 p-4 bg-white/5 rounded-2xl border border-white/10 inline-flex group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 drop-shadow-md">{service.title}</h3>
                <p className="text-white/60 text-lg leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
