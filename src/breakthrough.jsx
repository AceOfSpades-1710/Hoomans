import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import MotionScene from "./motion";
import img1Src from "./assets/breakthrus/Bipedal.png";
import img2Src from "./assets/breakthrus/Wheel.png";
import img3Src from "./assets/breakthrus/Comm.png";
import "./Breakthrough.css";

export default function Breakthrough() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.45,
  });

  // 🎞 TIMELINE
  const TOTAL_FRAMES = 300;
  const SEG = TOTAL_FRAMES / 9; // 4 animations + 5 gaps

  const f = (frame) => frame / TOTAL_FRAMES;

  // ─────────────────────────────
  // FRAME WINDOWS
  // ─────────────────────────────
  const titleStart = SEG;
  const titleEnd = SEG * 2;

  const img1Start = SEG * 3;
  const img1End = SEG * 4;

  const img2Start = SEG * 5;
  const img2End = SEG * 6;

  const img3Start = SEG * 7;
  const img3End = SEG * 8;

  // ─────────────────────────────
  // TITLE TEAR
  // ─────────────────────────────
  const splitProgress = useTransform(
    smooth,
    [f(titleStart), f(titleEnd)],
    [0, 1]
  );

  const leftX = useTransform(splitProgress, [0, 1], [0, -900]);
  const rightX = useTransform(splitProgress, [0, 1], [0, 900]);

  const leftY = useTransform(splitProgress, [0, 1], [0, 60]);
  const rightY = useTransform(splitProgress, [0, 1], [0, -60]);

  const titleOpacity = useTransform(
    smooth,
    [f(0), f(titleStart), f(titleEnd)],
    [1, 1, 0]
  );

  // ─────────────────────────────
  // IMAGE SEQUENCE (equal time, no overlap)
  // ─────────────────────────────
  const img1Prog = useTransform(
    smooth,
    [f(img1Start), f(img1End)],
    [0, 1]
  );

  const img2Prog = useTransform(
    smooth,
    [f(img2Start), f(img2End)],
    [0, 1]
  );

  const img3Prog = useTransform(
    smooth,
    [f(img3Start), f(img3End)],
    [0, 1]
  );

  // ─────────────────────────────
  // IMAGE MOTION HELPERS
  // ─────────────────────────────
  const createFlip = (progress) =>
    useTransform(progress, [0, 0.4, 0.6, 1], [90, 40, 20, 0]);

  const createZoom = (progress) =>
    useTransform(progress, [0, 0.85, 1], [1, 1, 1]);

  return (
    <div ref={containerRef} id="breakthrough" className="breakthrough-container">

      {/* Background layer */}
      <div className="motion-bg">
        <MotionScene progress={smooth} freezeUntil={f(titleEnd)} />
      </div>

      {/* Foreground layer */}
      <div className="motion-foreground">

        {/* Title */}
        <div className="title">
          <motion.div
            style={{ x: leftX, y: leftY, opacity: titleOpacity }}
          >
            BREAK
          </motion.div>

          <motion.div
            style={{ x: rightX, y: rightY, opacity: titleOpacity }}
          >
            THROUGH
          </motion.div>
        </div>

        {/* Image 1 */}
        <motion.img
          src={img1Src}
          alt="Skull 1"
          className="skull"
          style={{
            scale: createZoom(img1Prog),
            rotateY: createFlip(img1Prog),
            opacity: img1Prog,
          }}
        />

        {/* Image 2 */}
        <motion.img
          src={img2Src}
          alt="Skull 2"
          className="skull"
          style={{
            scale: createZoom(img2Prog),
            rotateY: createFlip(img2Prog),
            opacity: img2Prog,
          }}
        />

        {/* Image 3 */}
        <motion.img
          src={img3Src}
          alt="Skull 3"
          className="skull"
          style={{
            scale: createZoom(img3Prog),
            rotateY: createFlip(img3Prog),
            opacity: img3Prog,
          }}
        />

      </div>
    </div>
  );
}