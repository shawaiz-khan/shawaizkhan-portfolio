'use client'

import * as React from 'react';
import Hero from './ui/Hero';
import DetailBar from './components/DetailBar';
import About from './ui/About';
import ExpEdu from './ui/ExpEdu';
import Skills from './ui/Skills';
import Portfolio from './ui/Portfolio';
import Testimonials from './ui/Testimonials';
import Contact from './ui/Contact';
import { useTheme } from './components/ThemeContext';

export default function Home() {
  const { theme } = useTheme();

  React.useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <>
      <Hero />
      <DetailBar />
      <About />
      <Skills />
      <ExpEdu />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
}