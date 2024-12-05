'use client'

import * as React from 'react';
import Hero from './pages/Hero';
import DetailBar from './components/DetailBar';
import About from './pages/About';
import ExpEdu from './pages/ExpEdu';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
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