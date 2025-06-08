
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto section-padding">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 leading-tight">
            kompletní realizace zahrad
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            Profesionální zahradnické služby s péčí o každý detail
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
