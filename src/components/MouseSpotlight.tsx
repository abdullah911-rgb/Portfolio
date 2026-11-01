import React, { useEffect, useRef } from "react";

interface TrailPoint {
  x: number;
  y: number;
  alpha: number;
  size: number;
}

export const MouseSpotlight: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;

    const setupCanvas = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    setupCanvas();
    window.addEventListener("resize", setupCanvas);

    // Target mouse coordinates
    let mouseX = -100;
    let mouseY = -100;
    let isVisible = false;

    // Ball coordinates
    let whiteX = -100;
    let whiteY = -100;
    let greenX = -100;
    let greenY = -100;

    // Movement tracking for spawning traces
    let lastSpawnX = -100;
    let lastSpawnY = -100;

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
        lastSpawnX = mouseX;
        lastSpawnY = mouseY;
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

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (isVisible) {
        // White ball moves fast and responsive
        whiteX += (mouseX - whiteX) * 0.35;
        whiteY += (mouseY - whiteY) * 0.35;

        // Smaller Neon green ball trails behind with smooth spring lag
        greenX += (mouseX - greenX) * 0.16;
        greenY += (mouseY - greenY) * 0.16;

        // ONLY spawn traces if mouse has actually moved significantly
        const movedDist = Math.hypot(whiteX - lastSpawnX, whiteY - lastSpawnY);
        if (movedDist > 6) {
          whiteTrails.unshift({
            x: whiteX,
            y: whiteY,
            alpha: 0.75,
            size: 4.5,
          });
          greenTrails.unshift({
            x: greenX,
            y: greenY,
            alpha: 0.85,
            size: 3.5,
          });
          lastSpawnX = whiteX;
          lastSpawnY = whiteY;

          // Cap maximum trail count so they never stack
          if (whiteTrails.length > 20) whiteTrails.pop();
          if (greenTrails.length > 20) greenTrails.pop();
        }

        // 1. Ambient cursor lighting spotlight (soft glow on dark background)
        const spotlight = ctx.createRadialGradient(
          whiteX,
          whiteY,
          0,
          whiteX,
          whiteY,
          240
        );
        spotlight.addColorStop(0, "rgba(82, 255, 184, 0.08)");
        spotlight.addColorStop(0.35, "rgba(184, 155, 111, 0.05)");
        spotlight.addColorStop(0.7, "rgba(226, 210, 184, 0.015)");
        spotlight.addColorStop(1, "transparent");
        ctx.fillStyle = spotlight;
        ctx.beginPath();
        ctx.arc(whiteX, whiteY, 240, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Render and decay white ball disappearing traces
      for (let i = whiteTrails.length - 1; i >= 0; i--) {
        const p = whiteTrails[i];
        p.alpha -= 0.05; // Fades out in ~20 frames (~0.3s)
        p.size = Math.max(0.5, p.size * 0.94);

        if (p.alpha <= 0) {
          whiteTrails.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = "#FFFFFF";
        ctx.shadowBlur = 10;
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 3. Render and decay neon green ball disappearing traces
      for (let i = greenTrails.length - 1; i >= 0; i--) {
        const p = greenTrails[i];
        p.alpha -= 0.045; // Fades out in ~22 frames
        p.size = Math.max(0.5, p.size * 0.93);

        if (p.alpha <= 0) {
          greenTrails.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = "#52FFB8";
        ctx.shadowBlur = 14;
        ctx.fillStyle = "#52FFB8";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 4. Draw Main White Ball (Larger, bright glowing core + halo ring)
      if (isVisible) {
        ctx.save();
        // Inner white core
        ctx.shadowColor = "rgba(255, 255, 255, 1)";
        ctx.shadowBlur = 18;
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(whiteX, whiteY, 6.5, 0, Math.PI * 2);
        ctx.fill();

        // Delicate outer halo ring
        ctx.strokeStyle = "rgba(255, 255, 255, 0.65)";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(whiteX, whiteY, 12, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // 5. Draw Trailing Neon Green Ball (Smaller, bright electric neon emerald)
      if (isVisible) {
        ctx.save();
        ctx.shadowColor = "#52FFB8";
        ctx.shadowBlur = 20;
        ctx.fillStyle = "#52FFB8";
        ctx.beginPath();
        ctx.arc(greenX, greenY, 4.5, 0, Math.PI * 2);
        ctx.fill();

        // Intense center point
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(greenX, greenY, 2.0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", setupCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[99999] block"
      style={{ width: "100vw", height: "100vh" }}
      aria-hidden="true"
    />
  );
};
