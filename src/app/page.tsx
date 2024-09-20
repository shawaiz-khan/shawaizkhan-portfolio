import * as React from 'react';
import Hero from './sections/Hero';
import DetailBar from './components/DetailBar';
import About from './sections/About';

export default function Home() {
  return (
    <main>
      <Hero />
      <DetailBar />
      <About />
    </main>
  );
}