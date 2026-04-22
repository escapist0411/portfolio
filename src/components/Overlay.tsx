"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% to 20% (Disappears entirely by 20%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 1], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2, 1], [0, -150, -150]);

  // Section 2: 30% to 60% (Clear gap before appearing, clean fade out)
  const opacity2 = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.55, 0.65, 1], [0, 0, 1, 1, 0, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.25, 0.65, 1], [100, 100, -100, -100]);

  // Section 3: 70% to 100% (Clear gap, stays until end)
  const opacity3 = useTransform(scrollYProgress, [0, 0.65, 0.8, 1], [0, 0, 1, 1]);
  const y3 = useTransform(scrollYProgress, [0, 0.65, 1], [100, 100, -50]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section 1 (Center) */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-2xl">
            Shreyas Sadavarte.
          </h1>
          <p className="mt-4 text-xl md:text-3xl font-medium text-white/80">
            Creative Developer & Engineer.
          </p>
        </motion.div>

        {/* Section 2 (Left aligned) */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 max-w-md"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white drop-shadow-xl text-balance">
            I build scalable <span className="text-[#3b82f6]/90">digital products</span>
          </h2>
          <p className="mt-4 text-lg text-white/70">
            and real-world tech solutions.
          </p>
        </motion.div>

        {/* Section 3 (Right aligned) */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 max-w-md text-right"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white drop-shadow-xl text-balance">
            Bridging <span className="text-[#f97316]/90">business, AI</span>, and modern web engineering.
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Every pixel holds purpose. Every interaction feels alive.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
