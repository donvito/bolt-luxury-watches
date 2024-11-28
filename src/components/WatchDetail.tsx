import React from 'react';
import { Watch } from '../types/watch';
import { X, Clock, Ruler, Droplets, Watch as WatchIcon } from 'lucide-react';

interface WatchDetailProps {
  watch: Watch;
  onClose: () => void;
}

export function WatchDetail({ watch, onClose }: WatchDetailProps) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800">
        <div className="sticky top-0 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{watch.brand} {watch.model}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-full text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div>
            <img 
              src={watch.imageUrl} 
              alt={`${watch.brand} ${watch.model}`}
              className="w-full h-[400px] object-cover rounded-lg border border-gray-800"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <div>
                    <p className="text-sm text-gray-400">Year</p>
                    <p className="font-medium text-white">{watch.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Ruler className="w-5 h-5 text-amber-400" />
                  <div>
                    <p className="text-sm text-gray-400">Case Size</p>
                    <p className="font-medium text-white">{watch.case.diameter}mm</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-amber-400" />
                  <div>
                    <p className="text-sm text-gray-400">Water Resistance</p>
                    <p className="font-medium text-white">{watch.case.waterResistance}m</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <WatchIcon className="w-5 h-5 text-amber-400" />
                  <div>
                    <p className="text-sm text-gray-400">Movement</p>
                    <p className="font-medium text-white">{watch.movement}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Description</h3>
              <p className="text-gray-400">{watch.description}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">History</h3>
              <p className="text-gray-400">{watch.history}</p>
            </div>
            
            <div className="pt-4 border-t border-gray-800">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-400">Reference</p>
                  <p className="font-medium text-white">{watch.reference}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Price</p>
                  <p className="text-2xl font-bold text-amber-400">${watch.price.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}