'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Publications from '@/components/Publications';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Connect from '@/components/Connect';
import Footer from '@/components/Footer';
import Butterfly from '@/components/Butterfly';
import FloatingPetals from '@/components/FloatingPetals';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 overflow-hidden">
      <Navigation />
      <Butterfly index={0} />
      <Butterfly index={1} />
      <Butterfly index={2} />
      <FloatingPetals />

      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Publications />
        <Achievements />
        <Connect />
        <Footer />
      </div>
    </main>
  );
}
