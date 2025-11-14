import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BackgroundBeamsDemo } from '../BackgroundBeamsDemo';
import { SmoothCursor } from '../cursor';

export const PageLayout = ({ children, showBeams = true }) => {
  return (
    <div className="relative min-h-screen">
      <SmoothCursor />
      {showBeams && <BackgroundBeamsDemo />}
      <Navbar />
      <main className="relative z-10 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
