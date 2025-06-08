
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '../components/ui/dialog';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const images = [
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1);
    }
  };

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
  }, [selectedImageIndex]);

  return (
    <section id="galerie" className="py-20 bg-garden-cream">
      <div className="container mx-auto section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-garden-forest mb-8 fade-in-up">
              Galerie
            </h2>
            <div className="w-24 h-1 bg-garden-sage mx-auto mb-8"></div>
            <p className="text-xl text-garden-moss max-w-2xl mx-auto fade-in-up">
              Podívejte se na některé z mých realizovaných projektů
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Dialog key={index} open={selectedImageIndex === index} onOpenChange={(open) => !open && setSelectedImageIndex(null)}>
                <DialogTrigger asChild>
                  <div 
                    className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 aspect-square fade-in-up cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundImage: `url('${image}')` }}
                    />
                    <div className="absolute inset-0 bg-garden-forest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-3">
                        <svg className="w-6 h-6 text-garden-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                  <div className="relative">
                    <img 
                      src={images[selectedImageIndex || 0]} 
                      alt={`Zahradní projekt ${(selectedImageIndex || 0) + 1}`}
                      className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                    />
                    
                    {/* Navigation buttons */}
                    <button
                      onClick={goToPrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                    >
                      <ChevronLeft className="w-6 h-6 text-garden-forest" />
                    </button>
                    
                    <button
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                    >
                      <ChevronRight className="w-6 h-6 text-garden-forest" />
                    </button>
                    
                    {/* Image counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {(selectedImageIndex || 0) + 1} / {images.length}
                    </div>
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
