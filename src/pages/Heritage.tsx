import React from 'react';
import { Clock, Award, Crown } from 'lucide-react';

export function Heritage() {
  return (
    <div className="bg-black">
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1706983469438-8ec41982f401?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGF0ZWslMjBwaGlsaXBwZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Watchmaking Heritage"
          className="w-full h-full object-cover opacity-50 scale-110 transform hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-white uppercase mb-6">
              Our <span className="font-medium">Heritage</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto px-4 text-lg">
              A legacy of excellence in haute horlogerie spanning generations
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="mb-6 relative">
              <Clock className="w-12 h-12 text-amber-400 mx-auto relative z-10" />
              <div className="absolute inset-0 blur-lg bg-amber-400/20 rounded-full group-hover:bg-amber-400/30 transition-colors duration-500" />
            </div>
            <h3 className="text-xl font-light tracking-wider text-white uppercase mb-4">Timeless Tradition</h3>
            <p className="text-gray-400 leading-relaxed">
              Since 1970, our commitment to excellence has shaped the world of luxury timepieces,
              preserving traditional craftsmanship while embracing innovation.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="mb-6 relative">
              <Award className="w-12 h-12 text-amber-400 mx-auto relative z-10" />
              <div className="absolute inset-0 blur-lg bg-amber-400/20 rounded-full group-hover:bg-amber-400/30 transition-colors duration-500" />
            </div>
            <h3 className="text-xl font-light tracking-wider text-white uppercase mb-4">Master Artisans</h3>
            <p className="text-gray-400 leading-relaxed">
              Our master watchmakers represent generations of expertise, each timepiece a testament
              to their dedication to perfection and artistic vision.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="mb-6 relative">
              <Crown className="w-12 h-12 text-amber-400 mx-auto relative z-10" />
              <div className="absolute inset-0 blur-lg bg-amber-400/20 rounded-full group-hover:bg-amber-400/30 transition-colors duration-500" />
            </div>
            <h3 className="text-xl font-light tracking-wider text-white uppercase mb-4">Royal Heritage</h3>
            <p className="text-gray-400 leading-relaxed">
              Our timepieces have adorned the wrists of royalty and connoisseurs, establishing
              a legacy of prestige and unparalleled craftsmanship.
            </p>
          </div>
        </div>

        <div className="mt-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light tracking-wider text-white uppercase mb-8">
                A Legacy of <span className="font-medium">Excellence</span>
              </h2>
              <div className="space-y-6 text-gray-400">
                <p>
                  Founded in 1970, Maison Horlogerie emerged from a passion for exceptional
                  watchmaking. Our founder's vision was to create timepieces that would stand as
                  monuments to the art of horology.
                </p>
                <p>
                  Through decades of dedication, we have maintained our position at the forefront
                  of haute horlogerie, combining traditional techniques with innovative approaches
                  to create masterpieces that transcend time.
                </p>
                <p>
                  Each timepiece that leaves our atelier carries with it a piece of our heritage,
                  a testament to our unwavering commitment to excellence and the perpetuation of
                  fine watchmaking.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1663564307102-6df750b2196b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGF0ZWslMjBwaGlsaXBwZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Watchmaking Tradition"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 border border-amber-400/20 rounded-lg transform translate-x-4 translate-y-4 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}