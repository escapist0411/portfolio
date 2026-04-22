"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 60;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  // Framer Motion's scroll mapped exactly to the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll progress to eliminate lag or abrupt browser jumps
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map scroll progress (0 - 1) to the current frame index (0 - 59)
  const currentIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload all images
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(2, "0");
      img.src = `/sequence/frame_${paddedIndex}_delay-0.067s.webp`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImagesPreloaded(true);
        }
        // If the frame we are currently on loads, render it immediately
        if (i === Math.round(currentIndex.get())) {
          renderFrame(i);
        }
      };

      // Still push to array immediately to keep the exact indexing
      imagesRef.current.push(img);
    }
  }, []); // Only run once

  const renderFrame = (index: number) => {
    if (!imagesRef.current[index] || !canvasRef.current) return;

    // Check if the image is actually loaded before drawing
    if (!imagesRef.current[index].complete || imagesRef.current[index].naturalHeight === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Only set canvas dimensions if they don't match the window
    // Setting width/height on every frame clears the canvas and destroys performance
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    const img = imagesRef.current[index];
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth, drawHeight, offsetX = 0, offsetY = 0;

    // Object-fit: cover logic
    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    // Use requestAnimationFrame for smooth drawing
    requestAnimationFrame(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    });
  };

  // Initial draw once preloaded
  useEffect(() => {
    if (imagesPreloaded) {
      renderFrame(0);
    }
  }, [imagesPreloaded]);

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      renderFrame(Math.round(currentIndex.get()));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, imagesPreloaded]); // Added currentIndex to deps

  // Scrub through the sequence
  useMotionValueEvent(currentIndex, "change", (latest) => {
    // Render frame even if all aren't preloaded to prevent black screen if 1 fails
    renderFrame(Math.round(latest));
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#0B0B0F]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 size-full"
        />
        {/* Simple Loading State if frames are huge */}
        {!imagesPreloaded && (
          <div className="absolute inset-0 flex items-center justify-center text-sm font-medium tracking-widest text-[#ffffff]/50 uppercase">
            Loading Experience...
          </div>
        )}

        <Overlay scrollYProgress={smoothProgress} />
      </div>
    </div>
  );
}
