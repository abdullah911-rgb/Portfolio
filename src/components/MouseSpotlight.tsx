import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glow: string;
  alpha: number;
  decay: number;
}

export const MouseSpotlight: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const lastMousePos = useRef<{ x: number; y: number } | null>(null);

  // White ball (main follower) with spring physics
  const whiteX = useSpring(-100, { stiffness: 450, damping: 28, mass: 0.1 });
  const whiteY = useSpring(-100, { stiffness: 450, damping: 28, mass: 0.1 });

  // Neon green ball (trailing fluidly behind) with softer spring physics
  const greenX = useSpring(-100, { stiffness: 220, damping: 20, mass: 0.25 });
  const greenY = useSpring(-100, { stiffness: 220, damping: 20, mass: 0.25 });

  useEffect(() => {
    setMounted(true);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Canvas animation loop to render fading particles
    let animationFrameId: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.shadowColor = p.glow;
        ctx.shadowBlur = 12;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, p.radius * p.alpha), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    const handleMouseMove = (e: MouseEvent) => {
      whiteX.set(e.clientX);
      whiteY.set(e.clientY);

      greenX.set(e.clientX);
      greenY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      // Calculate movement delta to spawn dynamic fading trail particles
      const last = lastMousePos.current;
      const dx = last ? e.clientX - last.x : 0;
      const dy = last ? e.clientY - last.y : 0;
      const dist = Math.hypot(dx, dy);

      // Only spawn particles if mouse moved sufficiently
      if (dist > 3) {
        // Spawn White trace particle
        particlesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 6,
          y: e.clientY + (Math.random() - 0.5) * 6,
          vx: -dx * 0.08 + (Math.random() - 0.5) * 0.8,
          vy: -dy * 0.08 + (Math.random() - 0.5) * 0.8,
          radius: 3.5 + Math.random() * 2,
          color: "rgba(255, 255, 255, 0.9)",
          glow: "rgba(255, 255, 255, 0.8)",
          alpha: 0.8,
          decay: 0.028, // Disappears smoothly in ~0.5s
        });

        // Spawn Neon Green trace particle
        particlesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          vx: -dx * 0.12 + (Math.random() - 0.5) * 1.2,
          vy: -dy * 0.12 + (Math.random() - 0.5) * 1.2,
          radius: 2 + Math.random() * 2,
          color: "rgba(16, 185, 129, 0.95)",
          glow: "rgba(16, 185, 129, 0.9)",
          alpha: 0.9,
          decay: 0.024, // Disappears smoothly in ~0.6s
        });
      }

      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      lastMousePos.current = null;
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [whiteX, whiteY, greenX, greenY, isVisible]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* ── Canvas for Smooth Vanishing Traces / Particle Trail ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

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
