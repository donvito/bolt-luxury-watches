import React from 'react';
import { Gem, Cog, Gauge } from 'lucide-react';

export function Expertise() {
  const craftsmanshipSteps = [
    {
      title: "Movement Assembly",
      description: "Each movement is assembled by hand with microscopic precision, ensuring perfect mechanical harmony.",
      image: "https://images.unsplash.com/photo-1663564307096-e635ce2addeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhdGVrJTIwcGhpbGlwcGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Case Manufacturing",
      description: "Premium materials are shaped with expert precision to create cases that protect and showcase our movements.",
      image: "https://images.unsplash.com/photo-1663564304546-38addf4a4358?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Quality Control",
      description: "Rigorous testing ensures each timepiece meets our exacting standards for precision and reliability.",
      image: "https://images.unsplash.com/photo-1663564307102-6df750b2196b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGF0ZWslMjBwaGlsaXBwZXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  return (
    <div className="bg-black">
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1663564305613-c40450f29903?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBhdGVrJTIwcGhpbGlwcGV8ZW58MHx8MHx8fDA%3D"
          alt="Watchmaking Expertise"
          className="w-full h-full object-cover opacity-50 scale-110 transform hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-white uppercase mb-6">
              Our <span className="font-medium">Expertise</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto px-4 text-lg">
              Mastering the art of fine watchmaking through generations of excellence
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-12 mb-32">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-400/5 to-transparent rounded-lg -z-10 group-hover:from-amber-400/10 transition-colors duration-500" />
            <div className="p-8 text-center">
              <div className="mb-6 relative">
                <Gem className="w-12 h-12 text-amber-400 mx-auto relative z-10" />
                <div className="absolute inset-0 blur-lg bg-amber-400/20 rounded-full" />
              </div>
              <h3 className="text-xl font-light tracking-wider text-white uppercase mb-4">Materials</h3>
              <p className="text-gray-400 leading-relaxed">
                Only the finest materials are selected for our timepieces, from precious metals
                to rare complications, ensuring lasting beauty and value.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-400/5 to-transparent rounded-lg -z-10 group-hover:from-amber-400/10 transition-colors duration-500" />
            <div className="p-8 text-center">
              <div className="mb-6 relative">
                <Cog className="w-12 h-12 text-amber-400 mx-auto relative z-10" />
                <div className="absolute inset-0 blur-lg bg-amber-400/20 rounded-full" />
              </div>
              <h3 className="text-xl font-light tracking-wider text-white uppercase mb-4">Precision</h3>
              <p className="text-gray-400 leading-relaxed">
                Each component is crafted to microscopic tolerances, assembled by master watchmakers
                with decades of experience.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-400/5 to-transparent rounded-lg -z-10 group-hover:from-amber-400/10 transition-colors duration-500" />
            <div className="p-8 text-center">
              <div className="mb-6 relative">
                <Gauge className="w-12 h-12 text-amber-400 mx-auto relative z-10" />
                <div className="absolute inset-0 blur-lg bg-amber-400/20 rounded-full" />
              </div>
              <h3 className="text-xl font-light tracking-wider text-white uppercase mb-4">Innovation</h3>
              <p className="text-gray-400 leading-relaxed">
                While honoring traditional craftsmanship, we embrace innovative techniques
                and complications that push the boundaries of horology.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-24">
          {craftsmanshipSteps.map((step, index) => (
            <div key={step.title} className={`grid md:grid-cols-2 gap-16 items-center ${
              index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
            }`}>
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <h2 className="text-3xl font-light tracking-wider text-white uppercase mb-8">
                  {step.title}
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className={`relative ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                <img
                  src={step.image}
                  alt={step.title}
                  className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 border border-amber-400/20 rounded-lg transform translate-x-4 translate-y-4 -z-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}