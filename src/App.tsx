import React, { useState, useEffect } from 'react';
import { PodiumBoxInfographic } from './components/PodiumBoxInfographic';

export default function App() {
  const [textSize, setTextSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [themeMode, setThemeMode] = useState<'paper' | 'dark' | 'light'>('paper');

  // Sync dark class on root document
  useEffect(() => {
    const root = document.documentElement;
    if (themeMode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [themeMode]);

  return (
    <div className={`min-h-screen py-8 sm:py-12 transition-colors duration-300 ${
      themeMode === 'dark'
        ? 'bg-stone-950 text-stone-100'
        : themeMode === 'paper'
        ? 'bg-[#FEF9E7] text-stone-900 bg-paper'
        : 'bg-[#FFFDF0] text-stone-900'
    }`}>
      
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Podium 3-Box Standup Infographic matching reference style */}
        <PodiumBoxInfographic
          textSize={textSize}
        />

      </main>

    </div>
  );
}
