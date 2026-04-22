"use client";

import { motion } from "framer-motion";
import { Mail, User, Code } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

export default function Contact() {
  return (
    <section className="relative z-20 bg-[#0B0B0F] py-32 px-6 md:px-12 text-center text-white border-t border-white/5 overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-tr from-[#3b82f6]/10 to-[#f97316]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center space-y-16">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-balance">
            Let’s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">impactful.</span>
          </h2>
          <p className="text-xl text-white/50 max-w-xl mx-auto">
            Have an idea? Let’s turn it into reality. Reach out to discuss engineering, AI integrations, or business growth.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shreyass0411@gmail.com" target="_blank" rel="noreferrer">
            <MagneticButton className="px-10 py-5 text-lg bg-white text-black font-bold hover:bg-white/90">
               Start a Project
            </MagneticButton>
          </a>
          <a href="https://github.com/escapist0411" target="_blank" rel="noreferrer">
            <MagneticButton className="px-10 py-5 text-lg bg-white/[0.05] border border-white/10 text-white font-bold hover:bg-white/10">
               View GitHub
            </MagneticButton>
          </a>
        </motion.div>

        {/* Minimal Contact Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 pt-12 border-t border-white/10 w-full max-w-2xl"
        >
          <a href="mailto:shreyass0411@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
            <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors border border-white/5">
              <Mail size={20} />
            </div>
            <span className="font-medium">shreyass0411@gmail.com</span>
          </a>
          
          <a href="https://www.linkedin.com/in/shreyas-sadavarte-9210723b3" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
            <div className="p-3 rounded-full bg-white/5 group-hover:bg-[#0a66c2]/20 group-hover:border-[#0a66c2]/40 transition-colors border border-white/5">
              <User size={20} />
            </div>
            <span className="font-medium">LinkedIn</span>
          </a>

          <a href="https://github.com/escapist0411" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
            <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors border border-white/5">
              <Code size={20} />
            </div>
            <span className="font-medium">GitHub</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
