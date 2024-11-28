import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Watch } from './types/watch';
import { watches, featuredWatch } from './data/watches';
import { WatchCard } from './components/WatchCard';
import { WatchDetail } from './components/WatchDetail';
import { HeroWatch } from './components/HeroWatch';
import { Layout } from './components/Layout';
import { Heritage } from './pages/Heritage';
import { Expertise } from './pages/Expertise';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Collection />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/expertise" element={<Expertise />} />
      </Routes>
    </Layout>
  );
}

function Collection() {
  const [selectedWatch, setSelectedWatch] = useState<Watch | null>(null);

  return (
    <>
      <HeroWatch watch={featuredWatch} onExplore={setSelectedWatch} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="relative">
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent" />
          <blockquote className="relative py-16">
            <p className="text-2xl font-light text-gray-300 italic tracking-wide leading-relaxed">
              "In the realm of haute horlogerie, time transcends mere measurement—it becomes an art form, 
              a testament to human ingenuity, and a legacy that spans generations."
            </p>
            <footer className="mt-8">
              <p className="text-amber-400 tracking-[0.2em] uppercase text-sm">Jean-Claude Biver</p>
              <p className="text-gray-500 text-sm mt-1">Legendary Watchmaker</p>
            </footer>
          </blockquote>
          <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent" />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-extralight tracking-wider text-white uppercase">
            Exceptional <span className="font-medium">Collection</span>
          </h2>
          <div className="hidden md:block h-[1px] flex-1 mx-8 bg-gradient-to-r from-transparent via-amber-900/30 to-transparent" />
          <p className="hidden md:block text-gray-400 text-sm tracking-wider uppercase">Haute Horlogerie</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {watches.map((watch) => (
            <WatchCard
              key={watch.id}
              watch={watch}
              onClick={setSelectedWatch}
            />
          ))}
        </div>
      </main>

      {selectedWatch && (
        <WatchDetail
          watch={selectedWatch}
          onClose={() => setSelectedWatch(null)}
        />
      )}
    </>
  );
}
