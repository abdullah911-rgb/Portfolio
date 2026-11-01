import { useEffect } from "react";
import Lenis from "lenis";
import { MouseSpotlight } from "./components/MouseSpotlight";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Journey } from "./components/Journey";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Education } from "./components/Education";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (target) {
        const href = target.getAttribute("href");
        if (href && href.length > 1) {
          const el = document.querySelector(href);
          if (el) {
            e.preventDefault();
            lenis.scrollTo(el as HTMLElement, { offset: -70, duration: 1.2 });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0D06] text-[#E2D2B8] relative selection:bg-[#B89B6F]/30 selection:text-[#E2D2B8]">
      {/* Ambient mouse follower with disappearing traces */}
      <MouseSpotlight />

      {/* Main Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Marquee />
        <About />
        <TechStack />
        <Journey />
        <Projects />
        <Services />
        <Education />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
