
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

          <div className={`space-y-12 ${contentVisible ? 'animate' : ''}`} ref={contentRef}>
            {/* Benefits Row - Three Columns */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className={`text-center fade-in-left ${contentVisible ? 'animate' : ''}`}>
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-md">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gradient mb-3">Bezplatná konzultace</h3>
                <p className="text-gray-600 leading-relaxed">První setkání a konzultace řešení zdarma. Společně probereme vaše představy a možnosti.</p>
              </div>

              <div className={`text-center fade-in-up ${contentVisible ? 'animate' : ''}`}>
                <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-md">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gradient mb-3">Kompletní služby</h3>
                <p className="text-gray-600 leading-relaxed">Od založení až po údržbu zahrady. Poskytuji kompletní zahradnické služby.</p>
              </div>

              <div className={`text-center fade-in-right ${contentVisible ? 'animate' : ''}`}>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-md">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gradient mb-3">Garance kvality</h3>
                <p className="text-gray-600 leading-relaxed">Spokojenost zákazníků je prioritou. Každý projekt dokončuji s maximální péčí.</p>
              </div>
            </div>

            {/* Contact & Service Area */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Contact Information */}
              <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 fade-in-left ${contentVisible ? 'animate' : ''}`}>
                <h3 className="text-xl font-playfair font-semibold text-gradient mb-6">Kontakt</h3>
                
                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Telefon</p>
                      <a href="tel:+420123456789" className="text-xl font-bold text-gradient hover:scale-105 transition-transform duration-300">
                        +420 123 456 789
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Email</p>
                      <a href="mailto:ruslan@zahradnik.cz" className="text-lg font-semibold text-gradient hover:scale-105 transition-transform duration-300">
                        ruslan@zahradnik.cz
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Lokalita</p>
                      <span className="text-lg font-semibold text-gradient">Brno a okolí</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Area Map */}
              <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 fade-in-right ${contentVisible ? 'animate' : ''}`}>
                <h3 className="text-xl font-playfair font-semibold text-gradient mb-4">Oblast působnosti</h3>
                
                <div className="relative w-full h-48 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl overflow-hidden border border-green-100">
                  <div 
                    className="w-full h-full bg-cover bg-center opacity-60"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900/5 to-emerald-900/5" />
                  
                  {/* Brno marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-5 h-5 bg-gradient-to-br from-green-700 to-emerald-700 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded-full shadow-lg border border-green-200">
                        <span className="text-xs font-semibold text-green-800">Brno</span>
                      </div>
                    </div>
                    
                    {/* 30km radius circle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-green-400/40 rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-center">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full border border-green-200">
                    <div className="w-2 h-2 bg-green-700 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-green-800 font-semibold text-sm">
                      Obsluhuji oblasti do 30 km od Brna
                    </span>
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
