import * as React from 'react';
import Hero from './ui/Hero';
import DetailBar from './components/DetailBar';
import About from './ui/About';
import ExpEdu from './ui/ExpEdu';
import Skills from './ui/Skills';
import Portfolio from './ui/Portfolio';
import Testimonials from './ui/Testimonials';
import Contact from './ui/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <DetailBar />
      <About />
      <Skills />
      <ExpEdu />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
}