
import React, { useState, useEffect, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '../components/ui/dialog';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useScrollAnimation } from '../hooks/use-scroll-animation';
import { GALLERY_IMAGES } from '../lib/constants';

const Gallery = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: galleryRef, isVisible: galleryVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const goToNext = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_IMAGES.length);
    }
  }, [selectedImageIndex]);

  const goToPrevious = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? GALLERY_IMAGES.length - 1 : selectedImageIndex - 1);
    }
  }, [selectedImageIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        if (event.key === 'ArrowRight') {
          goToNext();
        } else if (event.key === 'ArrowLeft') {
          goToPrevious();
        } else if (event.key === 'Escape') {
          setSelectedImageIndex(null);
        }
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (selectedImageIndex !== null) {
        event.preventDefault();
        if (event.deltaY > 0) {
          goToNext();
        } else {
          goToPrevious();
        }
      }
    };

    if (selectedImageIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('wheel', handleWheel);
    };
  }, [selectedImageIndex, goToNext, goToPrevious]);

  return (
    <section id="galerie" className="py-20 gradient-gallery relative overflow-hidden" aria-labelledby="gallery-heading">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-100/25 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-100/20 rounded-full blur-3xl" aria-hidden="true" />
      
      <div className="container mx-auto section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" ref={headerRef}>
            <h2 
              id="gallery-heading"
              className={`text-4xl md:text-5xl font-playfair font-bold text-gradient mb-8 fade-in-up ${headerVisible ? 'animate' : ''}`}
            >
              Galerie
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-green-700 to-emerald-700 mx-auto mb-8 rounded-full slide-up ${headerVisible ? 'animate' : ''}`} aria-hidden="true"></div>
            <p className={`text-xl text-gray-700 max-w-2xl mx-auto fade-in-up ${headerVisible ? 'animate' : ''}`}>
              Podívejte se na některé z mých realizovaných projektů
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${galleryVisible ? 'animate' : ''}`} ref={galleryRef}>
            {GALLERY_IMAGES.map((image, index) => (
              <Dialog key={index} open={selectedImageIndex === index} onOpenChange={(open) => !open && setSelectedImageIndex(null)}>
                <DialogTrigger asChild>
                  <div 
                    className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-square stagger-item cursor-pointer hover:-translate-y-2 ${galleryVisible ? 'animate' : ''}`}
                    style={{ transform: 'translateZ(0)' }}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 rounded-2xl"
                      style={{ backgroundImage: `url('${image.url}')` }}
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="glass rounded-xl p-4 backdrop-blur-sm">
                        <p className="text-white text-sm font-medium leading-relaxed">
                          {image.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Zoom icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      <ZoomIn className="w-5 h-5 text-green-700" />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none">
                  <div className="relative">
                    <img 
                      src={GALLERY_IMAGES[selectedImageIndex || 0].url} 
                      alt={GALLERY_IMAGES[selectedImageIndex || 0].description}
                      className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                    />
                    
                    {/* Navigation buttons */}
                    <button
                      onClick={goToPrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 glass rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                      aria-label="Předchozí obrázek"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    
                    <button
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 glass rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                      aria-label="Další obrázek"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                    
                    {/* Image counter */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full backdrop-blur-sm">
                      <span className="text-white font-semibold text-sm">
                        {(selectedImageIndex || 0) + 1} / {GALLERY_IMAGES.length}
                      </span>
                    </div>
                  </div>
                  
                  {/* Image description below image */}
                  <div className="mt-2 max-w-2xl mx-auto">
                    <p className="text-white text-sm font-medium leading-relaxed text-center">
                      {GALLERY_IMAGES[selectedImageIndex || 0].description}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
