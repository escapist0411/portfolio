"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, CheckCircle, Rocket, Wrench } from "lucide-react";

const STEPS = [
  {
    title: "Discovery",
    description: "I understand your idea, goals, and requirements.",
    icon: <Search className="w-6 h-6 text-[#3b82f6]" />,
  },
  {
    title: "Planning",
    description: "I design the structure, tech stack, and user flow.",
    icon: <PenTool className="w-6 h-6 text-[#8b5cf6]" />,
  },
  {
    title: "Development",
    description: "I build fast, scalable, and modern applications.",
    icon: <Code className="w-6 h-6 text-[#f97316]" />,
  },
  {
    title: "Testing",
    description: "I ensure performance, responsiveness, and reliability.",
    icon: <CheckCircle className="w-6 h-6 text-[#22c55e]" />,
  },
  {
    title: "Launch",
    description: "I deploy and make your product live.",
    icon: <Rocket className="w-6 h-6 text-[#ec4899]" />,
  },
  {
    title: "Support",
    description: "Ongoing improvements and maintenance.",
    icon: <Wrench className="w-6 h-6 text-[#eab308]" />,
  },
];

export default function Process() {
  return (
    <section className="relative z-20 bg-[#0B0B0F] py-32 px-6 md:px-12 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
            How I <span className="text-white/40">Work</span>
          </h2>
          <p className="mt-6 text-xl text-white/70 max-w-2xl mx-auto md:mx-0">
            A simple, effective process to turn ideas into real products.
          </p>
        </div>

        <div className="relative md:ml-6 space-y-12 pb-8 pt-4">
          
          {/* Animated vertical connecting line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[1px] top-0 w-[1px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent"
          />

          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />

          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              className="relative pl-10 md:pl-16 group"
            >
              {/* Connector dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index * 0.15) + 0.3 }}
                className="absolute left-0 top-6 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0B0B0F] border-2 border-[#3b82f6] shadow-[0_0_10px_#3b82f680] group-hover:scale-125 transition-transform duration-300"
              />
              
              <div className="flex flex-col md:flex-row items-start gap-6 bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.05] hover:border-white/10 transition-all backdrop-blur-md max-w-3xl transform-gpu">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>
                <div className="mt-2 text-left">
                  <h3 className="text-3xl font-extrabold tracking-tight mb-3 drop-shadow-sm">{step.title}</h3>
                  <p className="text-white/60 text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
