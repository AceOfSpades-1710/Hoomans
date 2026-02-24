import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";


const FRAME_COUNT = 300;

export default function CinematicScene() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [frame, setFrame] = useState(1);

  // Preload frames for instant swaps
  useEffect(() => {
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/frames/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;
    }
  }, []);

  // Map scroll → frame index
  useEffect(() => {
    return scrollYProgress.on("change", v => {
      const index = Math.min(
        FRAME_COUNT,
        Math.max(1, Math.round(v * (FRAME_COUNT - 1)) + 1)
      );
      setFrame(index);
    });
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-black">
      {/* Pinned cinematic viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <img
          src={`/frames/ezgif-frame-${String(frame).padStart(3, "0")}.jpg`}
          className="absolute inset-0 h-full w-full object-cover select-none"
          draggable={false}
        />
        
      </div>
    </div>
  );
}
