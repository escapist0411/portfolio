"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative z-20 bg-[#0B0B0F] py-32 px-6 md:px-12 text-white overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Story */}
        <motion.div 
          className="flex-1 space-y-8 relative z-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
            About <span className="text-white/40">Me</span>
          </h2>
          
          <div className="prose prose-lg prose-invert text-white/70 space-y-6">
            <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed">
              I&apos;m Shreyas Sadavarte, a Computer Engineer passionate about building impactful digital solutions.
            </p>
            <p className="leading-relaxed text-lg">
              I run Evotech IT Services, where I work on real-world projects in web development and artificial intelligence, constantly pushing the boundaries of what scalable software can achieve for businesses.
            </p>
            <p className="leading-relaxed text-lg">
              Alongside software engineering, I teach at Samarth Computer Institute, helping students understand programming in a grounded, highly practical way. Mentorship gives me the unique ability to break down complex architectural concepts into simple principles.
            </p>
            <p className="text-white/80 font-semibold text-lg border-l-2 border-[#3b82f6] pl-6 py-2">
              I believe in combining creativity with elite engineering to build products that feel alive and mean something.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Animated Aesthetic Blob */}
        <div className="flex-1 w-full relative flex items-center justify-center min-h-[400px] lg:min-h-[600px]">
          <motion.div
            className="absolute inset-0 z-0 bg-gradient-to-tr from-[#3b82f6]/40 via-[#a855f7]/30 to-[#f97316]/40 blur-[100px] mix-blend-screen rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 180, 270, 360],
              borderRadius: [
                "40% 60% 70% 30% / 40% 50% 60% 50%",
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "40% 60% 70% 30% / 40% 50% 60% 50%"
              ]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          {/* Profile Image Anchor */}
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/10 bg-[#0B0B0F] shadow-2xl flex items-center justify-center overflow-hidden">
             <img 
               src="/profile.png" 
               alt="Shreyas Sadavarte" 
               className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
             />
          </div>
        </div>

      </div>
    </section>
  );
}
