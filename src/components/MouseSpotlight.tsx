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
    // Bright Gray (#E8EEF6) main ball
    let brightX = -100;
    let brightY = -100;
    // Carolina Blue (#5E9BD9) trailing ball
    let blueX = -100;
    let blueY = -100;

    // Fading trace points
    const brightTrails: TrailPoint[] = [];
    const blueTrails: TrailPoint[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        brightX = mouseX;
        brightY = mouseY;
        blueX = mouseX;
        blueY = mouseY;
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
        // Interpolate main Bright Gray ball (fast, responsive follow)
        brightX += (mouseX - brightX) * 0.28;
        brightY += (mouseY - brightY) * 0.28;

        // Interpolate Carolina Blue ball (trails fluidly behind with soft damping)
        blueX += (mouseX - blueX) * 0.14;
        blueY += (mouseY - blueY) * 0.14;

        // Push history trail points when moving
        brightTrails.unshift({ x: brightX, y: brightY, alpha: 0.85 });
        blueTrails.unshift({ x: blueX, y: blueY, alpha: 0.95 });
      }

      // ── 1. Draw 3D Ambient Cursor Spotlight (Carolina Blue #5E9BD9) ──
      if (isVisible) {
        const glow = ctx.createRadialGradient(blueX, blueY, 0, blueX, blueY, 340);
        glow.addColorStop(0, "rgba(94, 155, 217, 0.18)");
        glow.addColorStop(0.35, "rgba(94, 155, 217, 0.06)");
        glow.addColorStop(0.7, "rgba(232, 238, 246, 0.02)");
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(blueX, blueY, 340, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── 2. Draw Bright Gray (#E8EEF6) Ball Disappearing Traces ──
      for (let i = brightTrails.length - 1; i >= 0; i--) {
        const t = brightTrails[i];
        t.alpha -= 0.045; // Smooth decay
        if (t.alpha <= 0) {
          brightTrails.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = t.alpha;
        ctx.shadowColor = "rgba(232, 238, 246, 0.9)";
        ctx.shadowBlur = 12;
        ctx.fillStyle = "#E8EEF6";
        ctx.beginPath();
        const r = Math.max(0.5, 4.5 * t.alpha);
        ctx.arc(t.x, t.y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // ── 3. Draw Carolina Blue (#5E9BD9) Ball Disappearing Traces ──
      for (let i = blueTrails.length - 1; i >= 0; i--) {
        const t = blueTrails[i];
        t.alpha -= 0.035; // Slightly longer trailing decay
        if (t.alpha <= 0) {
          blueTrails.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = t.alpha;
        ctx.shadowColor = "#5E9BD9";
        ctx.shadowBlur = 18;
        ctx.fillStyle = "#5E9BD9";
        ctx.beginPath();
        const r = Math.max(0.5, 3.8 * t.alpha);
        ctx.arc(t.x, t.y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // ── 4. Draw Main Bright Gray Ball with Outer Pulse Ring ──
      if (isVisible) {
        ctx.save();
        // Inner luminous core
        ctx.shadowColor = "rgba(232, 238, 246, 1)";
        ctx.shadowBlur = 22;
        ctx.fillStyle = "#E8EEF6";
        ctx.beginPath();
        ctx.arc(brightX, brightY, 7.5, 0, Math.PI * 2);
        ctx.fill();

        // 3D Glassy Ring
        ctx.strokeStyle = "rgba(232, 238, 246, 0.85)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(brightX, brightY, 14, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // ── 5. Draw Trailing Carolina Blue (#5E9BD9) Ball ──
      if (isVisible) {
        ctx.save();
        ctx.shadowColor = "#5E9BD9";
        ctx.shadowBlur = 25;
        ctx.fillStyle = "#5E9BD9";
        ctx.beginPath();
        ctx.arc(blueX, blueY, 5.5, 0, Math.PI * 2);
        ctx.fill();

        // Inner glowing core
        ctx.fillStyle = "#A7CEF4";
        ctx.beginPath();
        ctx.arc(blueX, blueY, 2.5, 0, Math.PI * 2);
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
