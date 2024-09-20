import * as React from 'react';
import Hero from './components/Hero';
import DetailBar from './components/DetailBar';

export default function Home() {
  return (
    <main>
      <Hero />
      <DetailBar text={['Hi', 'Hello', 'Bye']} number={[12, 13, 14]} />
    </main>
  );
}