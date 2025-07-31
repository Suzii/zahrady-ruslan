import React, { useState, useRef, useEffect } from 'react';

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Generate a placeholder image as base64
  const generatePlaceholder = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1920;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Create a modern gradient background with darker greens
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#052e16');
      gradient.addColorStop(0.3, '#064e3b');
      gradient.addColorStop(0.7, '#0f766e');
      gradient.addColorStop(1, '#042f2e');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add subtle texture
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      for (let i = 0; i < 150; i++) {
        ctx.beginPath();
        ctx.arc(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 2 + 1,
          0,
          2 * Math.PI
        );
        ctx.fill();
      }
    }
    
    return canvas.toDataURL('image/jpeg', 0.8);
  };

  const [placeholderImage] = useState(() => generatePlaceholder());

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    setShowPlaceholder(false);
  };

  const handleVideoError = () => {
    console.warn('Video failed to load, keeping placeholder');
    setShowPlaceholder(true);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('canplaythrough', handleVideoLoad);
      video.addEventListener('error', handleVideoError);
      
      return () => {
        video.removeEventListener('canplaythrough', handleVideoLoad);
        video.removeEventListener('error', handleVideoError);
      };
    }
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={placeholderImage}
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Placeholder Background Image */}
      {showPlaceholder && (
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage: `url('${placeholderImage}')`
          }}
        />
      )}
      
      {/* Modern Gradient Overlay with darker greens */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/50 via-emerald-900/40 to-teal-900/50" />
      
      {/* Additional subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center z-10">
        <div className="max-w-5xl mx-auto section-padding">
          {/* Glass morphism card for content */}
          <div className="glass rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 leading-tight drop-shadow-lg">
              kompletní realizace zahrad
            </h1>
            <p className="text-xl md:text-2xl text-white/95 font-light mb-8 max-w-3xl mx-auto">
              Profesionální zahradnické služby s péčí o každý detail
            </p>
            
            {/* Modern CTA button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary-gradient text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
                Kontaktujte mě
              </button>
              <button className="glass text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/30">
                Prohlédnout služby
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="glass rounded-full p-2">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-teal-400/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-emerald-300/15 rounded-full blur-md animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;
