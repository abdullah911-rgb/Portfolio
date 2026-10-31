import React, { useEffect, useRef } from "react";

interface TrailPoint {
  x: number;
  y: number;
  alpha: number;
}

export const MouseSpotlight: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Only run on devices with a fine pointer (mouse/trackpad, not touch)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Target positions (instant mouse coordinates)
    let mouseX = -100;
    let mouseY = -100;
    let isVisible = false;

    // Smooth interpolated positions
    let whiteX = -100;
    let whiteY = -100;
    let greenX = -100;
    let greenY = -100;

    // Fading trace points
    const whiteTrails: TrailPoint[] = [];
    const greenTrails: TrailPoint[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        whiteX = mouseX;
        whiteY = mouseY;
        greenX = mouseX;
        greenY = mouseY;
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
    };

    const handleMouseEnter = () => {
      isVisible = true;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    let animationId: number;

    const loop = () => {
      ctx.clearRect(0, 0, width, height);

      if (isVisible) {
        // Interpolate main white ball (fast, responsive follow)
        whiteX += (mouseX - whiteX) * 0.28;
        whiteY += (mouseY - whiteY) * 0.28;

        // Interpolate neon green ball (trails fluidly behind with a slight delay)
        greenX += (mouseX - greenX) * 0.14;
        greenY += (mouseY - greenY) * 0.14;

        // Push history trail points when moving
        whiteTrails.unshift({ x: whiteX, y: whiteY, alpha: 0.85 });
        greenTrails.unshift({ x: greenX, y: greenY, alpha: 0.95 });
      }

      // ── 1. Draw Ambient Cursor Spotlight Radial Glow ──
      if (isVisible) {
        const glow = ctx.createRadialGradient(greenX, greenY, 0, greenX, greenY, 320);
        glow.addColorStop(0, "rgba(16, 185, 129, 0.14)");
        glow.addColorStop(0.4, "rgba(0, 240, 255, 0.05)");
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(greenX, greenY, 320, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── 2. Draw White Ball Disappearing Traces ──
      for (let i = whiteTrails.length - 1; i >= 0; i--) {
        const t = whiteTrails[i];
        t.alpha -= 0.045; // Smooth decay
        if (t.alpha <= 0) {
          whiteTrails.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = t.alpha;
        ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
        ctx.shadowBlur = 10;
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        const r = Math.max(0.5, 4.5 * t.alpha);
        ctx.arc(t.x, t.y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // ── 3. Draw Neon Green Ball Disappearing Traces ──
      for (let i = greenTrails.length - 1; i >= 0; i--) {
        const t = greenTrails[i];
        t.alpha -= 0.035; // Slightly longer trailing decay
        if (t.alpha <= 0) {
          greenTrails.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = t.alpha;
        ctx.shadowColor = "#10B981";
        ctx.shadowBlur = 16;
        ctx.fillStyle = "#10B981";
        ctx.beginPath();
        const r = Math.max(0.5, 3.5 * t.alpha);
        ctx.arc(t.x, t.y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // ── 4. Draw Main White Ball ──
      if (isVisible) {
        ctx.save();
        // White ball outer ring & bright core
        ctx.shadowColor = "rgba(255, 255, 255, 1)";
        ctx.shadowBlur = 20;
        ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
        ctx.beginPath();
        ctx.arc(whiteX, whiteY, 7.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(whiteX, whiteY, 14, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // ── 5. Draw Trailing Neon Green Ball ──
      if (isVisible) {
        ctx.save();
        ctx.shadowColor = "#10B981";
        ctx.shadowBlur = 24;
        ctx.fillStyle = "#10B981";
        ctx.beginPath();
        ctx.arc(greenX, greenY, 5, 0, Math.PI * 2);
        ctx.fill();

        // Extra inner highlight
        ctx.fillStyle = "#6EE7B7";
        ctx.beginPath();
        ctx.arc(greenX, greenY, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999] w-full h-full"
    />
  );
};
