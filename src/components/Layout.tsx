import React from 'react';
import { Watch as WatchIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="min-h-screen bg-black">
      <header className="bg-gradient-to-r from-black via-gray-900 to-black border-b border-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="relative">
                <div className="relative">
                  <WatchIcon className="w-12 h-12 text-amber-400 relative z-10" />
                  <div className="absolute inset-0 blur-md bg-amber-400/20 rounded-full animate-pulse" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-extralight tracking-[0.2em] text-white uppercase">
                  Maison <span className="font-medium">Horlogerie</span>
                </h1>
                <p className="text-amber-400/80 text-xs tracking-[0.3em] mt-1">L'ART DU TEMPS DEPUIS 1970</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-12">
              <Link 
                to="/" 
                className={`text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:tracking-[0.25em] ${
                  isActive('/') ? 'text-amber-400' : 'text-gray-400 hover:text-amber-400'
                }`}
              >
                Collection
              </Link>
              <Link 
                to="/heritage" 
                className={`text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:tracking-[0.25em] ${
                  isActive('/heritage') ? 'text-amber-400' : 'text-gray-400 hover:text-amber-400'
                }`}
              >
                Heritage
              </Link>
              <Link 
                to="/expertise" 
                className={`text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:tracking-[0.25em] ${
                  isActive('/expertise') ? 'text-amber-400' : 'text-gray-400 hover:text-amber-400'
                }`}
              >
                Expertise
              </Link>
            </nav>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}