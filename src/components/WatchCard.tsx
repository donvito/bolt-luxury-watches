import React from 'react';
import { Watch } from '../types/watch';
import { Clock, Ruler, Droplets } from 'lucide-react';

interface WatchCardProps {
  watch: Watch;
  onClick: (watch: Watch) => void;
}

export function WatchCard({ watch, onClick }: WatchCardProps) {
  return (
    <div 
      className="group bg-gradient-to-b from-gray-900 to-black rounded-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 border border-gray-800/50 hover:border-amber-900/50 relative shadow-lg hover:shadow-amber-900/20"
      onClick={() => onClick(watch)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative h-64">
        <img 
          src={watch.imageUrl} 
          alt={`${watch.brand} ${watch.model}`}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-110"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
          <h3 className="text-white font-light tracking-[0.2em] text-lg uppercase transform transition-all duration-500 group-hover:translate-x-2">{watch.brand}</h3>
          <p className="text-amber-400/90 font-medium transform transition-all duration-500 delay-75 group-hover:translate-x-2">{watch.model}</p>
        </div>
      </div>
      <div className="p-6 relative border-t border-gray-800/30 bg-gradient-to-b from-black to-gray-900">
        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-500 text-sm tracking-[0.15em] group-hover:text-gray-400 transition-colors duration-300">REF. {watch.reference}</span>
          <span className="text-lg font-light tracking-wider text-amber-400 group-hover:text-amber-300 transition-colors duration-300">${watch.price.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400/50 group-hover:text-amber-400/70 transition-colors duration-300" />
            <span>{watch.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <Ruler className="w-4 h-4 text-amber-400/50 group-hover:text-amber-400/70 transition-colors duration-300" />
            <span>{watch.case.diameter}mm</span>
          </div>
          <div className="flex items-center gap-2">
            <Droplets className="w-4 h-4 text-amber-400/50 group-hover:text-amber-400/70 transition-colors duration-300" />
            <span>{watch.case.waterResistance}m</span>
          </div>
        </div>
      </div>
    </div>
  );
}