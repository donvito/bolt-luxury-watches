import React from 'react';
import { Watch } from '../types/watch';
import { Clock, Award } from 'lucide-react';

interface HeroWatchProps {
  watch: Watch;
  onExplore: (watch: Watch) => void;
}

export function HeroWatch({ watch, onExplore }: HeroWatchProps) {
  return (
    <div className="relative h-[70vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          src={watch.imageUrl}
          alt={`${watch.brand} ${watch.model}`}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-6 h-6 text-amber-400" />
            <span className="text-amber-400 font-medium">Featured Timepiece</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {watch.brand}
            <span className="block text-3xl sm:text-4xl text-gray-300 mt-2">{watch.model}</span>
          </h1>
          
          <p className="text-gray-300 mb-6 line-clamp-3">{watch.description}</p>
          
          <div className="flex items-center gap-6 mb-8">
            <div>
              <p className="text-gray-400 text-sm">Reference</p>
              <p className="text-white font-medium">{watch.reference}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Price</p>
              <p className="text-white font-medium">${watch.price.toLocaleString()}</p>
            </div>
          </div>
          
          <button
            onClick={() => onExplore(watch)}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-full font-medium transition-colors"
          >
            <Clock className="w-5 h-5" />
            Explore Timepiece
          </button>
        </div>
      </div>
    </div>
  );
}