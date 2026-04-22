"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  activeColor?: string; // e.g. "rgba(59, 130, 246, 0.15)"
}

export default function TiltCard({ children, activeColor = "rgba(255, 255, 255, 0.05)" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    // Rotate up to 10 degrees based on mouse position
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useMotionTemplate`${mouseYSpring.get() * -20}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring.get() * 20}deg`;

  // Glow calculation
  const glowX = useMotionTemplate`${(mouseXSpring.get() + 0.5) * 100}%`;
  const glowY = useMotionTemplate`${(mouseYSpring.get() + 0.5) * 100}%`;
  
  const background = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, ${activeColor}, transparent 80%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group transition-transform duration-300 ease-out will-change-transform"
    >
      <motion.div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
        style={{ background }}
      />
      {/* Container holding children preserves depth */}
      <div 
        className="relative z-10 size-full"
        style={{ transform: "translateZ(30px)" }}
      >
        {children}
      </div>
    </motion.div>
  );
}
