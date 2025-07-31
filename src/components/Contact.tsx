
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/use-scroll-animation';

const Contact = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  return (
    <section id="kontakt" className="py-20 gradient-contact relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-20 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-64 h-64 bg-green-100/25 rounded-full blur-3xl" />
      
      <div className="container mx-auto section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" ref={headerRef}>
            <h2 className={`text-4xl md:text-5xl font-playfair font-bold text-gradient mb-8 fade-in-up ${headerVisible ? 'animate' : ''}`}>
              Kontakt
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-green-700 to-emerald-700 mx-auto mb-8 rounded-full slide-up ${headerVisible ? 'animate' : ''}`}></div>
            <p className={`text-xl text-gray-700 max-w-2xl mx-auto fade-in-up ${headerVisible ? 'animate' : ''}`}>
              Pojďme společně vytvořit vaši vysněnou zahradu
            </p>
          </div>

          <div className={`grid lg:grid-cols-2 gap-12 items-start ${contentVisible ? 'animate' : ''}`} ref={contentRef}>
            <div className={`space-y-8 fade-in-left ${contentVisible ? 'animate' : ''}`}>
              <div className="card-gradient rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-playfair font-semibold text-gradient mb-8">
                  Spojte se se mnou
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-700 to-emerald-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Telefon</p>
                      <a href="tel:+420123456789" className="text-lg font-semibold text-gray-800 hover:text-green-700 transition-colors">
                        +420 123 456 789
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-700 to-emerald-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Email</p>
                      <a href="mailto:ruslan@zahradnik.cz" className="text-lg font-semibold text-gray-800 hover:text-green-700 transition-colors">
                        ruslan@zahradnik.cz
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-700 to-emerald-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Lokalita</p>
                      <span className="text-lg font-semibold text-gray-800">
                        Brno a okolí
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full border border-green-200">
                    <div className="w-2 h-2 bg-green-700 rounded-full mr-2"></div>
                    <span className="text-green-800 font-semibold text-sm">
                      Obsluhuji oblasti do 30 km od Brna
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`fade-in-right ${contentVisible ? 'animate' : ''}`}>
              <div className="card-gradient rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-playfair font-semibold text-gradient mb-8">
                  Oblast působnosti
                </h3>
                
                {/* Enhanced map placeholder */}
                <div className="relative w-full h-80 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl overflow-hidden border border-green-100">
                  <div 
                    className="w-full h-full bg-cover bg-center opacity-80"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-emerald-900/10" />
                  
                  {/* Brno marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-700 to-emerald-700 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border border-green-200">
                        <span className="text-sm font-semibold text-green-800">Brno</span>
                      </div>
                    </div>
                    
                    {/* 30km radius circle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-green-400/50 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Service area info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass rounded-xl p-4 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-green-800 font-semibold">Dosah služeb</p>
                          <p className="text-xs text-green-700">30 km od Brna</p>
                        </div>
                        <div className="w-3 h-3 bg-green-700 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional info */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                    <span className="text-sm text-gray-600">Bezplatná konzultace</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                    <span className="text-sm text-gray-600">Flexibilní termíny</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                    <span className="text-sm text-gray-600">Garance kvality</span>
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
