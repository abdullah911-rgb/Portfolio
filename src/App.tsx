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
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#F4F4F4] relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Ambient mouse follower */}
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
