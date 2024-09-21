import * as React from 'react';
import Hero from './sections/Hero';
import DetailBar from './components/DetailBar';
import About from './sections/About';
import ExpEdu from './sections/ExpEdu';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';

export default function Home() {
  return (
    <main>
      <Hero />
      <DetailBar />
      <About />
      <ExpEdu />
      <Skills />
      <Portfolio />
    </main>
  );
}