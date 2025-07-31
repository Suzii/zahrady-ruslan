import React, { useState, useRef, useEffect, useMemo } from 'react';
import { HERO_VIDEO_SOURCE } from '../lib/constants';

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Memoize placeholder generation to avoid recreating on every render
  const placeholderImage = useMemo(() => {
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
  }, []);

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
        <source src={HERO_VIDEO_SOURCE} type="video/mp4" />
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
      
      {/* Modern Gradient Overlay with medium greens */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/40 via-emerald-900/35 to-teal-900/40" />
      
      {/* Additional subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center z-10">
        <div className="max-w-5xl mx-auto section-padding">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white leading-tight drop-shadow-2xl">
              Kompletní realizace zahrad
            </h1>
            <p className="text-xl md:text-2xl text-white/95 font-light max-w-3xl mx-auto drop-shadow-lg">
              s láskou k detailu a profesionálním přístupem
            </p>
            {/* Subtle decorative line */}
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full shadow-lg" />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
