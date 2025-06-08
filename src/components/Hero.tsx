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
      // Create a gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#1a5f1a');
      gradient.addColorStop(0.5, '#2d7a2d');
      gradient.addColorStop(1, '#1a5f1a');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add some texture
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.arc(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 3,
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
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center z-10">
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
