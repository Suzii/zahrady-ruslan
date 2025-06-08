
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="kontakt" className="py-20 bg-background">
      <div className="container mx-auto section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-garden-forest mb-8 fade-in-up">
              Kontakt
            </h2>
            <div className="w-24 h-1 bg-garden-sage mx-auto mb-8"></div>
            <p className="text-xl text-garden-moss max-w-2xl mx-auto fade-in-up">
              Pojďme společně vytvořit vaši vysněnou zahradu
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in-up">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-playfair font-semibold text-garden-forest mb-6">
                  Spojte se se mnou
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-garden-sage rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-garden-forest" />
                    </div>
                    <div>
                      <p className="text-sm text-garden-moss">Telefon</p>
                      <a href="tel:+420123456789" className="text-lg font-semibold text-garden-forest hover:text-garden-sage transition-colors">
                        +420 123 456 789
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-garden-sage rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-garden-forest" />
                    </div>
                    <div>
                      <p className="text-sm text-garden-moss">Email</p>
                      <a href="mailto:ruslan@zahradnik.cz" className="text-lg font-semibold text-garden-forest hover:text-garden-sage transition-colors">
                        ruslan@zahradnik.cz
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-garden-stone/20">
                  <p className="text-garden-moss text-center">
                    <span className="font-semibold text-garden-forest">Obsluhuji oblasti:</span><br />
                    do 30 km od Brna
                  </p>
                </div>
              </div>
            </div>

            <div className="fade-in-up">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-playfair font-semibold text-garden-forest mb-6">
                  Oblast působnosti
                </h3>
                
                {/* Simple map placeholder */}
                <div className="relative w-full h-80 bg-garden-cream rounded-lg overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                    }}
                  />
                  <div className="absolute inset-0 bg-garden-forest/20" />
                  
                  {/* Brno marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-6 h-6 bg-garden-forest rounded-full border-4 border-white shadow-lg"></div>
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-lg">
                        <span className="text-sm font-semibold text-garden-forest">Brno</span>
                      </div>
                    </div>
                    
                    {/* 30km radius circle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-garden-sage/50 rounded-full"></div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-2 rounded-lg">
                    <p className="text-sm text-garden-forest font-medium">Dosah: 30 km od Brna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
