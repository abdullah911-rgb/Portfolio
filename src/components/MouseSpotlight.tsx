import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const MouseSpotlight: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // White ball (main follower) with smooth spring physics
  const whiteX = useSpring(-100, { stiffness: 450, damping: 28, mass: 0.1 });
  const whiteY = useSpring(-100, { stiffness: 450, damping: 28, mass: 0.1 });

  // Neon green ball (trailing fluidly behind) with softer spring physics
  const greenX = useSpring(-100, { stiffness: 220, damping: 20, mass: 0.25 });
  const greenY = useSpring(-100, { stiffness: 220, damping: 20, mass: 0.25 });

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      whiteX.set(e.clientX);
      whiteY.set(e.clientY);

      greenX.set(e.clientX);
      greenY.set(e.clientY);

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [whiteX, whiteY, greenX, greenY, isVisible]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* ── Outer White Ball ── */}
      <motion.div
        className="absolute top-0 left-0 w-8 h-8 rounded-full border-2 border-white/90 bg-white/20 backdrop-invert shadow-[0_0_20px_rgba(255,255,255,0.8)] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: whiteX,
          y: whiteY,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ opacity: { duration: 0.2 } }}
      />

      {/* ── Inner/Trailing Neon Green Ball with Glowing Pulse ── */}
      <motion.div
        className="absolute top-0 left-0 w-3 h-3 rounded-full bg-[#10B981] shadow-[0_0_15px_#10B981,0_0_30px_#10B981,0_0_45px_#059669] -translate-x-1/2 -translate-y-1/2 animate-pulse"
        style={{
          x: greenX,
          y: greenY,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ opacity: { duration: 0.2 } }}
      />

      {/* ── Ambient Soft Radial Glow Following Cursor ── */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          x: greenX,
          y: greenY,
          opacity: isVisible ? 0.35 : 0,
          background:
            "radial-gradient(circle, rgba(16,185,129,0.12) 0%, rgba(0,240,255,0.05) 35%, transparent 70%)",
        }}
        transition={{ opacity: { duration: 0.3 } }}
      />
    </div>
  );
};
